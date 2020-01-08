var numero = '0';
var resultado = '0';
var flag_punto = 0;
var flag_operador = 0;
var temporal;
var flag_negativo = 0;

function mueveON(){
    numero = 0;
    flag_operador=0;
    flag_punto = 0;
    flag_negativo = 0
  document.getElementById('display').innerHTML=numero;
  document.getElementById('on').style="cursor: pointer; background-color: rgb(0, 0, 0);";
}

function Sign(){
  if (flag_negativo == 0){
    if (numero == 0)
    {
       numero = 0;
    }else {
       if(numero[0] == '+'){

           for (var i = 0; i < numero.length; i++) {
             if(numero[i]=='+'){
                temporal =  '-';
             }else {
                temporal = temporal + numero[i];
             }
           }
           numero = '';
           numero = temporal;

       }else if(numero[0] == '-'){


          for (var i = 0; i < numero.length; i++) {
            if(numero[i]=='-'){
               temporal =  '+';
            }else {
               temporal = temporal + numero[i];
            }
          }
          numero = '';
          numero = temporal;
       }else {

         temporal = '';
         temporal = '-' + numero;
         numero = '';
         numero = temporal;

       }
    }
  }
    document.getElementById('display').innerHTML=numero;

  document.getElementById('sign').style="cursor: pointer; background-color: rgb(0, 0, 0);";
}



function muevePunto(){
  if (flag_punto == 0){
    numero = numero + '.';
    document.getElementById('display').innerHTML=numero;
    flag_punto = 1;
  }
  document.getElementById('punto').style="cursor: pointer; background-color: rgb(0, 0, 0);";
}

function mueveCero(){
  document.getElementById('0').style="cursor: pointer; background-color: rgb(0, 0, 0);";
  if (numero == 0)
  {
    numero = 0;
  }else {
    numero = numero + '0';
  }
  flag_operador=0;
  document.getElementById('display').innerHTML=numero;

}

function outboton(){
    document.getElementById('punto').style="cursor: pointer; background-color: rgb(128, 150, 128);";
    document.getElementById('0').style="cursor: pointer; background-color: rgb(128, 150, 128);";
    document.getElementById('1').style="cursor: pointer; background-color: rgb(128, 150, 128);";
    document.getElementById('2').style="cursor: pointer; background-color: rgb(128, 150, 128);";
    document.getElementById('3').style="cursor: pointer; background-color: rgb(128, 150, 128);";
    document.getElementById('4').style="cursor: pointer; background-color: rgb(128, 150, 128);";
    document.getElementById('5').style="cursor: pointer; background-color: rgb(128, 150, 128);";
    document.getElementById('6').style="cursor: pointer; background-color: rgb(128, 150, 128);";
    document.getElementById('7').style="cursor: pointer; background-color: rgb(128, 150, 128);";
    document.getElementById('8').style="cursor: pointer; background-color: rgb(128, 150, 128);";
    document.getElementById('9').style="cursor: pointer; background-color: rgb(128, 150, 128);";
    document.getElementById('dividido').style="cursor: pointer; background-color: rgb(128, 150, 128);";
    document.getElementById('por').style="cursor: pointer; background-color: rgb(128, 150, 128);";
    document.getElementById('menos').style="cursor: pointer; background-color: rgb(128, 150, 128);";
    document.getElementById('mas').style="cursor: pointer; background-color: rgb(128, 150, 128);";
    document.getElementById('igual').style="cursor: pointer; background-color: rgb(128, 150, 128);";
    document.getElementById('on').style="cursor: pointer; background-color: rgb(128, 150, 128);";
    document.getElementById('raiz').style="cursor: pointer; background-color: rgb(128, 150, 128);";
    document.getElementById('sign').style="cursor: pointer; background-color: rgb(128, 150, 128);";
}


function mueveUno(){
  document.getElementById('1').style="cursor: pointer; background-color: rgb(0, 0, 0);";
  if (numero == 0)
  {
    numero = '1';
  }else {
    numero = numero + '1';
  }
  flag_operador=0;
  document.getElementById('display').innerHTML=numero;

}

function mueveDos(){
    document.getElementById('2').style="cursor: pointer; background-color: rgb(0, 0, 0);";
    if (numero == 0)
    {
      numero = '2';
    }else {
      numero = numero + '2';
    }
    flag_operador=0;
    document.getElementById('display').innerHTML=numero;
}

function mueveTres(){
    if (numero == 0)
    {
      numero = '3';
    }else {
      numero = numero + '3';
    }
    flag_operador=0;
    document.getElementById('display').innerHTML=numero;
    document.getElementById('3').style="cursor: pointer; background-color: rgb(0, 0, 0);";
}

function mueveCuatro(){
    if (numero == 0)
    {
      numero = '4';
    }else {
      numero = numero + '4';
    }
    flag_operador=0;
    document.getElementById('4').style="cursor: pointer; background-color: rgb(0, 0, 0);";
    document.getElementById('display').innerHTML=numero;
}

function mueveCinco(){
    if (numero == 0)
    {
      numero = '5';
    }else {
      numero = numero + '5';
    }
    flag_operador=0;
    document.getElementById('5').style="cursor: pointer; background-color: rgb(0, 0, 0);";
    document.getElementById('display').innerHTML=numero;
}

function mueveSeis(){
  if (numero == 0)
  {
    numero = '6';
  }else {
    numero = numero + '6';
  }
  flag_operador=0;
  document.getElementById('6').style="cursor: pointer; background-color: rgb(0, 0, 0);";
  document.getElementById('display').innerHTML=numero;
}

