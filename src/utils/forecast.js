const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/6c54fdeed14c8b1e09513a936e6aaf0c/' +
        encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const temprature = body.currently.temperature
            const precipProbability = body.currently.precipProbability
            const msg = (body.daily.data[0].summary +
                " it is currntly "
                + temprature + " degrees out. There is a "
                + precipProbability + "% chance of rain");

            callback(undefined, msg)
        }
    })
}

module.exports = forecast