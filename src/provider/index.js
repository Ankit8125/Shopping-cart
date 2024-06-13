'use client'

import Header from "@/components/header"
import store from "@/store"
import { Provider } from "react-redux"

export default function ReduxProvider({children , getSession}){ // this will receive the 'children', which will be children of components
    return ( // this is just used to bind my redux store with application whether its a react application or nextjs application
        <Provider store={store}>
            <Header getSession={getSession}/>
            {children}
        </Provider>
    )
}