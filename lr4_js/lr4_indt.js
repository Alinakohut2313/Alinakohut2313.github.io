let game = {
    title: "The Legend of Zelda: Breath of the Wild",
    platform: "Nintendo Switch",
    genre: "Action-adventure",
    year: 2017,
    isCompleted: true,
    
    gameInfo() {
        console.log(`Назва: ${this.title}, Платформа: ${this.platform}, Жанр: ${this.genre}, Рік виходу: ${this.year}, Пройдено: ${this.isCompleted ? "Так" : "Ні"}`);
    },
     markAsCompleted() {
        this.isCompleted = true;
    }
};
game.isCompleted = !game.isCompleted;
game.gameInfo();
let library = [
    {title: "The Legend of Zelda: Breath of the Wild", platform: "Nintendo Switch", genre: "Action-adventure", year: 2017, isCompleted: true},
    {title: "God of War", platform: "PS4", genre: "Action", year: 2018, isCompleted: false},
    {title: "Minecraft", platform: "PC", genre: "Sandbox", year: 2011, isCompleted: true}
];
function displayLibrary() {
    library.forEach(game => {
        console.log(`Назва: ${game.title}, Платформа: ${game.platform}, Жанр: ${game.genre}, Рік виходу: ${game.year}, Пройдено: ${game.isCompleted ? "Так" : "Ні"}`);
    });
}
library.push({title: "Cyberpunk 2077", platform: "PC", genre: "RPG", year: 2020, isCompleted: false});
displayLibrary();
library.sort((a, b) => a.year - b.year);
console.log("Відсортовані ігри за роком виходу:", library);
let uncompletedGames = library.filter(game => !game.isCompleted);
console.log("Непройдені ігри:", uncompletedGames);
let nintendoGame = library.find(game => game.platform === "Nintendo Switch");
console.log("Гра на Nintendo Switch:", nintendoGame);

function addGameToLibrary() {
    let title = prompt("Введіть назву гри:");
    let platform = prompt("Введіть платформу:");
    let genre = prompt("Введіть жанр:");
    let year = +prompt("Введіть рік виходу гри:");
    let isCompleted = confirm("Чи пройдено гру?");
    library.push({title, platform, genre, year, isCompleted});
    displayLibrary();
}

function calculateAverageYear(library) {
    let totalYear = 0;
    library.forEach(game => totalYear += game.year);
    const average = totalYear / library.length;
    console.log("Середній рік виходу ігор: " + average.toFixed(2));
}
calculateAverageYear(library);