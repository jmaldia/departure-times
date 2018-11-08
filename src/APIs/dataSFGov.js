export const getDataSF = () => {
    return fetch('https://data.sfgov.org/resource/6a9r-agq8.json')
        .then(data => {
            return data.json()
        })
        .then(data => {
            let locations = data.filter(location => (Number(location.latitude) !== 0 || Number(location.longitude) !== 0))
            return locations
        })
        .catch(err => {
            console.log(err)
        })
}

export const getLocationSF = () => {
    // const data = getDataSF()
    // console.log(data)
}