console.log("set interval started");

let count = 0 ;

let id = setInterval(() => {
    console.log("interval");
    count ++;

    if(count === 5){  // While == checks only value (after type conversion).
        clearInterval(id);
        console.log("interval ended");
    }
}, 1000);  // to stop it clearInterval(id)  id means let id = setInterval

