// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    if(pickup > 42){
        let blocks = pickup - 42;
        return blocks;
    }
    else{
        let blocks = 42 - pickup;
        return blocks;
    }
};

function distanceFromHqInFeet(pickup){
    return distanceFromHqInBlocks(pickup) * 264;     
};

function distanceTravelledInFeet(start, destination){
    if(start > destination){
        return ((start - destination)* 264);
    }
    else{
        return ((destination - start)* 264);
    }
}

function calculatesFarePrice(start, destination){
    let dist = distanceTravelledInFeet(start, destination);
    if (dist < 400){
        return 0;
    }
    else if (dist > 400 && dist < 2000){
        return (dist - 400) * .02;
    }
    else if(dist > 2000 && dist < 2500){
        return 25;
    }
    else{
        return 'cannot travel that far';
    }
}
