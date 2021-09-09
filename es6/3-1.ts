const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');

        resolve(10);
    }, 1 * 1000);

});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has resolved');
        resolve(20);
    }, 2 * 1000);
});

Promise.all([p1, p2])
    .then(results => {
        const total = results.reduce(() =>{
            
        });

        console.log(`Results: ${results}`);
        console.log(`Total: ${total}`);
    });