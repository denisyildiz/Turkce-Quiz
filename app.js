let startButton = document.querySelector("#startButton").addEventListener("click",fStartButton);
startButton = document.querySelector("#startButton").style.visibility="visible";
let soru = document.querySelector(".soru");

let zorlukSecenek = document.querySelector(".zorluksecenek");

let yanlisHakki = document.querySelector("#number");

let trueButton = document.querySelector("#dogru").addEventListener("click",fTrueButton);
trueButton = document.querySelector("#dogru").style.visibility="hidden";
let soruText = document.querySelector(".sorutext");

let falseButton = document.querySelector("#yanlis").addEventListener("click",fFalseButton);
falseButton = document.querySelector("#yanlis").style.visibility="hidden";
let kalanSoru = document.querySelector(".kalansoru>.kalansorunumber");
let sorualani = document.querySelector(".sorualani>.bir").style.visibility="hidden";
let soru2 = document.querySelector(".sorualani>.iki").style.visibility="hidden";
let soru3 = document.querySelector(".sorualani>.uc").style.visibility="hidden";
let soru4 = document.querySelector(".sorualani>.dort").style.visibility="hidden";
let soru5 = document.querySelector(".sorualani>.bes").style.visibility="hidden";
let soru6 = document.querySelector(".sorualani>.alti").style.visibility="hidden";
let soru7 = document.querySelector(".sorualani>.yedi").style.visibility="hidden";
let soru8 = document.querySelector(".sorualani>.sekiz").style.visibility="hidden";
let soru9 = document.querySelector(".sorualani>.dokuz").style.visibility="hidden";
let soru10 = document.querySelector(".sorualani>.on").style.visibility="hidden";
let tebrikler = document.querySelector(".sorualani>.tebrikler").style.visibility="hidden";
let yeniSoru = document.querySelector("#yeniSoru").addEventListener("click",fyeniSoru)
yeniSoru = document.querySelector("#yeniSoru").style.visibility="hidden";
let maalesef = document.querySelector(".sorualani>.maalesef").style.visibility="hidden";
let kazandiniz = document.querySelector(".sorualani>.kazandiniz").style.visibility="hidden";

let skorText = document.querySelector(".skorText").style.visibility="hidden";
let score = document.querySelector(".score").style.visibility="hidden";
score = document.querySelector(".score").innerHTML=0;
kalanSoru.innerHTML=10;
yanlisHakki.innerHTML=3;



