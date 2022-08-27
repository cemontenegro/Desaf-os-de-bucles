var array = [];
for (var i=1; i<20; i++) {
    if(i%2!==0) {
        array.push(i);
    }
}
console.log(array)

var array = [];
for (var i=0; i<100; i++) {
    if(i%3==0) {
        array.push(i);
    }
}
console.log(array)

var array = [];
for (var i=4; i >= -3.5; i = i-1.5) {
    array.push(i);
}
console.log(array)

var sum = 0;
for (var i=1; i <= 100; i++) {
    sum=sum+i;
}
console.log(sum);

var sum = 1;
for (var i=1; i <= 12; i++) {
    sum=sum*i;
}
console.log(sum);