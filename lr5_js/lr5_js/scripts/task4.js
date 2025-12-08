var imagesArray = [
    { path: 'https://content2.rozetka.com.ua/goods/images/big/251861904.jpg', title: 'верхній одяг', description: 'штани' },
    { path: 'https://content1.rozetka.com.ua/goods/images/big/616319866.jpg', title: 'верхній одяг', description: 'кофта' },
    { path: 'https://podaro4ek.com.ua/files/resized/products/pes-patron-vsu.800x800.jpg', title: 'верхній одяг', description: 'потужна футболка' }
];

initPhotoRotator("rotator", imagesArray);

function initPhotoRotator(divId, images) {
    var box = document.getElementById(divId);
   
    box.className = "rotator-container"; 
    
    var i = 0;


    var topInfo = document.createElement("div");
    topInfo.className = "rotator-cell rotator-header";

    var leftNavBox = document.createElement("div"); 
    leftNavBox.className = "rotator-cell";
    var back = document.createElement("a");
    back.className = "rotator-nav";
    back.textContent = "Назад";
    back.href = "#";
    leftNavBox.appendChild(back);

    var imgBox = document.createElement("div"); 
    imgBox.className = "rotator-cell rotator-image-area";
    var img = document.createElement("img");
    imgBox.appendChild(img);

    var rightNavBox = document.createElement("div");
    rightNavBox.className = "rotator-cell";
    var next = document.createElement("a");
    next.className = "rotator-nav";
    next.textContent = "Вперед";
    next.href = "#";
    rightNavBox.appendChild(next);

    var bottomInfo = document.createElement("div");
    bottomInfo.className = "rotator-cell rotator-footer";



    box.appendChild(topInfo);
 
    box.appendChild(leftNavBox);
    box.appendChild(imgBox);
    box.appendChild(rightNavBox);

    box.appendChild(bottomInfo);


    function show() {
        topInfo.textContent = "Фотографія " + (i + 1) + " з " + images.length;
        img.src = images[i].path;
        bottomInfo.textContent = images[i].title + " - " + images[i].description; // 

        
        if (i === 0) back.style.visibility = "hidden";
        else back.style.visibility = "visible";

        if (i === images.length - 1) next.style.visibility = "hidden";
        else next.style.visibility = "visible";
    }


    back.onclick = function(e) {
        e.preventDefault();
        if (i > 0) {
            i--;
            show();
        }
    };

    next.onclick = function(e) {
        e.preventDefault();
        if (i < images.length - 1) {
            i++;
            show();
        }
    };


    show();
}