let p1 = new Promise(function (resolve, reject) {
    setTimeout(function (params) {
        console.log("hey");
        resolve()   // note it is conect hte then part
    })
},4000);
p1.then(function (params) {
    console.log("By By");
});



new Promise(function (resolve, reject) {
    setTimeout(function (params) {
        console.log("async task 2");
        resolve()
    })
}).then(function (params) {
    console.log("Async 2 resolve");
})


new Promise(function (resolve, reject) {
    setTimeout(function (params) {
        console.log("main");
        resolve({Username: "Durvesh kumar", email: "durvesh8899@gmail.com"})
    });
}).then(function (user) {
    console.log(user);
})