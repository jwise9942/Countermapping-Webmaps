var config = {
    style: 'mapbox://styles/jwise9942/cm3rk6ulk009b01rwbxxzb5ct',
    accessToken: 'pk.eyJ1Ijoiandpc2U5OTQyIiwiYSI6ImNtMXRpMHExdDAyazUybXEwaDNnZGp6NGsifQ.6bkGUaSaQhH8PNZYjbjTZQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Designs on Expansion',
    subtitle: 'A visual argument for the expansion of the NYC Subway',
    byline: 'By John Wise',
    para1: "When word “subway” is uttered, many people, at least in the US, will, if not thinking of the sandwich chain, likely think of the New York City Subway, and for good reason. One of the busiest in the world, the NYC Subway has 472 stations, the largest number in a single system in the world, and more than 665 miles of revenue tracks. When non-revenue trackage is brought into the equation, that number increases to over 800 miles. If laid end to end, the tracks would easily stretch from New York to Chicago! (MTA, 2020) (MTA, 2022) The longest trip that one can take without making a transfer is 31 miles, and with a transfer, 38 miles. (MTA, 2020) Furthermore, in 2019, the system saw an annual weekday ridership of 5.5 million, and an overall ridership that year of 1.698 billion. (MTA, 2020) As this article from Dollaride masterfully puts it, “NYC boasts one of the most active transportation systems in the country. Cars, buses, bikes, and scooters share busy roads. Trains rumble above and below ground. Millions of New Yorkers travel throughout the city each day.” (NYC Transit Deserts, 2022) Yet when you look at a map of the system, especially on a more accurately projected map, you can find that there are large swaths of the city, mainly in Queens and Staten Island, that are not served by a subway line. Furthermore, many of these areas are quite a ways from the nearest station. In turn, it is unsurprising that, as Dollaride asserts. “many commuters,” despite the system’s extensiveness, “still can’t get to their destinations efficiently.” (NYC Transit Deserts, 2022) These areas are commonly known as transit deserts. (NYC Transit Deserts, 2022) The term originates from a 2012 study by Junfeng Jiao and Maxwell Dillivan, who partially based the concept off of the older idea of “food deserts.” (Jiao & Dillivan, 2013) Jiao and Dillivan define the phrase as such: “Transit deserts are generally defined as areas containing a large constituent of transit-dependent populations with limited automobile access where the level of mass transit service (supply) does not adequately service these populations (demand).” (Jiao & Dillivan, 2013) In turn, the authors assert, “Areas of high concentrations of people who rely on public transportation for daily activities are in the greatest need of the provision of transit services.” In other words, these communities underserved by public transit become dependent on it. (Jiao & Dillivan, 2013).",
    footer: '<br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Transit Deserts',
            description: 'In New York City, there are around two million people, around 25 percent of the city’s population, living in transit deserts. (NYC Transit Deserts, 2022) Furthermore, a majority of the population in these areas is made up of lower-income citizens who, naturally, depend greatly on public transit for their commutes. However, they often don’t have access to the necessary transportation options they should have access to. (NYC Transit Deserts, 2022) As Dollaride explains, “someone living in a transit desert may need to walk at least 15 minutes to the nearest subway or bus stop,” which is in direct contrast to the increasingly popular concept of the fifteen minute city. (NYC Transit Deserts, 2022) This claim is solidly backed up by the accompanying map. To confound matters further, as the population of NYC continues to grow, it moves further away from the city’s center, (NYC Transit Deserts, 2022) which consists of Manhattan and the parts of Brooklyn and Queens just across the East River. Beyond this core region, there are many areas, especially in Queens and Staten Island which have no subway service whatsoever, including the two airports, both of which are among the busiest in the world. In the map, each station has a half-mile radius around it, corresponding to a ten or so minute walk.',
            image:'Images/Data1.png',
            location: {
                center: [-73.98309, 40.70650],
                zoom: 9.95,
                pitch: 1.00,
                bearing: 9.60
            },
        },
        {
            id: 'slug-style-id',
            alignment: 'right',
            hidden: false,
            title: 'Block groups by public transit use',
            description: 'As can be seen in the map above, the block groups that have the highest number of residents getting to work via public transit are those with the closest proximities to subway lines. In fact, wherever there is a subway line, a majority of people use public transit. The only exception to this pattern is Staten Island, which, for the most part, is significantly less densely populated than the rest of the city. It would turn out that median income and car ownership is also much higher there, which can be seen later on. It should also be noted that in most of the transit deserts, ranging from small to large, public transit use is still quite high. It can also be seen that in parts of Manhattan, public transit use is not nearly as high as it could be. This can be explained by the fact that many people in Manhattan walk to work as opposed to taking public transit. It is also interesting to note that public transit use in eastern Queens, despite the presence of LIRR lines, is still lower than in areas closer to subway lines. This likely is related to the fact that LIRR tickets for traveling within the city cost $5 during off-peak hours, and $7 during peak hours. Despite being cheaper than regular tickets, they are still higher than the $2.90 subway fare for city-owned transit. The lower fequency of trains in comparison to the Subway also likely plays a role.',
            image: 'Images/Data2.png',
            location: {
                center: [-73.78389, 40.71261],
                zoom: 13.06,
                pitch: 0.00,
                bearing: 9.60,
            },
        },
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Block groups by % walkers',
            description: 'As can be seen in the map, much of the population of Manhattan south of Central Park walks to work as opposed to taking public transit. It should be noted, however, that this southern half of the borough, consists of two of the city’s biggest business districts, Midtwown and Lower Manhtattan, in which not as many people would be expected to live. The same also applies to the other major business districts of the city, such as Downtown Brooklyn, Long Island City and Flushing in Queens, and the central part of the Bronx. A few other areas show high concentrations of people who walk to work as well.',
            image: 'Images/Data3.png',
            location: {
                center: [-73.98414, 40.75509],
                zoom: 14.90,
                pitch: 0.00,
                bearing: 9.60
            },
        },
        {
            id: 'slug-style-id',
            alignment: 'right',
            hidden: false,
            title: 'Block groups by % with no cars',
            description: 'Block groups within a roughly one-half mile of the subway system have a higher percentage of their population not owning any cars.',
            image: 'images/Data5.png',
            location: {
                center: [-73.83011, 40.75957],
                zoom: 14.47,
                pitch: 0.00,
                bearing: 9.60
            },
        },
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Block groups by public transit use vs. car use',
            description: 'One rule of thumb in the US is that if you don’t take public transit or walk to work, you drive. This heuristic is validated by the next two maps. Here, high use of public transit is shown in blue, and high instances of driving are shown in purple. High instances of both are shown in dark purple.',
            image: 'Images/Data4.png',
            location: {
                center: [-73.82435, 40.69847],
                zoom: 14.16,
                pitch: 0.00,
                bearing: 9.60
            },
        },
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Block groups by public transit use and owning no car',
            description: 'High correlations of both are, like in the previous map, shown in dark purple. Note that the spatial data here is remarkably similar to that in the map showing block groups by % with no cars.',
            image: 'Images/Data6.png',
            location: {
                center: [-73.79716, 40.70432],
                zoom: 14.16,
                pitch: 0.00,
                bearing: 9.60
            },  
        },
        {
            id: 'slug-style-id',
            alignment: 'right',
            hidden: false,
            title: 'Block groups by public transit use and median income',
            description: 'As asserted by Dollaride, it is people in lower-income neighborhoods who really depend on public transit. This relationship was tested, and, for the most part, it turned out to be true. This is especially apparent in the Bronx and Upper Manhattan. It is interesting to note that there are certain areas of New York City in which there are high instances of both high median income and high public transit use, in such areas as the Upper West Side and neighborhoods of Brooklyn and Queens along the East River.',
            image: 'Images/Data7.png',
            location: {
                center: [-73.97213, 40.78329],
                zoom: 13.68,
                pitch: 0.00,
                bearing: 9.60
            },  
        },
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'My Solution',
            description: 'Using the various block group maps as a visual guide, I was able to create this map of subway line extensions. Specifically, the ends of various lines were extended through areas in which public transit use and ownership of no cars was highest. To conclude, it can be seen that many of the proposed extensions resulting from this study’s findings are ones that others have proposed. (New Subway Lines) (futureNYCSubway)  And after studying various demographics of the city, it can be said that they are logical and pragmatic solutions. Furthermore, with growth of the subway system comes growth of the city. (NYC Transit Deserts, 2022) In turn, these extensions are ones that should be inevitable, knowing that the world is becoming a an increasingly connected place.',
            image: 'Images/Expansion.png',
            location: {
                center: [-73.98309, 40.70650],
                zoom: 9.95,
                pitch: 1.00,
                bearing: 9.60
            },  
        },
        {
            id: 'interlude',
            alignment: 'center',
            hidden: false,
            title: '',
            image: 'Images/Bibliography.png',
            description: '',
            location: {
                center: [-73.98309, 40.70650],
                zoom: 9.95,
                pitch: 1.00,
                bearing: 9.60
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
        },
    ]
};
