import { markersState } from '@/globalStates/markersState';
import React, { useEffect, useRef, useState } from 'react'
import { Marker, Popup } from 'react-leaflet';


function CustomMarker({ position, iconType, popUp, icons, openPopUp, numberScouting }) {
    const [markerReference, setMarkerReference] = useState(null);
    const [draggable, setDraggable] = useState(false)
    const number = numberScouting ? numberScouting : null;
    
    function iconCustomizer (){
        if(number != null){
            return L.divIcon({className: 'my-div-icon', iconSize: [40,40], html:`<p>${number}</p>`});  
        }else{
            return icons.find(icon => icon.id === iconType)?.iconRender;
        }
    }

    const selectedIcon = iconCustomizer();
    
    const {setMarkerPosition} = markersState();
    useEffect(() => {
        if (openPopUp) markerReference.openPopup();
    }, [openPopUp])

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
                setDraggable(false);
                setMarkerPosition(numberScouting, [markerReference.getLatLng().lat, markerReference.getLatLng().lng]);
                console.log(markerReference.getLatLng());
              },
            }}
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
