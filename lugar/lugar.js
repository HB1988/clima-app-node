const axios = require('axios');

const getLugarLatLng = async ( dir ) => {

const encodeUlr = encodeURI ( dir );

    
    const instance = axios.create({
        baseURL: `https://restcountries.eu/rest/v2/name/${ encodeUlr }`,
        headers: {'fullText': 'true'}
      });

      const resp = await instance.get();
    
      if (  resp.data.length === 0 ) {

        throw new Error(`no hay resultados para ${ dir } `);
      }

      const data = resp.data[0];
      const direccion = data.name;
      const latlng = data.latlng; 

      return {
          direccion,
          latlng,
      }
    }
module.exports = {
    getLugarLatLng
}