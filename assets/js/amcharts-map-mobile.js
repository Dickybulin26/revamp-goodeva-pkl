  /**
     * ---------------------------------------
     * This demo was created using amCharts 4.
     *
     * For more information visit:
     * https://www.amcharts.com/
     *
     * Documentation is available at:
     * https://www.amcharts.com/docs/v4/
     * ---------------------------------------
     */

  am4core.useTheme(am4themes_animated);

  // Create map instance
  let chart2 = am4core.create("chartdiv2", am4maps.MapChart);

  // Set map definition
  chart2.geodata = am4geodata_worldHigh;

  // Set projection
  chart2.projection = new am4maps.projections.Miller();

  // Create map polygon series
  let polygonSeries2 = chart2.series.push(new am4maps.MapPolygonSeries());

  // Exclude Antartica
  polygonSeries2.exclude = ["AQ"];

  // Make map load polygon (like country names) data from GeoJSON
  polygonSeries2.useGeodata = true;

  // Use series data to set custom zoom points for countries
  polygonSeries2.data = [{
    "id": "ID",
    "zoomLevel": 8,
    "zoomGeoPoint": {
      "latitude": -2.0997529321751927,
      "longitude": 118.37037959811757,
    }
  }];

  polygonSeries2.dataFields.zoomLevel = "zoomLevel";
  polygonSeries2.dataFields.zoomGeoPoint = "zoomGeoPoint";

  // Configure series
  let polygonTemplate2 = polygonSeries2.mapPolygons.template;
  polygonTemplate2.tooltipText = "{name}";
  polygonTemplate2.fill = am4core.color("#74B266");

  // Create hover state and set alternative fill color
  let hs2 = polygonTemplate2.states.create("hover");
  hs2.properties.fill = am4core.color("#367B25");

  // Create active state
  let as2 = polygonTemplate2.states.create("active");
  as2.properties.fill = am4core.color("#249FAC");

  chart2.events.on("ready", function (ev) {
    let target = polygonSeries2.getPolygonById("ID");

    // Pre-zoom
    chart2.zoomToMapObject(target);

    // Set active state
    setTimeout(function () {
      target.isActive = true;
    }, 1000);
  });

  // Bind "fill" property to "fill" key in data
  polygonTemplate2.propertyFields.fill = "fill";

  // Create image series
  let imageSeries2 = chart2.series.push(new am4maps.MapImageSeries());

  // Create a circle image in image series template so it gets replicated to all new images
  let imageSeriesTemplate2 = imageSeries2.mapImages.template;
  let circle2 = imageSeriesTemplate2.createChild(am4core.Circle);
  circle2.radius = 4;
  circle2.fill = am4core.color("#FFB14A");
  circle2.stroke = am4core.color("#FCCC8E");
  circle2.strokeWidth = 2;
  circle2.nonScaling = true;
  circle2.tooltipText = "{title}";

  // Set property fields
  imageSeriesTemplate2.propertyFields.latitude = "latitude";
  imageSeriesTemplate2.propertyFields.longitude = "longitude";

  // Add data for the three cities
  imageSeries2.data = [{
    "latitude": -3.316694,
    "longitude": 114.590111,
    "title": "Banjarmasin"
  }, 
  {
    "latitude": -2.22666700,
    "longitude": 113.94416700,
    "title": "Palangkaraya"
  }, 
  {
    "latitude": -0.93333,
    "longitude": 115.06667,
    "title": "Barito Utara"
  },
  {
    "latitude": -1.002254,
    "longitude": 114.365795,
    "title": "Barunang"
  },
  {
    "latitude": -0.502106,
    "longitude": 117.153709,
    "title": "Samarinda"
  },
  {
    "latitude": -0.4301913463000565,
    "longitude": 116.9830857515619,
    "title": "Tenggarong"
  },
  {
    "latitude": 0.08644992660983603,
    "longitude": 116.27164492140341,
    "title": "Kutai"
  },
  {
    "latitude": -3.784358037878243,
    "longitude":  103.53649635679186,
    "title": "Lahat"
  },
  {
    "latitude": 0.5671731485819859,
    "longitude": 117.57153372606953,
    "title": "Sangata"
  },
  {
    "latitude": -2.9373576076802403,
    "longitude": 115.14399692194426,
    "title": "Rantau"
  },
];