import axios from "axios";
export const getUbication = async (latitud, longitud) => {

    console.log("llego al get ubication");

    const options = {
        method: 'GET',
        url: 'https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi',
        params: {
          lat: latitud,
          lng: longitud
        },
        headers: {
          'X-RapidAPI-Key': '0cf3126fd8msh96a1ffc208a0676p160eedjsn8f43c3ecbc63',
          'X-RapidAPI-Host': 'address-from-to-latitude-longitude.p.rapidapi.com'
        }
      };

      try {
        return await axios.request(options);
    } catch (error) {
        console.error(error);
    }

    // try {
    //     return axios.get(`https://apis.datos.gob.ar/georef/api/ubicacion?lat=${latitud}&lon=${longitud}`)
    //    .then((response) => { 
    //     console.log(response.data.ubicacion);
    //     return response.data.ubicacion;
    // })
    // } catch (error) {
    //     return null;
    // }
};
