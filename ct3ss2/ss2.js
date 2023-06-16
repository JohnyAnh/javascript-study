console.log("Hello Control Flow Basics");

let arrTop4 = ['MCT', 'Liverpool', 'MU', 'Chelsea'];

// for (let i = 0; i < arrTop4.length; i++) {
//     console.log('Top: ', i + 1, arrTop4[i])    
// }
//=> lợi ích vòng lặp for là đã biết lặp bao nhiêu lần

let i = 0;
// while (i < arrTop4.length) {
//     console.log('Top: ', i + 1, arrTop4[i])
//     i++;
// }
// do {
//     console.log('Top: ', i + 1, arrTop4[i])
//     i++;
// } while (i< arrTop4.length);
let flag = false;
while (!flag) {
    console.log('check value i: ', i)
    i++;
    if (i === 10) {
        flag = true
    }
}
//=> lợi ích vòng lặp while là chưa biết lặp bao nhiêu lần
//Nên dùng vòng lặp for hoặc while