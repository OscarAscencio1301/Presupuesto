import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { agregarGasto } from '../actions/accionesPresupuesto'
import { useForm } from '../hooks/useForm'
import { Gastos } from './Gastos'

export const Restantes = () => {
    const dispatch = useDispatch()
    const {presupuesto, restante} = useSelector(state => state.presupuestoTotal)
    const [valores, cambioInput, ,reset] = useForm({
        gasto: '',
        cantidad: ''
    })
    const enviarGasto = (e) => {
        e.preventDefault();
        dispatch(agregarGasto(valores))
        reset()

    }
    const {gasto, cantidad} = valores;
    return (
        <div className="restante__container">
            <div className="container">
                <h2 className="subtitulo">Coloca tu presupuesto</h2>
                <form className="restante__form" onSubmit={enviarGasto}>
                    <input
                        type="text"
                        className="restante__input"
                        name="gasto"
                        placeholder="Nombre Gasto"
                        value={gasto}
                        onChange={cambioInput}

                    />

                    <input
                        type="number"
                        className="restante__input"
                        min={0}
                        name="cantidad"
                        placeholder="Cantidad"
                        value={cantidad}
                        onChange={cambioInput}

                    />
                    <button className="restante__boton" type="submit">Agregar Gasto</button>
                </form>
            </div>

            <div className="container2">
                <h2 className="subtitulo">Listado</h2>
                <Gastos />
                <div className="texto__presupuesto">
                <h3>Presupuesto:</h3>
                <span>${presupuesto}</span>
                </div>
                <div className="texto__restante-100">
                <h3>Restante:</h3>
                <span>${restante}</span>
                </div>
            </div>



        </div>
    )
}
