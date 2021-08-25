import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { asignarPresupuesto } from '../actions/accionesPresupuesto'
import { useForm } from '../hooks/useForm'
import { Restantes } from './Restantes'

export const PresupuestoInicial = () => {
    const dispatch = useDispatch()
    const { presupuesto } = useSelector(state => state.presupuestoTotal)
    const [valores, cambioInput] = useForm({
        pres: ''
    })
    const enviarPresupuesto = (e) => {
        e.preventDefault();
        if(validar()){
            dispatch(asignarPresupuesto(pres))
        }
    }

    const validar = () => {
        if(pres <= 0){
            Swal.fire({
                title: 'Tu presupuesto debe ser mayor a cero',
                icon: 'error'
            })
            return false
        }

        return true;
    }
    const { pres } = valores
    return (
        <div className="presupuesto">
            <h1 className="titulo">Gasto Semanal</h1>
            {
                presupuesto === 0
                    ?
                    <div className="presupuesto__container">
                        <h2 className="subtitulo">Coloca tu presupuesto</h2>
                        <form className="presupuesto__form" onSubmit={enviarPresupuesto}>
                            <input
                                type="number"
                                className="presupuesto__input"
                                min={0}
                                name="pres"
                                placeholder="Coloca tu presupuesto"
                                value={pres}
                                onChange={cambioInput}
                            />
                            <button className="presupuesto__boton" type="submit">Definir Presupuesto</button>
                        </form>
                    </div>
                    :
                    <Restantes />
            }
        </div>
    )
}
