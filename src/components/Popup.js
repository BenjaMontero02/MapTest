'use client'
import { positionState } from '@/globalStates/positionState'
import { statePopUp } from '@/globalStates/statePopUp'
import React, { useState } from 'react'
import ContentPopUp from './ContentPopUp';
import axios from 'axios';
import { getUbication } from '@/libs/getUbication';

function Popup() {
    const [ubication, setUbication] = useState(null);
    const { setOpen } = statePopUp()
    const { position } = positionState()

    const obtenerUbicacion = async () => {
        try {
          const latitud = position.lat;
          const longitud = position.lng;
      
          const address = await getUbication(latitud, longitud);
          console.log(address.data.Results[0]);
          setUbication(address.data.Results[0]);

        } catch (error) {
          console.error(error);
        }
      };
      
    if(ubication === null) obtenerUbicacion();
    
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button onClick={setOpen} className="close-button">
                    Cerrar
                </button>
                {ubication === null ? (
                    <p>cargando...</p>
                ) : (
                    <ContentPopUp ubication={ubication} position={[position.lat, position.lng]} />
                )}
            </div>
        </div>
    )
}

export default Popup
