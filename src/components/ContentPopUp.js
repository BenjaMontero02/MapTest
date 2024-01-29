'use client'
import { useForm } from 'react-hook-form'
import { iconState } from '@/globalStates/iconState';
import { markersState } from '@/globalStates/markersState';
import React, {useState} from 'react'
import { statePopUp } from '@/globalStates/statePopUp';

function ContentPopUp({ubication, position}) {
    const {register, handleSubmit} = useForm();

    const { addMarker } = markersState(); 
    const { setOpen } = statePopUp();
    const { icons } = iconState();

    const onSubmit = handleSubmit((data) => {
        let value = parseInt(data.iconType);
        addMarker(position, value, data.description);
        setOpen();
    })

    return (
        <div>
            <h1>Guardar Punto</h1>
            <h4>Provincia: {ubication.region}</h4>
            <h4>Ciudad: {ubication.subregion}</h4>
            <h4>Municion / partido / barrio: {ubication.city}</h4>

            <form onSubmit={onSubmit}>
                <input 
                    type='text'
                    placeholder='Descripcion'
                    {...register("description")}
                    />
                <label>Selecciona el tipo de icono</label>
                <select 
                    {...register("iconType")}
                    >
                    {icons.map((icon) => {
                        return <option key={icon.id} value={icon.id}>{icon.nombre}</option>
                    })}
                </select>
                <button type='submit'>Guardar</button>
            </form>
        </div>
    )
}

export default ContentPopUp
