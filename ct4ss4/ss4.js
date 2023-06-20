console.log("Hello Js chapter 4 ss 4");

let sum = (a, b) => {
    return a + b;
}
console.log('Check sum a + b = ', sum(9, 6));

let obj = {
    name: 'Johny',
    adress: 'HN',
    getName: function (){
        return this.name;
    }
}
console.log('>>> get Name obj: ', obj.getName(), obj.adress)