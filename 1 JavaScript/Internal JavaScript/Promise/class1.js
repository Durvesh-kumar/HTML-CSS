let ans = new Promise(function(res, rej){
    return res("subse phale ghar par aap");
});

let p2 = ans.then(function (data) {
    console.log(data);
   return new Promise(function (res, rej) {
        return res("gate kholo aur gate lagao");
    });
});
let p3 = p2.then(function (data) {
    console.log(data);
    return new Promise(function (res, rej) {
        return res("khana pakao khana khao")
    })
})
let p4 = p3.then(function (data) {
    console.log(data);
    return new Promise(function (res, rej) {
        return res("3")
    })
})
let p5 = p4.then(function (data) {
    console.log(data);
    return new Promise(function (res, rej) {
        return res("44")
    })
})
p5.then(function (data) {
    console.log(data);
})