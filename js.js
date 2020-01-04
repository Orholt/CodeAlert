var yes1='<i class="icon-ok" ></i>';
var no1='<i class="icon-cancel"></i>';
var nextgame='<a href="example" class="black1">Następna strona</a>'
var number2=0;
function check1() {//jeśli pytanie pierwsze jest ok to dajecie to 
    //Start
    number2++; //dodaje 1 do wyniku
    document.getElementById('option1-test').innerHTML = yes1;//wyświetla symbol yes

    if (number2==2) {
        document.getElementById('check-go').innerHTML = nextgame; //sprawdza czy wynik jest równy 2 jeśli tak to możesz przejśc dalej
        
    } else {
        document.getElementById('check-go').innerHTML = number2+"/2";// jeśli nie wypisuje 1/2 pytan jest dobrze
    }
    //Stop

}

function check2() {//jeśli pytanie drugie jest ok to dajecie to 
    //Start
    number2++;//dodaje 1 do wyniku
    document.getElementById('option2-test').innerHTML = yes1;//wyświetla symbol yes
    if (number2==2) {
        document.getElementById('check-go').innerHTML = nextgame;//sprawdza czy wynik jest równy 2 jeśli tak to możesz przejśc dalej
        
    } else {
        document.getElementById('check-go').innerHTML = number2+"/2";// jeśli nie wypisuje 1/2 pytan jest dobrze
    }
 
     //Stop
}
function check3() {//jeśli pytanie trzecie jest złe to dajecie to 
    //Start

    document.getElementById('option3-test').innerHTML = no1;
    //Stop
}
function check4() {//jeśli pytanie czwarte jest złe to dajecie to 
      //Start

    document.getElementById('option4-test').innerHTML = no1;//wyświetla symbol x
    //Stop
}

/*
*/

