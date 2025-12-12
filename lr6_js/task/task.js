 var tab; 
    var tabContent; 

    window.onload = function() {
        tabContent = document.getElementsByClassName('tabContent');
        tab = document.getElementsByClassName('tab');
        hideTabsContent(1); 
      
        generateRadius();
        generateListPosition();
        generateListType();
    }

    function hideTabsContent(a) {
        for (var i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add("hide");
            tab[i].classList.remove('whiteborder');
        }
    }

   
    document.getElementById('tabs').onclick = function (event) {
        var target = event.target;
        if (target.className == 'tab') {
            for (var i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    showTabsContent(i);
                    break;
                }
            }
        }
    }

    function showTabsContent(b){
        if (tabContent[b].classList.contains('hide')) {
            hideTabsContent(0);
            tab[b].classList.add('whiteborder');
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    //  ГЕНЕРАТОР BORDER-RADIUS
    function generateRadius() {
        var rtl = document.getElementById('rtl').value;
        var rtr = document.getElementById('rtr').value;
        var rbr = document.getElementById('rbr').value;
        var rbl = document.getElementById('rbl').value;

       
        document.getElementById('ttl').value = rtl;
        document.getElementById('ttr').value = rtr;
        document.getElementById('tbr').value = rbr;
        document.getElementById('tbl').value = rbl;

        var block = document.getElementById('block');
        
       
        var styleValue = rtl + "px " + rtr + "px " + rbr + "px " + rbl + "px";
        
        
        block.style.borderRadius = styleValue;

        // Завдання II рівня: вивід у Textarea
        var cssCode = "border-radius: " + styleValue + ";\n";
        cssCode += "-webkit-border-radius: " + styleValue + ";";
        document.getElementById('cssOutputRadius').value = cssCode;
    }

    // ГЕНЕРАТОР LIST-STYLE-POSITION (Варіант 10)
    function generateListPosition() {
        var radios = document.getElementsByName('lsp');
        var selectedValue = "outside" // Значення за замовчуванням
        
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                selectedValue = radios[i].value;
                break;
            }
        }

        var ul = document.getElementById('demoListPos');
        ul.style.listStylePosition = selectedValue;

     
        document.getElementById('cssOutputPos').value = "list-style-position: " + selectedValue + ";";
    }

    //ГЕНЕРАТОР LIST-STYLE-TYPE (Варіант 10) 
    function generateListType() {
        var select = document.getElementById('lstSelect');
        var selectedValue = select.value;

        var ul = document.getElementById('demoListType');
        ul.style.listStyleType = selectedValue;

   
        document.getElementById('cssOutputType').value = "list-style-type: " + selectedValue + ";";
    }