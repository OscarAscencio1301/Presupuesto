import React from 'react'
import { Provider } from 'react-redux'
import { PresupuestoInicial } from './components/PresupuestoInicial'
import { store } from './store/store'
import './styles/style.scss'

export const App = () => {
    return (
        <Provider store={store}>
            <PresupuestoInicial />
        </Provider>

    )
}
