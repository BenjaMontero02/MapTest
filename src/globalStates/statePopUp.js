import { create } from "zustand";

export const statePopUp = create((set) => ({
    isOpen: false,
    setOpen: () => {
        set((state) => ({ isOpen: !state.isOpen }));
    }

}))