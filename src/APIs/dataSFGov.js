const getDataSF = () => {
    return fetch('https://data.sfgov.org/resource/wwmu-gmzc.json')
        .then(data => {
            return data.json()
        })
        // .then(data => {
        //     // console.log(data)
        //     return data
        // })
        // .catch(err => {
        //     console.log(err)
        // })
}

export const getLocationSF = () => {
    // const data = getDataSF()
    // console.log(data)
}

export let dataFromSFGov = getDataSF()