function mueveSiete(){
  if (numero == 0)
  {
    numero = '7';
  }else {
    numero = numero + '7';
  }
  flag_operador=0;
  document.getElementById('7').style="cursor: pointer; background-color: rgb(0, 0, 0);";
  document.getElementById('display').innerHTML=numero;
}

function mueveOcho(){
    if (numero == 0)
    {
      numero = '8';
    }else {
      numero = numero + '8';
    }
    flag_operador=0;
    document.getElementById('8').style="cursor: pointer; background-color: rgb(0, 0, 0);";
    document.getElementById('display').innerHTML=numero;
}

function mueveNueve(){
    if (numero == 0)
    {
      numero = '9';
    }else {
      numero = numero + '9';
    }
    flag_operador=0;
    document.getElementById('9').style="cursor: pointer; background-color: rgb(0, 0, 0);";
    document.getElementById('display').innerHTML=numero;

}

function SignoSuma(){
  flag_punto = 0;
  if (flag_operador==0){
    if (numero == 0)
    {
       numero = 0;
    }else {
       numero = numero + '+';
    }
    flag_operador=1;
    document.getElementById('display').innerHTML=numero;
  }
  flag_negativo = 1;
  document.getElementById('mas').style="cursor: pointer; background-color: rgb(0, 0, 0);";
}

function SignoResta(){
    flag_punto = 0;
    if(flag_operador==0){
      if (numero == 0)
      {
         numero = 0;
      }else {
         numero = numero + '-';
      }

      document.getElementById('display').innerHTML=numero;
      flag_operador=1;
    }
    flag_negativo = 1;
    document.getElementById('menos').style="cursor: pointer; background-color: rgb(0, 0, 0);";
}

function SignoMultiplicacion(){
    flag_punto = 0;
    if(flag_operador==0){
      if (numero == 0)
      {
         numero = 0;
      }else {
         numero = numero + '*';
      }
      document.getElementById('display').innerHTML=numero;
      flag_operador=1;
    }
    flag_negativo = 1;
    document.getElementById('por').style="cursor: pointer; background-color: rgb(0, 0, 0);";
}

function signoDivision(){
    flag_punto = 0;
    if(flag_operador==0){
      if (numero == 0)
      {
         numero = 0;
      }else {
         numero = numero + '/';
      }
      flag_operador=1;
      document.getElementById('display').innerHTML=numero;
    }
    flag_negativo = 1;
    document.getElementById('dividido').style="cursor: pointer; background-color: rgb(0, 0, 0);";
}

function signoRaizCuadrada(){
    flag_punto = 0;
    if (numero == 0)
    {
       numero = 0;
    }else {
       numero = numero + '√';
    }
    flag_operador=1;
    flag_negativo = 1;
    document.getElementById('display').innerHTML=numero;
    document.getElementById('raiz').style="cursor: pointer; background-color: rgb(0, 0, 0);";
}


function signoIgual(){
  try {
    resultado = eval(numero);

  } catch (e) {
      alert("operacion no aceptada");
  }
  numero = resultado;
  flag_operador=0;
  flag_punto = 0;
  flag_negativo = 0;
  document.getElementById('display').innerHTML=resultado;
  document.getElementById('igual').style="cursor: pointer; background-color: rgb(0, 0, 0);";
}

document.getElementById('punto').onclick=muevePunto;
document.getElementById('0').onclick=mueveCero;
document.getElementById('1').onclick=mueveUno;
document.getElementById('2').onclick=mueveDos;
document.getElementById('3').onclick=mueveTres;
document.getElementById('4').onclick=mueveCuatro;
document.getElementById('5').onclick=mueveCinco;
document.getElementById('6').onclick=mueveSeis;
document.getElementById('7').onclick=mueveSiete;
document.getElementById('8').onclick=mueveOcho;
document.getElementById('9').onclick=mueveNueve;
document.getElementById('dividido').onclick=signoDivision;
document.getElementById('por').onclick=SignoMultiplicacion;
document.getElementById('menos').onclick=SignoResta;
document.getElementById('mas').onclick=SignoSuma;
document.getElementById('igual').onclick=signoIgual;
document.getElementById('on').onclick=mueveON;
document.getElementById('raiz').onclick=signoRaizCuadrada;
document.getElementById('sign').onclick=Sign;



document.getElementById('punto').onmouseout=outboton;
document.getElementById('0').onmouseout=outboton;
document.getElementById('1').onmouseout=outboton;
document.getElementById('2').onmouseout=outboton;
document.getElementById('3').onmouseout=outboton;
document.getElementById('4').onmouseout=outboton;
document.getElementById('5').onmouseout=outboton;
document.getElementById('6').onmouseout=outboton;
document.getElementById('7').onmouseout=outboton;
document.getElementById('8').onmouseout=outboton;
document.getElementById('9').onmouseout=outboton;
document.getElementById('dividido').onmouseout=outboton;
document.getElementById('por').onmouseout=outboton;
document.getElementById('menos').onmouseout=outboton;
document.getElementById('mas').onmouseout=outboton;
document.getElementById('igual').onmouseout=outboton;
document.getElementById('on').onmouseout=outboton;
document.getElementById('raiz').onmouseout=outboton;
document.getElementById('sign').onmouseout=outboton;



//ondblclick
//onmouseover
//onmouseout
