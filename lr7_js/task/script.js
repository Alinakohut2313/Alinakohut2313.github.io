function compareNumbers(num1, num2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num1 > num2) resolve("Перше число більше");
            else if (num1 < num2) resolve("Друге число більше");
            else reject("Числа рівні");
        }, 1000);
    });
}

function runComparison() {
    const n1 = Number(document.getElementById("num1").value);
    const n2 = Number(document.getElementById("num2").value);

    compareNumbers(n1, n2)
        .then(msg => document.getElementById("output").textContent = msg)
        .catch(err => document.getElementById("output").textContent = err);
        }