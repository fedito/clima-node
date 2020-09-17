const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'ciudad de donde quiero saber el clima',
        demande: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(lat, lng)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        const ciudad = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(ciudad.lat, ciudad.lng);
        return `el clima de ${ciudad.lugar} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ciudad.lugar}`;
    };
};