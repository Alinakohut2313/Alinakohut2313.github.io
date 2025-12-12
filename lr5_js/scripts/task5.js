let correctCaptcha = "";

        // Матриця цифр (0 - пусто, 1 - червоний піксель)
        const digits = {
            '0': [1,1,1, 1,0,1, 1,0,1, 1,0,1, 1,1,1],
            '1': [0,1,0, 1,1,0, 0,1,0, 0,1,0, 1,1,1],
            '2': [1,1,1, 0,0,1, 1,1,1, 1,0,0, 1,1,1],
            '3': [1,1,1, 0,0,1, 1,1,1, 0,0,1, 1,1,1],
            '4': [1,0,1, 1,0,1, 1,1,1, 0,0,1, 0,0,1],
            '5': [1,1,1, 1,0,0, 1,1,1, 0,0,1, 1,1,1],
            '6': [1,1,1, 1,0,0, 1,1,1, 1,0,1, 1,1,1],
            '7': [1,1,1, 0,0,1, 0,1,0, 0,1,0, 0,1,0],
            '8': [1,1,1, 1,0,1, 1,1,1, 1,0,1, 1,1,1],
            '9': [1,1,1, 1,0,1, 1,1,1, 0,0,1, 1,1,1]
        };

        function initCaptcha(length) {
            const box = document.getElementById('captcha-box');
            box.innerHTML = ''; 
            correctCaptcha = '';

            for (let i = 0; i < length; i++) {
               
                let num = Math.floor(Math.random() * 10);
                correctCaptcha += num;

                
                let digitDiv = document.createElement('div');
                digitDiv.className = 'digit';

              
                digits[num].forEach(p => {
                    let span = document.createElement('span');
                    span.className = 'pixel' + (p ? ' active' : '');
                    digitDiv.appendChild(span);
                });

                box.appendChild(digitDiv);
            }
        }

     
        document.getElementById('captcha-input').addEventListener('input', function() {
            let val = this.value;
            let msg = document.getElementById('message');

           
            if (val.length === correctCaptcha.length) {
                if (val === correctCaptcha) {
                    msg.textContent = ""; 
                    msg.className = "success";
                   
                } else {
                    msg.textContent = "Помилка";
                    msg.className = "error";
                }
            } else {
                msg.textContent = ""; 
            }
        });
function checkCaptcha() {
    const val = document.getElementById('user-input').value;
    const msg = document.getElementById('message');

    if (val === correctCaptcha) {
        msg.textContent = "Вірно!";
        msg.className = "success";
    } else {
        msg.textContent = "Помилка";
        msg.className = "error";
    }
}

       
        initCaptcha(2);
