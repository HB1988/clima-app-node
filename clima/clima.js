const axios = require ('axios');

const getClima = async (coord) => {

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${coord[0]}&lon=${coord[1]}&appid=5fe78abad5cb71621fe1868df16ce771&units=metric`;

 const resp = await  axios.get(url)
 
    return resp.data.main.temp;

}

module.exports = {

    getClima
}