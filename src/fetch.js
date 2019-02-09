let auroraData = {
   nameLoc : "No Location", 
   kpIndex : -1,
   cloudCover : -1,
   fogCover : -1,
   probabilityView : -1,
}

let counter = 0;

function handleSearchFailure() {
    console.log(`This is pass ${counter} 
    ${auroraData}`);
}
    counter = counter + 1;
  
let urlYellowknife = 'https://api.auroras.live/v1/?type=all&lat=62.4484&long=-114.42&forecast=false&threeday=false';     
fetch(urlYellowknife)
       .then(res => res.json()) 
       .then((data) => { 
        auroraData.nameLoc = data.weather.location.name;
        auroraData.kpIndex = data.ace.kp;
        auroraData.cloudCover = data.weather.cloud;
        auroraData.fogCover = data.weather.fog;
        auroraData.probabilityView = data.probability.value;
        console.log(`'Results' ${counter} ${auroraData.nameLoc}
        'kp' ${auroraData.kpIndex}
        'Cloud' ${auroraData.cloudCover}
         'Fog' ${auroraData.fogCover}
         'Probability' ${auroraData.probabilityView}`);
})
    .catch(handleSearchFailure);



URLs to replace in above code for different location


let urlAthabasca = 'https://api.auroras.live/v1/?type=all&lat=54.7214&long=-113.286&forecast=false&threeday=false';     

let urlFairbanks = 'https://api.auroras.live/v1/?type=all&lat=64.8378&long=-147.716&forecast=false&threeday=false';     

let urlIqaluit = 'https://api.auroras.live/v1/?type=all&lat=63.7467&long=-68.517&forecast=false&threeday=false';     

let urlTroms = 'https://api.auroras.live/v1/?type=all&lat=69.6492&long=18.9553&forecast=false&threeday=false';     

let urlYellowknife = 'https://api.auroras.live/v1/?type=all&lat=62.4484&long=-114.42&forecast=false&threeday=false';     



