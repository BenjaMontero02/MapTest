import { markersState } from '@/globalStates/markersState';
import { getProvince } from '@/libs/getProvince';
import React, { useEffect, useRef, useState } from 'react'
import { set } from 'react-hook-form';
import { Marker, Popup } from 'react-leaflet';


function CustomMarker({ position, iconType, popUp, icons, openPopUp, numberScouting, provincia, deleteMarker}) {
    const [markerReference, setMarkerReference] = useState(null);
    const [draggable, setDraggable] = useState(false)
    const number = numberScouting ? numberScouting : null;
    
    
    const selectedIcon = iconCustomizer();
    
    const {markersData, setNewMarkersForProvince, removeMarker} = markersState();
    useEffect(() => {
      if (openPopUp) markerReference.openPopup();
    }, [openPopUp])
    
    function iconCustomizer (){
        if(number != null){
            return L.divIcon({className: 'my-div-icon', iconSize: [40,40], html:`<p>${number}</p>`});  
        }else{
            return icons.find(icon => icon.id === iconType)?.iconRender;
        }
    }

    const setNewProvince =  async () => {
      try {
          let newProvince = await getProvince(markerReference.getLatLng().lat, markerReference.getLatLng().lng)
          setNewMarkersForProvince(newProvince.Results[0].region, provincia, number, markersData, [markerReference.getLatLng().lat, markerReference.getLatLng().lng])
      } catch (error) {
          console.error(error);
      }
    }

    const setNewState = () => {
      removeMarker(provincia, number, markersData);
    }

    return (
        numberScouting != null ? (
          <Marker 
            position={position}
            icon={selectedIcon}
            ref={setMarkerReference}
            draggable={draggable}
            eventHandlers={{
              mouseover: () => {
                setDraggable(true);
              },

              click: () => {
                markerReference.openPopup();
              },

              mouseup: () => {
                if(!draggable) return   
                setDraggable(false);
                setNewProvince();
                
                
              },
            }}
          >
            <Popup>
              <div style={{ display: 'flex', flexDirection: "column", gap: 10, alignItems: "center" }}>
                {number ? (
                  <div style={{display:'flex', flexDirection:"column", gap: 10, alignContent: "center", justifyContent:"center"}}>
                    {popUp} - {number}
                    <button onClick={setNewState}>Eliminar</button>
                  </div>
                ) : (
                  <div>{popUp}</div>
                )}
              </div>
            </Popup>
          </Marker>
        ) : (
          <Marker 
            position={position}
            icon={selectedIcon}
          >
            <Popup>
              <div style={{ display: 'flex', flexDirection: "column", gap: 10, alignItems: "center" }}>
                {number ? (
                  <div>
                    {popUp} - {number}
                  </div>
                ) : (
                  <div>{popUp}</div>
                )}
              </div>
            </Popup>
          </Marker>
        )
      )
}

export default CustomMarker
