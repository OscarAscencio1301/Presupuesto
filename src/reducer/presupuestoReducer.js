import { types } from "../types/types";

export const presupuestoReducer = (state = {presupuesto: 0, restante: 0, gastos: []}, action) => {
    switch (action.type) {
        case types.AsignarPresupuesto:
            return {
                ...state,
                presupuesto: action.payload,
                restante: action.payload
            }
        case types.AgregarGasto:
            return{
                ...state,
                restante: state.restante -= action.payload.cantidad,
                gastos: [...state.gastos, action.payload]
            }
            
            
    
        default:
            return state;
    }

}