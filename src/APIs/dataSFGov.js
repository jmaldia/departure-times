const getLocationSF = () => {
    let location
    fetch('https://data.sfgov.org/resource/wwmu-gmzc.json')
        .then(data => {
            return data.locations
        })
        .catch(err => {
            console.log(err)
        })
}