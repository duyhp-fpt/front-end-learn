function Validator(formSelector) {

    var _this = this;

// function Validator(formSelector, option) {
// Gán giá trị mặc định khi định nghĩa ECMAS 5
//   if (!option) {
//     option = {};
//   }

  function getParent(element, selector) {
    while (element.parentElement) {
      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
  }

  var formRules = {};

  var validatorRules = {
    required: (value) => {
      return value ? undefined : "Vui lòng nhập trường này";
    },
    email: (value) => {
      const res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      return res.test(value) ? undefined : "Vui lòng nhập Email";
    },
    min: (min) => {
      return (value) => {
        return value.length >= min
          ? undefined
          : `Vui lòng nhập ít nhất ${min} kí tự`;
      };
    },
    max: (max) => {
      return (value) => {
        return value.length <= max
          ? undefined
          : `Vui lòng nhập tối đa ${max} kí tự`;
      };
    },
  };

  // Lấy ra form element trong DOM
  var formElement = document.querySelector(formSelector);

  // Chỉ xử lý khi có element trong DOM
  if (formElement) {
    var inputs = formElement.querySelectorAll("[name][rules]");
    for (var input of inputs) {
      var rules = input.getAttribute("rules").split("|");
      for (var rule of rules) {
        var ruleInfo;
        var isRuleHasValue = rule.includes(":");

        if (rule.includes(":")) {
          ruleInfo = rule.split(":");
          rule = ruleInfo[0];
        }

        var ruleFunc = validatorRules[rule];

        if (isRuleHasValue) {
          ruleFunc = ruleFunc(ruleInfo[1]);
        }

        if (Array.isArray(formRules[input.name])) {
          formRules[input.name].push(ruleFunc);
        } else {
          formRules[input.name] = [ruleFunc];
        }
      }

      //   Lắng nghe sự kiện để validate

      input.onblur = handleValidate;
      input.oninput = handleClearError;
    }

    // Hàm thực hiện validate
    function handleValidate(event) {
      var rules = formRules[event.target.name];

      var errorMessage;

      for(var rule of rules){
        errorMessage = rule(event.target.value);
        if (errorMessage) {
            break;
        }
      }

      // Nếu có lỗi
      if (errorMessage) {
        var formGroup = getParent(event.target, ".form-group");
        if (formGroup) {
          formGroup.classList.add("invalid");
          var formMessage = formGroup.querySelector(".form-message");
          if (formMessage) {
            formMessage.innerText = errorMessage;
          }
        }
      }
      return !errorMessage;
    }

    // Hàm clear message error
    function handleClearError(event) {
      var formGroup = getParent(event.target, ".form-group");
      if (formGroup.classList.contains("invalid")) {
        formGroup.classList.remove("invalid");
        var formMessage = formGroup.querySelector(".form-message");
        if (formMessage) {
          formMessage.innerText = "";
        }
      }
    }
  }



  // Xử lý hành vi submit form
  formElement.onsubmit = (event) => {
    event.preventDefault();

    var inputs = formElement.querySelectorAll("[name][rules]");
    var isValid = true;

    for (var input of inputs) {
      if (!handleValidate({ target: input })) {
        isValid = false;
      }
    }
    // Khi không có lỗi thì submit form

    if (isValid) {
      if (typeof _this.onSubmit === "function") {
        var formInputs = formElement.querySelectorAll("[name]");
        var formValues = Array.from(formInputs).reduce((values, input) => {
          switch (input.type) {
            case "radio":
              values[input.name] = formElement.querySelector(
                'input[name="' + input.name + '"]:checked'
              ).value;
              break;
            case "checkbox":
              if (!input.matches(":checked")) {
                values[input.name] = "";
                return values;
              }
              if (!Array.isArray(values[input.name])) {
                values[input.name] = [];
              }
              values[input.name].push(input.value);
              break;

            case "file":
              values[input.name] = input.file;
              break;

            default:
              values[input.name] = input.value;
          }

          return values;
        }, {});

        _this.onSubmit(formValues);
      } else {
        formElement.submit();
      }
    }
  };
}
