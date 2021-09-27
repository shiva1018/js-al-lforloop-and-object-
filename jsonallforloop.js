var students=[{
    "name":"shiva",
    "rollnumber":"2322",
    "age":"15",
},
{
    "name":"sai",
    "rollnumber":"2321",
    "age":"16",

},
{
    "name":"karthik",
    "rollnumber":"2320",
    "age":"15",
}
];
// for loop
for(i=0;i<students.length;i++){
    console.log(students[i])
};console.log("and")
// for in
for( const x in students){
    console.log(students[x]);
};
console.log("and")
// for of
for (let a of students){
    console.log(a)
}
console.log("and")
// for each
students.forEach(function(){
    console.log(students[0])
})
