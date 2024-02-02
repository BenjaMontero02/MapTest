'use client'
import { useForm } from 'react-hook-form'
import { iconState } from '@/globalStates/iconState';
import { markersState } from '@/globalStates/markersState';
import React, {useState} from 'react'
import { statePopUp } from '@/globalStates/statePopUp';

function ContentPopUp({ubication, position}) {
    const {register, handleSubmit} = useForm();

    const { addMarker, markersData } = markersState(); 
    const { setOpen } = statePopUp();
    const { icons } = iconState();

    const onSubmit = handleSubmit((data) => {
        let value = parseInt(data.iconType);
        //console.log(ubication)
        const {region, subregion, city} = ubication;
        
        let number = Math.floor(5 * (5 + Math.random() * 4));
        
        let marker = {
            position: [ubication.latitude, ubication.longitude],
            iconType: value,
            popUp: data.description,
            numberScouting: number,
            provincia: region,
            ciudad: subregion,
            barrio: city
        }
        addMarker(markersData, marker);
        setOpen();
    })

    return (
        <div className='contentPopUp'>
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
