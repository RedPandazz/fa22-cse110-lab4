function currentTime(){
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
}

setInterval(currentTime, 1000)