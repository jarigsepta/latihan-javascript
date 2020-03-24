// output berupa console.log
function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

repeatLog(10);


// output berupa console log atau alert
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(10, console.log);
repeat(3, alert);