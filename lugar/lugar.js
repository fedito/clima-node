const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${dir}`,
        headers: { "x-rapidapi-key": "22de3e23f1msh2a70b62841d9907p1bb110jsne44eb3371c0a" }
    });

    const resp = await instance.get();

    if (resp.data.Results.lenght === 0) {
        throw new Error(`no hay resultados para ${dir}`);
    };

    const data = resp.data.Results[0];
    let lugar = data.name;
    let lat = data.lat;
    let lng = data.lon;

    return {
        lugar,
        lat,
        lng
    };

};

module.exports = {
    getLugarLatLng
}