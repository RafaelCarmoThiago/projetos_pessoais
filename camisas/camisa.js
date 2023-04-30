var camisona = 1;
var cor = "vermelho";

function vermelho(){
    document.getElementById('circulo_vermelho').style.borderColor = "#D02D2D";
    document.getElementById('circulo_azul').style.borderColor = 'transparent';
    document.getElementById('circulo_verde').style.borderColor = 'transparent';
    document.getElementById('circulo_amarelo').style.borderColor = 'transparent';
    document.getElementById('circulo_rosa').style.borderColor = 'transparent';

    cor = "vermelho";
    document.getElementById('mini_camisa1').src = "img/camisa1_vermelho.png";
    document.getElementById('mini_camisa2').src = "img/camisa2_vermelho.png";
    document.getElementById('mini_camisa3').src = "img/camisa3_vermelho.png";

    if (camisona == 1){
        document.getElementById('camisona').src = "img/camisa1_vermelho.png";
    }else if(camisona == 2){
        document.getElementById('camisona').src = "img/camisa2_vermelho.png";
    }
    else{
        document.getElementById('camisona').src = "img/camisa3_vermelho.png";
    }
}

function azul(){
    document.getElementById('circulo_azul').style.borderColor = "#4D89FF";
    document.getElementById('circulo_vermelho').style.borderColor = 'transparent';
    document.getElementById('circulo_verde').style.borderColor = 'transparent';
    document.getElementById('circulo_amarelo').style.borderColor = 'transparent';
    document.getElementById('circulo_rosa').style.borderColor = 'transparent';

    cor = "azul";
    document.getElementById('mini_camisa1').src = "img/camisa1_azul.png";
    document.getElementById('mini_camisa2').src = "img/camisa2_azul.png";
    document.getElementById('mini_camisa3').src = "img/camisa3_azul.png";

    if (camisona == 1){
        document.getElementById('camisona').src = "img/camisa1_azul.png";
    }else if(camisona == 2){
        document.getElementById('camisona').src = "img/camisa2_azul.png";
    }
    else{
        document.getElementById('camisona').src = "img/camisa3_azul.png";
    }
}

function verde(){
    document.getElementById('circulo_verde').style.borderColor = '#18BF1F';
    document.getElementById('circulo_vermelho').style.borderColor = 'transparent';
    document.getElementById('circulo_azul').style.borderColor = 'transparent';
    document.getElementById('circulo_amarelo').style.borderColor = 'transparent';
    document.getElementById('circulo_rosa').style.borderColor = 'transparent';

    cor = "verde";
    document.getElementById('mini_camisa1').src = "img/camisa1_verde.png";
    document.getElementById('mini_camisa2').src = "img/camisa2_verde.png";
    document.getElementById('mini_camisa3').src = "img/camisa3_verde.png";

    if (camisona == 1){
        document.getElementById('camisona').src = "img/camisa1_verde.png";
    }else if(camisona == 2){
        document.getElementById('camisona').src = "img/camisa2_verde.png";
    }
    else{
        document.getElementById('camisona').src = "img/camisa3_verde.png";
    }
}


function amarelo(){
    document.getElementById('circulo_amarelo').style.borderColor = '#EEF239';
    document.getElementById('circulo_vermelho').style.borderColor = 'transparent';
    document.getElementById('circulo_azul').style.borderColor = 'transparent';
    document.getElementById('circulo_verde').style.borderColor = 'transparent';
    document.getElementById('circulo_rosa').style.borderColor = 'transparent';

    cor = "amarelo";
    document.getElementById('mini_camisa1').src = "img/camisa1_amarelo.png";
    document.getElementById('mini_camisa2').src = "img/camisa2_amarelo.png";
    document.getElementById('mini_camisa3').src = "img/camisa3_amarelo.png";

    if (camisona == 1){
        document.getElementById('camisona').src = "img/camisa1_amarelo.png";
    }else if(camisona == 2){
        document.getElementById('camisona').src = "img/camisa2_amarelo.png";
    }
    else{
        document.getElementById('camisona').src = "img/camisa3_amarelo.png";
    }
}

