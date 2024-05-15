import createMap, {createMapWithCoordinates, createMapWithMarker} from "./mapbox.js";

const COORDINATES = [-122.43216, 37.76487]

QUnit.module('createMapWithCoordinates', function() {
    QUnit.test('creates map instance', function(assert) {
        const result = createMapWithCoordinates(COORDINATES)
        console.log(result)
      assert.equal(result, 3     );
       });
  });