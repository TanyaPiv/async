// const getAll = (promise1, promise2) => {
//     return new Promise((resolve)=> {
//         let counter = 0;
//         let array = [];
//         const isDone = () => {
//             if(++counter === 2) {
//                 resolve(array)
//             }
//         }
//         promise1.then((res)=> {
//             array[0] = res
//             isDone()
//         })
//         promise2.then((res)=> {
//             array[1] = res
//             isDone()
//         })
//     })
// }
// const getPromise1 = (x) => new Promise((resolve) => {
//     setTimeout(()=> {
//         resolve(x)
//     }, 3000)
// })
// const getPromise2 = (x) => new Promise((resolve) => {
//     setTimeout(()=> {
//         resolve(x)
//     }, 1000)
// })

// getAll(getPromise1(5), getPromise2(2)).then((result) => console.log(result))
