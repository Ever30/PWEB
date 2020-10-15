function  Maior ( )  {
	var  numero1  =  documento . getElementById ( "numero1" ) ;
	var  numero2  =  documento . getElementById ( "numero2" ) ;
	var  numero3  =  documento . getElementById ( "numero3" ) ;

	maiorNumero ( numero1 . valor ,  numero2 . valor ,  numero3 . valor ) ;

	function  maiorNumero ( numero1 ,  numero2 ,  numero3 )  {
		var  arrayNumeros  =  [ numero1 ,  numero2 ,  numero3 ] ;

		arrayNumeros . classificar ( ( a ,  b )  =>  a  -  b ) ;

		alert ( "O maior número é:" +  arrayNumeros [ arrayNumeros . length  -  1 ] ) ;
	}

}

