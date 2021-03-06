const lugar = require ('./lugar/lugar');

const clima = require ('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: true
}
}).argv;

/*lugar.getLugarLatLng (argv.direccion)
.then(console.log);*/

/* clima.getClima(35, 139)
.then(console.log)
.catch(console.log) */



const getInfo = async ( direccion ) => {

try {
    const coord = await lugar.getLugarLatLng( direccion );
    
    const temp = await clima.getClima(coord.latlng);
return `El clima de: ${coord.direccion} es de ${temp}.`;
   } catch (e) {
           return `No se pudo determinar el clima de: ${direccion}`;
       }
   
}
getInfo(argv.direccion)
.then(console.log)
.catch(console.log);