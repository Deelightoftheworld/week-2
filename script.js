const names = ["Asiya", 
    "Jemila",
     "Martha", 
     "Deborah",
     [
        "Oxblood",
         "blue",
          "pink",
           "army-green",
        [1,
            2,
            8,
            0,
            true
        ]
    ] 
]

// console.log(names)

// // console.log(names[0])
// console.log(names.length)
// console.log(names[4])
// console.log(names[4][2])

// console.log(names[4][4][3])

const letters = [`w`, `y`, `s`, `a`,`undefined`]
const name = "Constantine"
// console.log(name.split())
// console.log(name.split(""))


// let sentance = `Obi is a boy`
// console.log(sentance.split())
// console.log(sentance.split(""))
// console.log(sentance.split(" "))


// const ip = "192.168.1.1"
// console.log(ip.split("."))


// const random = "Wasila-is-using-a-charger"
// console.log(random.split("-"))


// COMBINIG ARRAYS AND LOOPS

// Challange 1- Print an array of numbers from 1 to 50

// let numbers = []

// for(let i = 1; i <= 50; i++){
//     numbers.push(i)
// }

// let counter = 1

// do {
//     numbers.push(counter)
//     counter+= 1
// } while (counter <= 50)


    // let counter = 1
    // while(counter <= 50){
    //     numbers.push(counter)
    //     counter+= 1
    // }



// console.log(numbers)
// const jointNumbers = numbers.join(", ")
// // console.log(jointNumbers)
// const splitNumbers = jointNumbers.split(", ")
// // console.log(splitNumbers)

// console.log("Obi is a boy".split())



// Challange 2- print from 50 t0 1

// let numbers = []

// for(let i = 50; i >= 1; i--){
//     numbers.unshift(i)
// }

//  console.log(numbers)


//  Challange 3- print an array concerning even numbers from 0 to 100

// STEPS 

// 1- Create an empty array to store the even numbers
// 2- Create a loop that iterates from 0 to 100
// 3- Inside the loop, check if the current number is even (i % 2 === 0)
// 4- If it is even, push it to the array of even numbers
// 5- After the loop, print the array of even numbers

//  let evenNumbers = []

//  for (let number = 0; number <= 100; number += 2) {
//     evenNumbers.push(number)
//  }
//  console.log(evenNumbers)

//  Challange 4- print an array that contains numbers divisible by 3

// let divisibleByThree = []

// for (let number = 0; number <= 100; number++) {
    
//     let remainder = number % 3

//     if (remainder === 0) {
//         divisibleByThree.push(number)
//     }

    
//     if (number % 3 === 0) {
//         divisibleByThree.push(number)
//     }

// }
// console.log(divisibleByThree)

// Challange Martha and Deborah Print an array that has numbers that are divisible by 4

//  let divisibleByFour = []

//  for (let number = 0; number <= 100; number++) {
//         if (number % 4 === 0) {
//             divisibleByFour.push(number)
//         }
//     }
//  console.log(divisibleByFour)


/**
 * Print an array that has numbers from 0 to 100
 * if the number is divisible by 3, replace it with "Fizz"
 * if the number is divisible by 5, replace it with "Buzz"
 * if the number is divisible by both 3 and 5, print "FizzBuzz"
 */

let nums = []

for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        nums.push("FizzBuzz")
    } else if (i % 3 === 0) {
        nums.push("Fizz")
    } else if (i % 5 === 0) {
        nums.push("Buzz")
    } else {
        nums.push(i)
    }
}

console.log(nums)






