for (var bottles=10; bottles >=0; bottles--){
    if (bottles >=2)
    console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer, take one down, pass it around, " + (bottles-1) + " bottles of beer on the wall.");
    else if (bottles === 0)
    console.log("There are no more bottles of beer on the wall :(");
    else
    console.log(bottles + " bottle of beer on the wall " + bottles + " bottle of beer, take it down, pass it around and there will be no more bottles of beer on the wall.");
}
