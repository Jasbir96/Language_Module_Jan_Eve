function resolveAfterNSeconds(n, x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, n);
    });
}

(function () {
    //1sec
  console.time();
    let a = resolveAfterNSeconds(1000, 1)

    a.then(async function (x) {

        //3rd sec
        let y = await resolveAfterNSeconds(2000, 2);
        //4thsec 
        let z = await resolveAfterNSeconds(1000, 3);
        let p = resolveAfterNSeconds(2000, 4);
        console.log("p", p);
        let q = resolveAfterNSeconds(1000, 5);
        // 6 sec 
        console.log(x + y + z + await p + await q);
        console.timeEnd();
    })
})()