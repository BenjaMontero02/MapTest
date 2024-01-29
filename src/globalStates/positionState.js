import { create } from "zustand";

export const positionState = create((set) => ({
    position:{
        lat: 0,
        lng: 0,
    },

    setPosition: (lat, lng) => {
        set((state) => ({
            position: {
                lat: lat,
                lng: lng,
            },
        }));
    }
}))