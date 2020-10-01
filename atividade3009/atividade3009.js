var i,idade,sexo, opiniao,x;
var qtdpessimo,qtdotimobom,soma =0;



for(i=0;i<45;i++)
{
idade = prompt ("Informe a  idade da pessoa" );

sexo = prompt("informe o sexo");	

opiniao = prompt("informe sua opinião");

soma += parseInt(idade);

	if(opiniao == 1){
		qtdpessimo += 1;
		
	}
	
	if(opiniao == 4 || opiniao == 3) {
		qtdotimobom +=1;
		
	}
	if(sexo == "m" || "M"){
		mullher += 1
	}
	else{
		homem += 1;
	}

}
x= "A média das idades é:    " +(soma/45)  + "\nA quantidade de pessoas que votou péssimo é: " + (qtdpessimo);  + "\n A Porcentagem de pessoas que votaram Bom ou  ótimo é:"  + (qtdotimobom)*2,22 + "\n A quantidade de homens é: " + (homens) + "\n Aquantidade de Mulheres é:" + (mullher);

alert(x);