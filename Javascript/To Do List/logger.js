export default function logger(reducer) {
    return (prevState, action, args) => {
        console.group(action)
        console.log('Prev State: ',prevState)
        console.log('Active Arguments: ',args)
        const nextState = reducer(prevState, action, args)
        console.log(nextState);
        return nextState
    }
}