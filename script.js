require([
        "esri/views/MapView",
      "esri/Map",
      "esri/layers/FeatureLayer",
      "esri/Basemap",
], function (MapView, Map, FeatureLayer,Basemap) {
  
          const basemap = new Basemap({
          portalItem: {
            id: "4f2e99ba65e34bb8af49733d9778fb8e"
          }
        });
  
          const layer = new FeatureLayer({
          portalItem: {
            id: "e43c4e02e72a45509d3a7bb42a852018"
          },
          definitionExpression: "Item = 'Maize' AND Year = '2019'",
        });
  
          // map ,
          //layers: [layer]
        const map = new Map({
          basemap: basemap,
          layers: [layer]
        });

		// view containing starting extent
         const view = new MapView({
          map: map,
          container: "viewDiv"
        });
      });
