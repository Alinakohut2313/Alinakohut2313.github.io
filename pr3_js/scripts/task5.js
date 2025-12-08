function formatDate(date) {
    const now = new Date();
    let diff = (now - date) / 1000; 

    if (diff < 1) {
        return "прямо зараз";
    }

    if (diff < 60) {
        return Math.floor(diff) + " сек. назад";
    }

    if (diff < 3600) {
        return Math.floor(diff / 60) + " хв. назад";
    }

    
    const d = ("0" + date.getDate()).slice(-2);
    const m = ("0" + (date.getMonth() + 1)).slice(-2);
    const y = ("" + date.getFullYear()).slice(-2);
    const h = ("0" + date.getHours()).slice(-2);
    const min = ("0" + date.getMinutes()).slice(-2);

    return `${d}.${m}.${y} ${h}:${min}`;
}


document.write(formatDate(new Date(new Date() - 500)) + "<br>"); 
document.write(formatDate(new Date(new Date() - 30000)) + "<br>"); 
document.write(formatDate(new Date(new Date() - 5 * 60000)) + "<br>"); 
document.write(formatDate(new Date("2021-02-20T03:12:00")) + "<br>");
