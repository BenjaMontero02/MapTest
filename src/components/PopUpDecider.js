'use client'
import React from 'react'
import Popup from './Popup';
import { statePopUp } from '@/globalStates/statePopUp';


function PopUpDecider() {
    const {isOpen} = statePopUp()
    console.log(isOpen);
  
    return (
        <div>
            {isOpen && <Popup/>}
        </div>
    )
}

export default PopUpDecider
