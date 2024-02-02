import { markersState } from '@/globalStates/markersState';
import React from 'react'

function BtnReset({reset}) {

    const { setMarkersNow } = markersState();

    const resetBtn = () => {
        reset();
    }

    return (
        <button onClick={resetBtn} style={{width: 80, height:40, cursor: "pointer", backgroundColor: "red", color:"white", position: "absolute", zIndex: "200000", right:10, top:20}}>RESET</button>
    )
}

export default BtnReset
