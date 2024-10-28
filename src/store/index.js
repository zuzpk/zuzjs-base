import { ucfirst } from "@zuzjs/ui"
import { createContext, useContext } from "react"

const contexts = {};

const Provider = ({ initialState, children }) => {

    Object.keys(initialState).forEach(name => {
        const Context = createContext(initialState[ucfirst(name)]);
        contexts[name] = Context;
    });

    const buildContext = (index = 0) => {
        const name = Object.keys(contexts)[index];
        const Context = contexts[name];

        if (index < Object.keys(contexts).length - 1) {
            return (
                <Context.Provider value={initialState[name]}>
                    {buildContext(index + 1)}
                </Context.Provider>
            );
        }

        return (
            <Context.Provider value={initialState[name]}>
                {children}
            </Context.Provider>
        );
    };

    return buildContext();
};

export default Provider;

export const useStore = (key) => {
    const Context = useContext(contexts[key]);
    return {
        ...Context,
        dispatch: useDispatch(key, Context)
    }
}

const useDispatch = (key, state) => {
    
    const dispatch = state['dispatch'];

    // const prepareState = (prevState, nextState) => {
    //     const nextKeys = Object.keys(nextState)
    //     nextKeys.map(k => {
    //         if(prevState[k] !== nextState[k]){
    //             prevState[k] = nextState[k]
    //         }
    //     });
    //     return {
    //         ...prevState,
    //         ...nextState
    //     }
    // }

    // // if(key){
    // return (payload = {}) => {

    //     dispatch({
    //         action: key,
    //         payload: {
    //             [key] : prepareState(state[key], payload)
    //         }
    //     });
    // }
    

    return dispatch;
}