let course = ["pHP","ReactJS","AngularJS","Javascript"];
let newCourse = course.map((c) => {
    return `<li>${c}</li>`;
});

console.log(course);
console.log(newCourse);