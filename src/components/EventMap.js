
import React, {useState} from 'react'
import { useMapEvents, Marker, Popup } from 'react-leaflet'
import { getUbication } from '@/libs/getUbication';
import PopUpDecider from './PopUpDecider';
import { statePopUp } from '@/globalStates/statePopUp';
import { positionState } from '@/globalStates/positionState';


function EventMap() {

    const { position, setPosition } = positionState()

    const { setOpen } = statePopUp();
    
    const EventMap = useMapEvents({
        dblclick(e){
            setPosition(e.latlng.lat, e.latlng.lng);
            setOpen()
            return 
        }
    })
   
    return position === null ? null : (
        null
      )
}

export default EventMap
