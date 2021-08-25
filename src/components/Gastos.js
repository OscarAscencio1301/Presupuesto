import React from 'react'
import { useSelector } from 'react-redux'
import { GastoIndividual } from './GastoIndividual'

export const Gastos = () => {
    const {gastos} = useSelector(state => state.presupuestoTotal)
    return (
        <>
        {
            gastos.map(gasto => <GastoIndividual {...gasto} key={gasto.gasto}/>)
        }
        </>
    )
}
