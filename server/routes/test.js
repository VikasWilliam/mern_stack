const arr = [[1, 2], [5, 8, 7], [4, 6]];

const arr2 = arr.flat(Infinity)
console.log(arr2)

const dubArr = [5, 4, 5, 6, 6, 6, 6, 8, 4, 3, 2, 1, 8, 7, 6, 9, 10, 10, 3];
const distinctArr = [...new Set(dubArr)];
console.log(distinctArr)




// const users = [
//     {
//         "name": "Vikas",
//         "Age": 22
//     },
//     {
//         "name": "Vishal",
//         "Age": 23
//     },
//     {
//         "name": "Varun",
//         "Age": 24
//     },
//     {
//         "name": "Vikrant",
//         "Age": 25
//     }
// ]

// const newUSer = users.filter(value => {
//     if (value.Age > 23) {
//         return {
//             name: value.name,
//             age: value.Age,
//             Job: "Software Engg"
//         }
//     }

// });
// console.log(newUSer)

// const updatedUsers = users.map(user => ({
//     ...user,
//     Job: user.Age > 23 ? "Software Engg" : null
// }));

// console.log(updatedUsers);
