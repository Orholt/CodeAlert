var yes1='<i class="icon-ok" ></i>';
var no1='<i class="icon-cancel"></i>';
var nextgame='<a href="example" class="black1">Następna strona</a>'

function check1() {//jeśli pytanie pierwsze jest ok to dajecie to 
    //Start

    document.getElementById('option1-test').innerHTML = yes1;//wyświetla symbol yes

        document.getElementById('check-go').innerHTML = nextgame; //Wyświetla możliwość przejscia bo jest tylko jedno pytanie
        
   
    //Stop

}

function check2() {//jeśli pytanie drugie jest ZŁE to dajecie to 
    //Start
    document.getElementById('option2-test').innerHTML = no1;
 
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

