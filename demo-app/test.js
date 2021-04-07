var obj = [{ name: 'A', age: "1" },
{ name: 'B', age: "2" },
{ name: 'C', age: "3" },
{ name: 'D', age: "4" },
{ name: 'E', age: "5" },
{ name: 'F', age: "6" },
]

console.log(obj.map(ele => ele["name"]))

var obj = [14, 12, 13, 12];
console.log(obj.filter(ele => obj.indexOf(ele) % 2 == 0))
console.log(obj.find(ele => ele % 2 == 0))
console.log(obj.filter(ele => ele % 2 == 0))

////lodas
