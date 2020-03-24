const apiKey = 'wmYzR5VxAIeq0Abtoz6neBsJWUv9uznV'

async function getCity(city){
    let baseurl = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    let query = `?apikey=${apiKey}&q=${city}`
    let rawResponse = await fetch(baseurl+query)
    let response = await rawResponse.json()
    return response[0]
}

async function getWeather(cityKey){
    let baseurl = 'http://dataservice.accuweather.com/currentconditions/v1/'
    let query = `${cityKey}?apikey=${apiKey}`
    let rawResponse = await fetch(baseurl+query)
    let response = await rawResponse.json()
    return response[0]
}

// getCity('mumbai')
//     .then((data)=>{
//         return getWeather(data.Key)
//     })
//     .then((data)=>{
//         console.log("data : ",data)
//     })
//     .catch((error)=>{
//         console.log("error : ",error)
//     })