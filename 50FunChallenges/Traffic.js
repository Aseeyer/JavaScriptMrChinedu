const prompt = require('prompt-sync')();

function trafficLight(){
    let userColor = prompt("like red or green or yellow? ")
    if(userColor === "green"){
        console.log("Go!")
    }else if(userColor === "red"){
        console.log("Stop!")
    }else if(userColor === "yellow"){
        console.log("Wait")
    }
}


trafficLight()