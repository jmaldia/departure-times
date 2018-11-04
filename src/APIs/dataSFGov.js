export const getDataSF = () => {
    fetch('https://data.sfgov.org/resource/wwmu-gmzc.json')
        .then(data => {
            return data.json()
        })
        .catch(err => {
            console.log(err)
        })
}

export const getLocationSF = () => {
    const data = getDataSF()
    console.log(data)
}