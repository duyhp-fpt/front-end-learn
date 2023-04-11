// Đối tượng Validator
function Validator(option) {
  function getParent(element, selector) {
    while (element.parentElement) {
      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
  }

  var selectorRules = {};

  // Hàm thực hiện validate
  function validate(inputElement, rule) {
    var errorMessage;
    var errorElement = getParent(
      inputElement,
      option.formGroupSelector
    ).querySelector(option.errorSelector);

    // Lấy ra rules của selector
    var rules = selectorRules[rule.selector];
    // Lặp qua rules vào kiểm tra
    // Nếu có lỗi dừng việc kiểm tra
    for (var i = 0; i < rules.length; i++) {
      switch (inputElement.type) {
        case "radio":

        case "checkbox":
          errorMessage = rules[i](
            formElement.querySelector(rule.selector + ":checked")
          );
          break;
        default:
          errorMessage = rules[i](inputElement.value);
      }
      if (errorMessage) break;
    }

    if (errorMessage) {
      errorElement.innerText = errorMessage;
      getParent(inputElement, option.formGroupSelector).classList.add(
        "invalid"
      );
    } else {
      errorElement.innerText = "";
      getParent(inputElement, option.formGroupSelector).classList.remove(
        "invalid"
      );
    }
    return !errorMessage;
  }

  // Lấy element để thực hiện validate
  var formElement = document.querySelector(option.form);
  if (formElement) {
    formElement.onsubmit = (e) => {
      e.preventDefault();
      var isFormValid = true;

      // Lặp qua rules và validate
      option.rules.forEach((rule) => {
        var inputElement = formElement.querySelector(rule.selector);
        var isValid = validate(inputElement, rule);
        if (!isValid) {
          isFormValid = false;
        }
      });

      if (isFormValid) {
        // Trường hợp submit với JS
        if (typeof option.onSubmit === "function") {
          var formInputs = formElement.querySelectorAll("[name]");
          var formValues = Array.from(formInputs).reduce((values, input) => {
            switch (input.type) {
              case "radio":
                values[input.name] = formElement.querySelector(
                  'input[name="' + input.name + '"]:checked'
                ).value;
                  break;
              case "checkbox":
                if (!input.matches(':checked')) {
                  values[input.name] = '';
                  return values;
                }
                if (!Array.isArray(values[input.name])){
                  values[input.name] = [];
                }
                values[input.name].push(input.value);
                  break;

              case 'file':
                values[input.name] = input.file;
                break;

              default:
                values[input.name] = input.value;
            }

            return values;
          }, {});
          option.onSubmit(formValues);
        }
        // Trường hợp submit với hành vi mặc định
        else {
          formElement.submit();
        }
      }
    };

    // Lặp qua mỗi rule và xử lý
    option.rules.forEach((rule) => {
      // Lưu lại rules cho mỗi input
      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }

      var inputElement = formElement.querySelectorAll(rule.selector);
      Array.from(inputElement).forEach((inputElement) => {
        // Xử lý trường hợp blur ra khỏi ô input
        inputElement.onblur = () => {
          validate(inputElement, rule);
        };

        // Xử lý mỗi khi người dùng nhập
        inputElement.oninput = () => {
          var errorElement = getParent(
            inputElement,
            option.formGroupSelector
          ).querySelector(option.errorSelector);
          errorElement.innerText = "";
          getParent(inputElement, option.formGroupSelector).classList.remove(
            "invalid"
          );
        };
      });
    });
  }
}

// Định nghĩa rules
/* Nguyên tắc của rules:
 * 1. Khi có lỗi --> Trả message lỗi
 * 2. Khi hợp lệ --> Không trả ra gì (undefined)
 **/

Validator.isRequired = function (selector, message) {
  return {
    selector: selector,
    test: (value) => {
      return value ? undefined : message || "Vui lòng nhập";
    },
  };
};

Validator.isEmail = function (selector, message) {
  return {
    selector: selector,
    test: (value) => {
      const res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      return res.test(value)
        ? undefined
        : message || "Vui lòng nhập đúng Email";
    },
  };
};

Validator.minLength = function (selector, min) {
  return {
    selector: selector,
    test: (value) => {
      return value.length >= min
        ? undefined
        : `Vui lòng nhập tối thiểu ${min} kí tự`;
    },
  };
};

Validator.isConfirm = function (selector, getConfirmValue, messeage) {
  return {
    selector: selector,
    test: (value) => {
      return value === getConfirmValue()
        ? undefined
        : messeage || "Giá trị nhập vào không chính xác";
    },
  };
};
