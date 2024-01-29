import { Icon } from "leaflet";
import { create } from "zustand";

export const iconState =  create((set, get) => ({
    icons: [
        {   
            id: 1,
            nombre: "scouting",
            iconRender: new Icon({
                iconUrl:'detective.svg',
                iconSize: [40, 40]
            })
        },
        {   
            id: 2,
            nombre: "jugador",
            iconRender: new Icon({
                iconUrl:'ball.svg',
                iconSize: [30, 30]
            })
        },
        {   
            id: 3,
            nombre: "evento",
            iconRender: new Icon({
                iconUrl:'trophy.svg',
                iconSize: [20, 20]
            })
        }
    ]
    
}))