const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lng}&appid=b8ac4b4306445ac550975c2f1310e97d&unit=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}