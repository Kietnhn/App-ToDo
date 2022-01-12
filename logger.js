
export default function logger(reducer){
    return (preState, action, agrs) => {
        console.group(action)
        console.log('preState:', preState)
        console.log('Action agrs:', agrs)
        const nextState = reducer(preState, action, agrs)
        console.log('next State:', nextState)
        console.groupEnd()
        return nextState
    }
}