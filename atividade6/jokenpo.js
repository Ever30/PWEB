
var nomeJogador;
var escolhaJogador;
var escolhaComputador;
var ganhador;
var x;



nomeJogador = prompt ("Digite seu nome:");
escolhaJogador = prompt ("Digite sua opção: \nPedra = 1\n Papel = 2 \nTesoura =3");

escolhaComputador = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

if (escolhaJogador == 1 && escolhaComputador == 1) {
    ganhador = "Empate";
  } else if (escolhaJogador == 1 && escolhaComputador == 2) {
    ganhador = "Computador";
  } else if (escolhaJogador == 1 && escolhaComputador == 3) {
    ganhador = nomeJogador;
  } else if (escolhaJogador == 2 && escolhaComputador == 1) {
    ganhador = nomeJogador;
  } else if (escolhaJogador == 2 && escolhaComputador == 2) {
    ganhador = "Empate";
  } else if (escolhaJogador == 2 && escolhaComputador == 3) {
    ganhador = "Computador";
  } else if (escolhaJogador == 3 && escolhaComputador == 1) {
    ganhador = "Computador";
  } else if (escolhaJogador == 3 && escolhaComputador == 2) {
    ganhador = nomeJogador;
  } else if (escolhaJogador == 3 && escolhaComputador == 3) {
    ganhador = "Empate";
  }
  
  x = "O ganhador é:  " + (ganhador);
alert(x);