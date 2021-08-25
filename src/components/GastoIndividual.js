import React from 'react'

export const GastoIndividual = ({gasto, cantidad}) => {
    return (
        <div className="gasto__individual">
            <h4 className="gasto__titulo">{gasto}</h4>
            <span className="gasto__precio">${cantidad}</span>
        </div>
    )
}
