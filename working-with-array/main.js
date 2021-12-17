/* Array methods: 
    forEach()
    every()
    some()
    find()
    filter()
    map()
    reduce()
*/

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500
    }
]

courses.forEach(function(index, course) {
    console.log(index, course)
})

// => index, each element of courses

var isFree = courses.every(function(course) {
    return course.coin === 0
})

// => check every element to meet at least one condition

console.log(isFree)

console.log(courses.some(function(course) {
    return course.coin === 0
}))

// check if one and only one element have coin = 0 return true

var course = courses.find(function(course) {
    return course.name === 'Ruby'
})

// => return an element have name 'Ruby' and end loop or undefined

console.log(courses.filter(function(course) {
    return course.name === 'Ruby'
}))

// check every element have name 'Ruby' and return an array have every element 
function courseHandler(course) {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`
    }
}
var newCourses = courses.map(courseHandler)

// 1. Dễ hiểu
// 2. Ngắn gọn
// 3. Hiệu năng
var i = 0

function coinHandle(accumulator, currentValue, currentIndex, orginArray) {
    i++
    return accumulator + currentValue.coin
}

var totalCoin = courses.reduce(coinHandle, 0)



