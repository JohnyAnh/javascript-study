console.log('Tìm Kiếm với Filter/Find Trên Mảng Array Dữ Liệu');
// Tài liệu đọc https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

// let arr = [1,2,3,4,5,6,7,8];
// // Filter/Find
// let Filter = arr.filter((item, index)=>{
//     // item, index
//     console.log('Check item: ', item,'Check index: ', index)
//     return item && index > 5;
// });
// console.log(Filter);

let arr = [
    {name: 'Johny', age: 25},
    {name: 'Monica', age: 33},
    {name: 'Rosss', age: 25},
    {name: 'Vu', age: 35},
    {name: 'Tung', age: 55},

];
// Filter/Find
let Filter = arr.filter((item, index)=>{
    // item, index
    return item && item.age === 25;
});
console.log(Filter);