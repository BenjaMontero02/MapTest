export const getUbication = async (latitud, longitud) => {
    console.log("llego al get ubication");
    const axios = require('axios');

    const options = {
        method: 'GET',
        url: 'https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi',
        params: {
          lat: latitud,
          lng: longitud
        },
        headers: {
          'X-RapidAPI-Key': '4a147d5867mshc02cddef9de7de2p14078djsn6a868e6c0730',
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
