import { types } from "../types/types";

export const asignarPresupuesto = (presupuesto) => ({
    type: types.AsignarPresupuesto,
    payload: presupuesto

})

export const agregarGasto = (gasto) => ({
    type: types.AgregarGasto,
    payload: gasto
})