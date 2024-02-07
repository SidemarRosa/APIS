
      require(["esri/config", "esri/Map", "esri/views/MapView"], function(esriConfig, Map, MapView) {

        esriConfig.apiKey = "AAPKaf3d69c09e8645a6a59d74a07cfa4f78qYOmuG_YkWjS7rI7rm8qtg5EmataM0x9yPfllQqS0l3HXm9goWpB_iAnjg8R0QGx";

        const map = new Map({
          basemap: "arcgis/topographic" // basemap styles service
        });

        const view = new MapView({
          map: map,
          center: [-51.2270, -30.065], // Longitude, latitude
          zoom: 18, // Zoom level
          container: "viewDiv" // Div element
        });

      });
    