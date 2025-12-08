function getSecondsToTomorrow() {
    const now = new Date();

  
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

   
    const diff = (tomorrow - now) / 1000;

    return Math.round(diff);
}


document.write(getSecondsToTomorrow());
