console.log('Hello word from Chapter4 ss5');

let sum = (a, b, callBack) => {
    let tong = a + b;
    // Muốn có độ trễ dùng hàm setTimeout
    // setTimeout(() => {
    //     callBack(tong);
    // }, 5000);// setTimeout('arrow function', thời gian );

    // setInterval(() => {// setInterval lặp liên tục
    //     callBack(tong);
    // }, 1000000000);
    // setInterval(() => {
    //     hàm muốn làm gì
    // }, time muốn lăpk);
    let i =0;
    let timer = setInterval(() => {// muốn clean setInterval  đặt 
        callBack(tong);
        i++;
        if (i === 5) {// Đặt điều kiện cho nó dùng
            clearInterval(timer);
        }
        console.log('check i:', i)
    }, 1000);
    console.log('check i:', i)
}

let printSum = (message) => {
    console.log('Check sum: ', message);
}

sum(9, 6, printSum);

//All đơn vị time là mms exp: 1s = 1000mms