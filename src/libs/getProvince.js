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
            'X-RapidAPI-Key': 'df086eeaa5msh660123fa79e763dp1a3e71jsn09bb1a7388c6',
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
