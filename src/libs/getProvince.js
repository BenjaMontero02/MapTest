import axios from "axios";

export const getProvince = async (lat, lng) => {
    const options = {
        method: 'GET',
        url: 'https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi',
        params: {
            lat: lat,
            lng: lng
        },
        headers: {
            'X-RapidAPI-Key': '0cf3126fd8msh96a1ffc208a0676p160eedjsn8f43c3ecbc63',
            'X-RapidAPI-Host': 'address-from-to-latitude-longitude.p.rapidapi.com'
          }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error; // Re-lanzar el error para manejarlo fuera de esta función si es necesario
    }
};
