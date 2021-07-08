function countDown(num){
    let count = setInterval(function() {
        console.log(--num);
        if (num === 0) {
            clearInterval(count);
            console.log("DONE!");
        }
    }, 1000);
}

function randomGame() {
    let num;
    let count = 0;
    let func = setInterval(function() {
        num = Math.random();
        count++;
        if (num > 0.75) {
            clearInterval(func);
            console.log(count);
        }
    }, 1000);
}
