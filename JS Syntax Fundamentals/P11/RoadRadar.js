function roadRadar(speed, area) {

    let speeding = false;
    let speedDiff = 0;
    let speedLimit = 0;
    let status;

    switch(area) {
        case 'motorway':
            speedLimit = 130;
            break;

        case 'interstate':
            speedLimit = 90;
            break;

        case 'city':
            speedLimit = 50;
            break;

        case 'residential':
            speedLimit = 20;
            break;

    }

    if(speed > speedLimit) {
        speeding = true;
        speedDiff = speed - speedLimit;

        if(speedDiff <= 20) {
            status = 'speeding';
        } else if(speedDiff <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        
    }

   if(!speeding) {
    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
   } else {
    console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
   }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');