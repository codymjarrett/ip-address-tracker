import { createInitialMapState, handlePermissions} from './utils/index.js'



function runOnMount() {
  createInitialMapState().then(() => {
    handlePermissions();
  })
}



document.addEventListener('DOMContentLoaded', function (event) {
  runOnMount();
});




