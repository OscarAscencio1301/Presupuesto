import { combineReducers, createStore } from "redux";
import { presupuestoReducer } from "../reducer/presupuestoReducer";

const reducers = combineReducers({
    presupuestoTotal: presupuestoReducer
})

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());