function rosa(){
    document.getElementById('circulo_rosa').style.borderColor = '#F718D3';
    document.getElementById('circulo_vermelho').style.borderColor = 'transparent';
    document.getElementById('circulo_azul').style.borderColor = 'transparent';
    document.getElementById('circulo_verde').style.borderColor = 'transparent';
    document.getElementById('circulo_amarelo').style.borderColor = 'transparent';

    cor = "rosa";
    document.getElementById('mini_camisa1').src = "img/camisa1_rosa.png";
    document.getElementById('mini_camisa2').src = "img/camisa2_rosa.png";
    document.getElementById('mini_camisa3').src = "img/camisa3_rosa.png";

    if (camisona == 1){
        document.getElementById('camisona').src = "img/camisa1_rosa.png";
    }else if(camisona == 2){
        document.getElementById('camisona').src = "img/camisa2_rosa.png";
    }
    else{
        document.getElementById('camisona').src = "img/camisa3_rosa.png";
    }
}

function mini_camisa1(){
    camisona = 1;
    document.getElementById('mini_camisa1').style.borderColor = '#000000';
    document.getElementById('mini_camisa2').style.borderColor = 'transparent';
    document.getElementById('mini_camisa3').style.borderColor = 'transparent';

    if (cor == "vermelho"){
        document.getElementById('camisona').src = "img/camisa1_vermelho.png";
    }
    if (cor == "azul"){
        document.getElementById('camisona').src = "img/camisa1_azul.png";
    }
    if (cor == "verde"){
        document.getElementById('camisona').src = "img/camisa1_verde.png";
    }
    if (cor == "amarelo"){
        document.getElementById('camisona').src = "img/camisa1_amarelo.png";
    }
    if (cor == "rosa"){
        document.getElementById('camisona').src = "img/camisa1_rosa.png";
    }
}


function mini_camisa2(){
    camisona = 2;
    document.getElementById('mini_camisa1').style.borderColor = 'transparent';
    document.getElementById('mini_camisa2').style.borderColor = '#000000';
    document.getElementById('mini_camisa3').style.borderColor = 'transparent';

    if (cor == "vermelho"){
        document.getElementById('camisona').src = "img/camisa2_vermelho.png";
    }
    if (cor == "azul"){
        document.getElementById('camisona').src = "img/camisa2_azul.png";
    }
    if (cor == "verde"){
        document.getElementById('camisona').src = "img/camisa2_verde.png";
    }
    if (cor == "amarelo"){
        document.getElementById('camisona').src = "img/camisa2_amarelo.png";
    }
    if (cor == "rosa"){
        document.getElementById('camisona').src = "img/camisa2_rosa.png";
    }
}

function mini_camisa3(){
    camisona = 3;
    document.getElementById('mini_camisa1').style.borderColor = 'transparent';
    document.getElementById('mini_camisa2').style.borderColor = 'transparent';
    document.getElementById('mini_camisa3').style.borderColor = '#000000';

    if (cor == "vermelho"){
        document.getElementById('camisona').src = "img/camisa3_vermelho.png";
    }
    if (cor == "azul"){
        document.getElementById('camisona').src = "img/camisa3_azul.png";
    }
    if (cor == "verde"){
        document.getElementById('camisona').src = "img/camisa3_verde.png";
    }
    if (cor == "amarelo"){
        document.getElementById('camisona').src = "img/camisa3_amarelo.png";
    }
    if (cor == "rosa"){
        document.getElementById('camisona').src = "img/camisa3_rosa.png";
    }
}

