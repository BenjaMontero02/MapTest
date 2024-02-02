'use client'
import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import EventMap from './EventMap'
import RenderMarkers from './RenderMarkers'
import { markersState } from '@/globalStates/markersState'
import geoLocation from '@/libs/provincia.json'
import BtnReset from './BtnReset'
import { getProvince } from '@/libs/getProvince'


function MapView() {

    const { markersData, listOfScoutings,updateMarkersState, setMarkersForProvince, setMarkersNow, markersNow, setListOfScoutings } = markersState();
    const [selectedProvince, setSelectedProvince] = useState(null);

    const [map, setMap] = useState(null);

    useEffect(() => {

        setMarkersNow();
        setListOfScoutings();
    }, [])

    const setViewInMap = (arr, id, prov) => {
        map.setView(arr, 7);
        setMarkersForProvince(prov);
        setSelectedProvince(prov)
    }

    function handleProv(prov) {
        setSelectedProvince(prov)
        setMarkersForProvince(prov);
    }

    const removeMarkerFromProvince = (provinceName, numberScouting) => {
        //console.log(markersData)
        const updatedMarkersData = markersData.map((province) => {
          if (province.name === provinceName) {
            // Filtra los marcadores, excluyendo el marcador con el numberScouting dado
            const updatedMarkers = province.markers.filter(
              (marker) => marker.numberScouting !== numberScouting
            );
            return { ...province, markers: updatedMarkers };
          }
          return province;
        });
        updateMarkersState(updatedMarkersData);
        setMarkersNow();
        handleProv(provinceName)
    }

    const handleReset = () => {
        setMarkersNow();
        setSelectedProvince(null);
    }


    return (
        <div className='mapa-contenedor'>
            <MapContainer center={[-37.14854491413631, -65.00912441516479]} zoom={5} doubleClickZoom={false} ref={setMap}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <GeoJSON data={geoLocation} pane='tilePane'
                    style={(feature) => ({
                        fillColor: feature.properties.nam === selectedProvince ? 'red' : 'transparent',
                        color: 'gray',
                        weight: 1,
                        fillOpacity: 0.7
                    })}
                    
                    onEachFeature={(feature, layer) => {
                        layer.on('click', () => handleProv(feature.properties.nam))
                    }}

                />
                {markersNow.length !== 0 ? <RenderMarkers markersData={markersNow} /> : null}
                <BtnReset reset={handleReset} />
                <EventMap/>
            </MapContainer>
            {<div className='lista-captadores'>
                <ul>
                    {listOfScoutings.map((marker, i) => {
                        return marker.iconType === 1 ? (
                            <li key={i} onClick={() => setViewInMap(marker.position, marker.numberScouting, marker.provincia)}>
                                {marker.numberScouting} - {marker.popUp}
                            </li>
                        ) : null;
                    })}
                </ul>
            </div>}

        </div>
    )
}

export default MapView

