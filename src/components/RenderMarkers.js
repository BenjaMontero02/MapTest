import React from 'react'
import CustomMarker from './CustomMarker'
import { iconState } from '@/globalStates/iconState';
import { markersState } from '@/globalStates/markersState'


function RenderMarkers({markersData}) {
    const { icons } = iconState();
    console.log("renderMarkers")

    return markersData.map((marker, i) => (
         // Utiliza map en lugar de forEach para devolver un array de componentes
            marker.numberScouting ? ( // Verifica si numberScouting está definido y no es falsy
                <CustomMarker
                    key={i} // Usa una combinación única de i y j como clave
                    position={marker.position} // Usa la posición de m en lugar de marker
                    iconType={marker.iconType} // Usa el tipo de icono de m en lugar de marker
                    popUp={marker.popUp} // Usa el popUp de m en lugar de marker
                    icons={icons}
                    numberScouting={marker.numberScouting}
                />
            ) : (
                <CustomMarker
                    key={i} // Usa una combinación única de i y j como clave
                    position={marker.position} // Usa la posición de marker en lugar de markerarker
                    iconType={marker.iconType} // Usa el tipo de icono de marker en lugar de markerarker
                    popUp={marker.popUp} // Usa el popUp de m en lugar de marker
                    icons={icons}
                />
            )
        )
    );
}

export default RenderMarkers