function fStartButton(){ // oyuna başla butonu
    startButton = document.querySelector("#startButton").style.visibility="hidden";
    sorualani = document.querySelector(".sorualani>.bir").style.visibility="visible";
    zorlukSecenek = document.querySelector(".zorluksecenek").innerHTML=`&nbsp; Kolay`; 
    tebrikler = document.querySelector(".sorualani>.tebrikler").style.visibility="hidden";
    trueButton = document.querySelector("#dogru").style.visibility="visible";
    falseButton = document.querySelector("#yanlis").style.visibility="visible";
}
function fTrueButton(){
    fdogru();
}
function fFalseButton(){
    fyanlis();
}
function fyeniSoru(){ // devam et butonu
    kalansorukontrol();
    yeniSoru = document.querySelector("#yeniSoru").style.visibility="hidden";
    tebrikler = document.querySelector(".sorualani>.tebrikler").style.visibility="hidden";
    maalesef = document.querySelector(".sorualani>.maalesef").style.visibility="hidden";
    trueButton = document.querySelector("#dogru").style.visibility="visible";
    falseButton = document.querySelector("#yanlis").style.visibility="visible";
    if(kalanSoru.innerHTML==9){
        soru2 = document.querySelector(".sorualani>.iki").style.visibility="visible";
        trueButton = document.querySelector("#dogru").style.visibility="visible";
        falseButton = document.querySelector("#yanlis").style.visibility="visible";
    }
    else if(kalanSoru.innerHTML==8){
        soru3 = document.querySelector(".sorualani>.uc").style.visibility="visible";
        trueButton = document.querySelector("#dogru").style.visibility="visible";
        falseButton = document.querySelector("#yanlis").style.visibility="visible";
    }
    else if(kalanSoru.innerHTML==7){
        soru4 = document.querySelector(".sorualani>.dort").style.visibility="visible";
        trueButton = document.querySelector("#dogru").style.visibility="visible";
        falseButton = document.querySelector("#yanlis").style.visibility="visible";
    }
    else if(kalanSoru.innerHTML==6){
        soru5 = document.querySelector(".sorualani>.bes").style.visibility="visible";
        trueButton = document.querySelector("#dogru").style.visibility="visible";
        falseButton = document.querySelector("#yanlis").style.visibility="visible";
    }
    else if(kalanSoru.innerHTML==5){
        soru6 = document.querySelector(".sorualani>.alti").style.visibility="visible";
        trueButton = document.querySelector("#dogru").style.visibility="visible";
        falseButton = document.querySelector("#yanlis").style.visibility="visible";
    }
    else if(kalanSoru.innerHTML==4){
        soru7 = document.querySelector(".sorualani>.yedi").style.visibility="visible";
        trueButton = document.querySelector("#dogru").style.visibility="visible";
        falseButton = document.querySelector("#yanlis").style.visibility="visible";
    }
    else if(kalanSoru.innerHTML==3){
        soru8 = document.querySelector(".sorualani>.sekiz").style.visibility="visible";
        trueButton = document.querySelector("#dogru").style.visibility="visible";
        falseButton = document.querySelector("#yanlis").style.visibility="visible";
    }
    else if(kalanSoru.innerHTML==2){
        soru9 = document.querySelector(".sorualani>.dokuz").style.visibility="visible";
        trueButton = document.querySelector("#dogru").style.visibility="visible";
        falseButton = document.querySelector("#yanlis").style.visibility="visible";
    }
    else if(kalanSoru.innerHTML==1){
        soru10 = document.querySelector(".sorualani>.on").style.visibility="visible";
        trueButton = document.querySelector("#dogru").style.visibility="visible";
        falseButton = document.querySelector("#yanlis").style.visibility="visible";
    }

    else if(kalanSoru.innerHTML==0){
        soru6 = document.querySelector(".sorualani>.bes").style.visibility="hidden";
        trueButton = document.querySelector("#dogru").style.visibility="visible";
        falseButton = document.querySelector("#yanlis").style.visibility="visible";
        kalanSoru.innerHTML="TEBRİKLER!!"
        trueButton = document.querySelector("#dogru").remove();
        falseButton = document.querySelector("#yanlis").remove();
        soruText = document.querySelector(".sorutext").style.visibility="hidden";
        kazandiniz = document.querySelector(".sorualani>.kazandiniz").style.visibility="visible";
        zorlukSecenek = document.querySelector(".zorluksecenek").innerHTML="Tüm yollar Aşıldı!"
        skorText = document.querySelector(".skorText").style.visibility="visible";
        score = document.querySelector(".score").style.visibility="visible";
    }
}



function kalansorukontrol(){
    if(kalanSoru.innerHTML==10){
        kalanSoru.innerHTML=10-1;
    }
else if(kalanSoru.innerHTML==9){
    kalanSoru.innerHTML=10-2;
    zorlukSecenek = document.querySelector(".zorluksecenek").innerHTML=`&nbsp; Orta`; 
}
else if(kalanSoru.innerHTML==8){
    kalanSoru.innerHTML=10-3;
    zorlukSecenek = document.querySelector(".zorluksecenek").innerHTML=`&nbsp; Orta`; 
}
else if(kalanSoru.innerHTML==7){
    kalanSoru.innerHTML=10-4;
    zorlukSecenek = document.querySelector(".zorluksecenek").innerHTML=`&nbsp; Orta`; 
}
else if(kalanSoru.innerHTML==6){
    kalanSoru.innerHTML=10-5;
    zorlukSecenek = document.querySelector(".zorluksecenek").innerHTML=`&nbsp; Orta`; 
}
else if(kalanSoru.innerHTML==5){
    kalanSoru.innerHTML=10-6;
    zorlukSecenek = document.querySelector(".zorluksecenek").innerHTML=`&nbsp; Orta`; 
}
else if(kalanSoru.innerHTML==4){
    kalanSoru.innerHTML=10-7;
    zorlukSecenek = document.querySelector(".zorluksecenek").innerHTML=`&nbsp; Orta`; 
}
else if(kalanSoru.innerHTML==3){
    kalanSoru.innerHTML=10-8;
    zorlukSecenek = document.querySelector(".zorluksecenek").innerHTML=`&nbsp; Zor`; 
}
else if(kalanSoru.innerHTML==2){
    kalanSoru.innerHTML=10-9;
    zorlukSecenek = document.querySelector(".zorluksecenek").innerHTML=`&nbsp; Zor`; 
}
else if(kalanSoru.innerHTML==1){
    kalanSoru.innerHTML=10-10;
    zorlukSecenek = document.querySelector(".zorluksecenek").innerHTML=`&nbsp; Zor`; 
}
else if(kalanSoru.innerHTML==0){
    kalanSoru.innerHTML="TEBRİKLER!!"
    trueButton = document.querySelector("#dogru").remove();
    falseButton = document.querySelector("#yanlis").remove();
    soruText = document.querySelector(".sorutext").style.visibility="hidden";
    kazandiniz = document.querySelector(".sorualani>.kazandiniz").style.visibility="visible";
    zorlukSecenek = document.querySelector(".zorluksecenek").innerHTML="Tüm yollar Aşıldı!"
    skorText = document.querySelector(".skorText").style.visibility="visible";
    score = document.querySelector(".score").style.visibility="visible";
    
}
}