function seta_esq(){
    if (camisona == 1){
        camisona = 3;
        document.getElementById('mini_camisa1').style.borderColor = 'transparent';
        document.getElementById('mini_camisa2').style.borderColor = 'transparent';
        document.getElementById('mini_camisa3').style.borderColor = '#000000'; 

        if (cor == "vermelho"){
            document.getElementById('camisona').src = "img/camisa3_vermelho.png";
        }
        if (cor == "azul"){
            document.getElementById('camisona').src = "img/camisa3_azul.png";
        }
        if (cor == "verde"){
            document.getElementById('camisona').src = "img/camisa3_verde.png";
        }
        if (cor == "amarelo"){
            document.getElementById('camisona').src = "img/camisa3_amarelo.png";
        }
        if (cor == "rosa"){
            document.getElementById('camisona').src = "img/camisa3_rosa.png";
        }
    }
    else if (camisona == 2){
        camisona = 1;
        document.getElementById('mini_camisa1').style.borderColor = '#000000';
        document.getElementById('mini_camisa2').style.borderColor = 'transparent';
        document.getElementById('mini_camisa3').style.borderColor = 'transparent';

        if (cor == "vermelho"){
            document.getElementById('camisona').src = "img/camisa1_vermelho.png";
        }
        if (cor == "azul"){
            document.getElementById('camisona').src = "img/camisa1_azul.png";
        }
        if (cor == "verde"){
            document.getElementById('camisona').src = "img/camisa1_verde.png";
        }
        if (cor == "amarelo"){
            document.getElementById('camisona').src = "img/camisa1_amarelo.png";
        }
        if (cor == "rosa"){
            document.getElementById('camisona').src = "img/camisa1_rosa.png";
        }
    }
    else{
        camisona = 2;
        document.getElementById('mini_camisa1').style.borderColor = 'transparent';
        document.getElementById('mini_camisa2').style.borderColor = '#000000';
        document.getElementById('mini_camisa3').style.borderColor = 'transparent';
        if (cor == "vermelho"){
            document.getElementById('camisona').src = "img/camisa2_vermelho.png";
        }
        if (cor == "azul"){
            document.getElementById('camisona').src = "img/camisa2_azul.png";
        }
        if (cor == "verde"){
            document.getElementById('camisona').src = "img/camisa2_verde.png";
        }
        if (cor == "amarelo"){
            document.getElementById('camisona').src = "img/camisa2_amarelo.png";
        }
        if (cor == "rosa"){
            document.getElementById('camisona').src = "img/camisa2_rosa.png";
        }
    }
}

function seta_dir(){
    if (camisona == 1){
        camisona = 2;
        document.getElementById('mini_camisa1').style.borderColor = 'transparent';
        document.getElementById('mini_camisa2').style.borderColor = '#000000';
        document.getElementById('mini_camisa3').style.borderColor = 'transparent';

        if (cor == "vermelho"){
            document.getElementById('camisona').src = "img/camisa2_vermelho.png";
        }
        if (cor == "azul"){
            document.getElementById('camisona').src = "img/camisa2_azul.png";
        }
        if (cor == "verde"){
            document.getElementById('camisona').src = "img/camisa2_verde.png";
        }
        if (cor == "amarelo"){
            document.getElementById('camisona').src = "img/camisa2_amarelo.png";
        }
        if (cor == "rosa"){
            document.getElementById('camisona').src = "img/camisa2_rosa.png";
        }
    }
    else if (camisona == 2){
        camisona = 3;
        document.getElementById('mini_camisa1').style.borderColor = 'transparent';
        document.getElementById('mini_camisa2').style.borderColor = 'transparent';
        document.getElementById('mini_camisa3').style.borderColor = '#000000'; 

        if (cor == "vermelho"){
            document.getElementById('camisona').src = "img/camisa3_vermelho.png";
        }
        if (cor == "azul"){
            document.getElementById('camisona').src = "img/camisa3_azul.png";
        }
        if (cor == "verde"){
            document.getElementById('camisona').src = "img/camisa3_verde.png";
        }
        if (cor == "amarelo"){
            document.getElementById('camisona').src = "img/camisa3_amarelo.png";
        }
        if (cor == "rosa"){
            document.getElementById('camisona').src = "img/camisa3_rosa.png";
        }   
    }
    else{
        camisona = 1;
        document.getElementById('mini_camisa1').style.borderColor = '#000000';
        document.getElementById('mini_camisa2').style.borderColor = 'transparent';
        document.getElementById('mini_camisa3').style.borderColor = 'transparent';
        
        if (cor == "vermelho"){
            document.getElementById('camisona').src = "img/camisa1_vermelho.png";
        }
        if (cor == "azul"){
            document.getElementById('camisona').src = "img/camisa1_azul.png";
        }
        if (cor == "verde"){
            document.getElementById('camisona').src = "img/camisa1_verde.png";
        }
        if (cor == "amarelo"){
            document.getElementById('camisona').src = "img/camisa1_amarelo.png";
        }
        if (cor == "rosa"){
            document.getElementById('camisona').src = "img/camisa1_rosa.png";
        }
    }
}
