
function createRandomPromise(seconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            const random = Math.floor(Math.random() * 10) + 1;
            resolve(random);
        }, seconds * 1000);
    });
}


const promises = [
    createRandomPromise(1),
    createRandomPromise(2),
    createRandomPromise(3)
];

Promise.all(promises)
    .then(values => {
        const sum = values.reduce((a, b) => a + b, 0);
        document.getElementById("result").textContent =
            `Отримані числа: ${values.join(", ")}. Сума: ${sum}`;
    });
