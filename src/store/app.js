export const AppState = {
    debug: true,
    version: 0.1
}

export default function AppReducer (prevState, nextState) {
    return {
        ...prevState,
        version: nextState.version  
    }
    // const nextKeys = Object.keys(nextState)
    // nextKeys.map(k => {
    //     if(prevState[k] !== nextState[k]){
    //         prevState[k] = nextState[k]
    //     }
    // });
    // return {
    //     ...prevState,
    //     ...nextState
    // }
}