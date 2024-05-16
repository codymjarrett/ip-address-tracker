import { hasGeolocation, successCallback, errorCallback, options } from "./geolocation.js";

const handlePermissions = () => {
    if (!hasGeolocation) {
        alert("No geolocation available!");
    }
    navigator.permissions.query({ name: 'geolocation' })
        .then(function (result) {
            if (result.state === 'prompt') {
                navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options)
            };
        });
};

export default handlePermissions;