// async-await example
// function bring_coke(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Coke's here")
//             resolve()
//         }, 2000)
        
//     })
// }

// function bring_pen() {
//     console.log("Pen's here")
// }


// async function main() {
//     await bring_coke()
//     bring_pen()
// }


// main()









const Person = {
    name: 'Abhay',
    grade: 'something'
}


changes = {
    name: 'Joe'
}


Object.assign(Person, changes)

console.log(Person)









orderItem = [
    {
        productname: "P1",
        productprice: 2000
    },
    {
        productname: "P2",
        productprice: 2000
    },
    {
        productname: "P3",
        productprice: 2000
    }
]

for (item of orderItem) {
    console.log(item.productname)
}






