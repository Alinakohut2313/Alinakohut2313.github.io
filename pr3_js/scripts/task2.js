function getWeekDay(date) {
    const days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
}

// Приклад використання:
let date = new Date(2012, 0, 3); // 20 лютого 2021
document.write(getWeekDay(date)); // Виведе: СБ (або відповідний день)
