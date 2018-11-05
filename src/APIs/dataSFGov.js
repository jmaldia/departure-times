export const getDataSF = () => {
    return fetch('https://data.sfgov.org/resource/6a9r-agq8.json')
        .then(data => {
            return data.json()
        })
        .catch(err => {
            console.log(err)
        })
}

export const getLocationSF = () => {
    // const data = getDataSF()
    // console.log(data)
}