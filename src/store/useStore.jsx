import { createContext } from "react"

const contexts = []

const useStore = (children) => {

    const Context = createContext({

    })

    return <Context>{children}</Context>

}

export default useStore