function yanlishakkontrol(){
    if(yanlisHakki.innerHTML==3){
        yanlisHakki.innerHTML=3-1;
     }
     else if(yanlisHakki.innerHTML==2){
        yanlisHakki.innerHTML=3-2;
       }
    else if(yanlisHakki.innerHTML==1){
        yanlisHakki.innerHTML=3-3;
       }
       else if(yanlisHakki.innerHTML==0){
         alert("Hakkınız Kalmadı! Yarışmadan Elendiniz. Tekrar Başa Dönüyorsunuz...")
         yeniSoru = document.querySelector("#yeniSoru").style.visibility="hidden";
         maalesef = document.querySelector(".sorualani>.maalesef").style.visibility="hidden";
         window.location.reload();
       }
}
function fdogru(){ // doğru butonuna basarsa;

     if(kalanSoru.innerHTML==10){
        sorualani = document.querySelector(".sorualani>.bir").style.visibility="hidden";
        tebrikler = document.querySelector(".sorualani>.tebrikler").style.visibility="visible";
        yeniSoru = document.querySelector("#yeniSoru").style.visibility="visible"; //devam et butonu
        trueButton = document.querySelector("#dogru").style.visibility="hidden";
        falseButton = document.querySelector("#yanlis").style.visibility="hidden";
        score = document.querySelector(".score").innerHTML=score+1;
    }
    else if(kalanSoru.innerHTML==9){
        sorualani = document.querySelector(".sorualani>.bir").style.visibility="hidden";
        soru2 = document.querySelector(".sorualani>.iki").style.visibility="hidden";
        maalesef = document.querySelector(".sorualani>.maalesef").style.visibility="visible";
        yeniSoru = document.querySelector("#yeniSoru").style.visibility="visible"; //devam et butonu
        trueButton = document.querySelector("#dogru").style.visibility="hidden";
        falseButton = document.querySelector("#yanlis").style.visibility="hidden";
        yanlishakkontrol();

    }
    else if(kalanSoru.innerHTML==8){
        sorualani = document.querySelector(".sorualani>.bir").style.visibility="hidden";
        soru2 = document.querySelector(".sorualani>.iki").style.visibility="hidden";
        soru3 = document.querySelector(".sorualani>.uc").style.visibility="hidden";
        maalesef = document.querySelector(".sorualani>.maalesef").style.visibility="visible";
        yeniSoru = document.querySelector("#yeniSoru").style.visibility="visible"; //devam et butonu
        trueButton = document.querySelector("#dogru").style.visibility="hidden";
        falseButton = document.querySelector("#yanlis").style.visibility="hidden";
        yanlishakkontrol();

    }
    else if(kalanSoru.innerHTML==7){
        soru4 = document.querySelector(".sorualani>.dort").style.visibility="hidden";
        tebrikler = document.querySelector(".sorualani>.tebrikler").style.visibility="visible";
        yeniSoru = document.querySelector("#yeniSoru").style.visibility="visible"; //devam et butonu
        trueButton = document.querySelector("#dogru").style.visibility="hidden";
        falseButton = document.querySelector("#yanlis").style.visibility="hidden";
        score = document.querySelector(".score").innerHTML=score+1;
    }
    else if(kalanSoru.innerHTML==6){
        soru5 = document.querySelector(".sorualani>.bes").style.visibility="hidden";
        tebrikler = document.querySelector(".sorualani>.tebrikler").style.visibility="visible";
        yeniSoru = document.querySelector("#yeniSoru").style.visibility="visible"; //devam et butonu
        trueButton = document.querySelector("#dogru").style.visibility="hidden";
        falseButton = document.querySelector("#yanlis").style.visibility="hidden";
        score = document.querySelector(".score").innerHTML=score+1;
    }
    else if(kalanSoru.innerHTML==5){
        soru6 = document.querySelector(".sorualani>.alti").style.visibility="hidden";
        maalesef = document.querySelector(".sorualani>.maalesef").style.visibility="visible";
        yeniSoru = document.querySelector("#yeniSoru").style.visibility="visible"; //devam et butonu
        trueButton = document.querySelector("#dogru").style.visibility="hidden";
        falseButton = document.querySelector("#yanlis").style.visibility="hidden";
        yanlishakkontrol();
    }
    else if(kalanSoru.innerHTML==4){
        soru7 = document.querySelector(".sorualani>.yedi").style.visibility="hidden";
        maalesef = document.querySelector(".sorualani>.maalesef").style.visibility="visible";
        yeniSoru = document.querySelector("#yeniSoru").style.visibility="visible"; //devam et butonu
        trueButton = document.querySelector("#dogru").style.visibility="hidden";
        falseButton = document.querySelector("#yanlis").style.visibility="hidden";
        yanlishakkontrol();
    }
    else if(kalanSoru.innerHTML==3){
        soru8 = document.querySelector(".sorualani>.sekiz").style.visibility="hidden";
        maalesef = document.querySelector(".sorualani>.maalesef").style.visibility="visible";
        yeniSoru = document.querySelector("#yeniSoru").style.visibility="visible"; //devam et butonu
        trueButton = document.querySelector("#dogru").style.visibility="hidden";
        falseButton = document.querySelector("#yanlis").style.visibility="hidden";
        yanlishakkontrol();
    }
    else if(kalanSoru.innerHTML==2){
        soru9 = document.querySelector(".sorualani>.dokuz").style.visibility="hidden";
        tebrikler = document.querySelector(".sorualani>.tebrikler").style.visibility="visible";
        yeniSoru = document.querySelector("#yeniSoru").style.visibility="visible"; //devam et butonu
        trueButton = document.querySelector("#dogru").style.visibility="hidden";
        falseButton = document.querySelector("#yanlis").style.visibility="hidden";
        score = document.querySelector(".score").innerHTML=score+1;
    }
    else if(kalanSoru.innerHTML==1){
        soru10 = document.querySelector(".sorualani>.on").style.visibility="hidden";
        tebrikler = document.querySelector(".sorualani>.tebrikler").style.visibility="visible";
        yeniSoru = document.querySelector("#yeniSoru").style.visibility="visible"; //devam et butonu
        trueButton = document.querySelector("#dogru").style.visibility="hidden";
        falseButton = document.querySelector("#yanlis").style.visibility="hidden";
        score = document.querySelector(".score").innerHTML=score+1;
    }
}
function fyanlis(){ // yanlış butonuna basarsa;
    if(kalanSoru.innerHTML==10){
        maalesef = document.querySelector(".sorualani>.maalesef").style.visibility="visible";
        yeniSoru = document.querySelector("#yeniSoru").style.visibility="visible"; //devam et butonu
        sorualani = document.querySelector(".sorualani>.bir").style.visibility="hidden";
        trueButton = document.querySelector("#dogru").style.visibility="hidden";
        falseButton = document.querySelector("#yanlis").style.visibility="hidden";
        soru2 = document.querySelector(".sorualani>.iki").style.visibility="hidden";
        yanlishakkontrol();
    }
    else if(kalanSoru.innerHTML==9){
        sorualani = document.querySelector(".sorualani>.bir").style.visibility="hidden";
        tebrikler = document.querySelector(".sorualani>.tebrikler").style.visibility="visible";
        yeniSoru = document.querySelector("#yeniSoru").style.visibility="visible"; //devam et butonu
        trueButton = document.querySelector("#dogru").style.visibility="hidden";
        falseButton = document.querySelector("#yanlis").style.visibility="hidden";
        soru2 = document.querySelector(".sorualani>.iki").style.visibility="hidden";
        score = document.querySelector(".score").innerHTML=score+1;
    }
    else if(kalanSoru.innerHTML==8){
        tebrikler = document.querySelector(".sorualani>.tebrikler").style.visibility="visible";
        yeniSoru = document.querySelector("#yeniSoru").style.visibility="visible"; //devam et butonu
        trueButton = document.querySelector("#dogru").style.visibility="hidden";
        falseButton = document.querySelector("#yanlis").style.visibility="hidden";
        soru3 = document.querySelector(".sorualani>.uc").style.visibility="hidden";
        score = document.querySelector(".score").innerHTML=score+1;
    }
    else if(kalanSoru.innerHTML==7){
        maalesef = document.querySelector(".sorualani>.maalesef").style.visibility="visible";
        yeniSoru = document.querySelector("#yeniSoru").style.visibility="visible"; //devam et butonu
        sorualani = document.querySelector(".sorualani>.dort").style.visibility="hidden";
        trueButton = document.querySelector("#dogru").style.visibility="hidden";
        falseButton = document.querySelector("#yanlis").style.visibility="hidden";
        soru4 = document.querySelector(".sorualani>.dort").style.visibility="hidden";
        yanlishakkontrol();
    }
    else if(kalanSoru.innerHTML==6){
        maalesef = document.querySelector(".sorualani>.maalesef").style.visibility="visible";
        yeniSoru = document.querySelector("#yeniSoru").style.visibility="visible"; //devam et butonu
        sorualani = document.querySelector(".sorualani>.bir").style.visibility="hidden";
        trueButton = document.querySelector("#dogru").style.visibility="hidden";
        falseButton = document.querySelector("#yanlis").style.visibility="hidden";
        soru5 = document.querySelector(".sorualani>.bes").style.visibility="hidden";
        yanlishakkontrol();
    }
    else if(kalanSoru.innerHTML==5){
        tebrikler = document.querySelector(".sorualani>.tebrikler").style.visibility="visible";
        yeniSoru = document.querySelector("#yeniSoru").style.visibility="visible"; //devam et butonu
        trueButton = document.querySelector("#dogru").style.visibility="hidden";
        falseButton = document.querySelector("#yanlis").style.visibility="hidden";
        soru6 = document.querySelector(".sorualani>.alti").style.visibility="hidden";
        score = document.querySelector(".score").innerHTML=score+1;
    }
    else if(kalanSoru.innerHTML==4){
        tebrikler = document.querySelector(".sorualani>.tebrikler").style.visibility="visible";
        yeniSoru = document.querySelector("#yeniSoru").style.visibility="visible"; //devam et butonu
        trueButton = document.querySelector("#dogru").style.visibility="hidden";
        falseButton = document.querySelector("#yanlis").style.visibility="hidden";
        soru7 = document.querySelector(".sorualani>.yedi").style.visibility="hidden";
        score = document.querySelector(".score").innerHTML=score+1;
    }
    else if(kalanSoru.innerHTML==3){
        tebrikler = document.querySelector(".sorualani>.tebrikler").style.visibility="visible";
        yeniSoru = document.querySelector("#yeniSoru").style.visibility="visible"; //devam et butonu
        trueButton = document.querySelector("#dogru").style.visibility="hidden";
        falseButton = document.querySelector("#yanlis").style.visibility="hidden";
        soru8 = document.querySelector(".sorualani>.sekiz").style.visibility="hidden";
        score = document.querySelector(".score").innerHTML=score+1;
    }
    else if(kalanSoru.innerHTML==2){
        maalesef = document.querySelector(".sorualani>.maalesef").style.visibility="visible";
        yeniSoru = document.querySelector("#yeniSoru").style.visibility="visible"; //devam et butonu
        sorualani = document.querySelector(".sorualani>.bir").style.visibility="hidden";
        trueButton = document.querySelector("#dogru").style.visibility="hidden";
        falseButton = document.querySelector("#yanlis").style.visibility="hidden";
        soru9 = document.querySelector(".sorualani>.dokuz").style.visibility="hidden";
        yanlishakkontrol();
    }
    else if(kalanSoru.innerHTML==1){
        maalesef = document.querySelector(".sorualani>.maalesef").style.visibility="visible";
        yeniSoru = document.querySelector("#yeniSoru").style.visibility="visible"; //devam et butonu
        sorualani = document.querySelector(".sorualani>.bir").style.visibility="hidden";
        trueButton = document.querySelector("#dogru").style.visibility="hidden";
        falseButton = document.querySelector("#yanlis").style.visibility="hidden";
        soru10 = document.querySelector(".sorualani>.on").style.visibility="hidden";
        yanlishakkontrol();
    }

}
