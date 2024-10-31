var config = {
    style: 'mapbox://styles/jwise9942/cm2xi4bu700em01pc3tou24vw',
    accessToken: 'pk.eyJ1Ijoiandpc2U5OTQyIiwiYSI6ImNtMXRpMHExdDAyazUybXEwaDNnZGp6NGsifQ.6bkGUaSaQhH8PNZYjbjTZQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Future Inundation Zones',
    subtitle: '2050 and 20100',
    byline: 'By John Wise',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'New York Future Floodplain',
            description: 'Here you see the 2050 and 2021 predicted floodplains.',
            location: {
                center: [-73.99881, 40.72220],
                zoom: 13.07,
                pitch: 12.00,
                bearing: 18.42
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Red Hook Floodplain',
            image: 'https://thebridgebk.com/wp-content/uploads/2017/10/121029_5267-1024x683.jpg',
            description: 'According to New York State Climate Impacts Assessment, regarding Sandy "the impacts were particularly severe. 14 Many of the Red Hook Houses’ electrical systems and boilers were located in low areas, such as basements or crawlspaces, that exposed them to damage from floodwater. Considering the future floodplains, issues like this will only become more severe.',
            location: {
                center: [-74.00998, 40.67520],
                zoom: 12.12,
                pitch: 12.00,
                bearing: 18.42,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
