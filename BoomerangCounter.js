function countBoomerangs(boomerangArray)
{
    let counter = 0;
    for (let i = 0; i < boomerangArray.length-2; i++) 
    {
        if(PatternFinder(boomerangArray[i], boomerangArray[i+1], boomerangArray[i+2])) counter++;
    }
    return counter;
}

function PatternFinder(x,y,z)
{
    if(x === z && y != x) return true;
    return false;
}

console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]));
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]));
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]));
console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1]));