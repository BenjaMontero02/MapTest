import PopUpContainerSection from '@/components/PopUpContainerSection'
import PopUpDecider from '@/components/PopUpDecider'
import SectionMap from '@/components/SectionMap'
import React from 'react'

function Page() {
    return (
        <div className='main'>
            <div className='content'>
                <h1 >PRUEBA DE MAPA</h1>
                <input type='date' />  
            </div>
            <PopUpContainerSection /> 
            <SectionMap />

        </div>
    )
}

export default Page
