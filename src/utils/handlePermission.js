import { hasGeolocation,successCallback, errorCallback, options } from "./geolocation.js";

const handlePermissions = () => {
    if(!hasGeolocation) {
        alert("No geolocation available!");
    }
// break out callback
    navigator.permissions.query({name: 'geolocation'}).then( function (result) {

        if(result.state === 'granted'){
            // navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options)

            // show map unblurred with data
        }

        if(result.state === 'prompt') {
            navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options)
        }

        if(result.state === 'denied') {
            // empty state or something 
        }

        result.onchange = () => {
            console.log('change', result)

        }

        // result.addEventListener("change", () => {
        //     console.log('change', result)
        // })

        console.log(result)

    })

} 


export default handlePermissions;