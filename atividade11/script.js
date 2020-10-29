var  texto  =  documento . getElementById ( "texto" ) ;
var  cbxCapital  =  document . getElementById ( "capital" ) ;
var  cbxSmall  =  document . getElementById ( "pequeno" ) ;


function  mudarTexto ( ) {
    if ( cbxCapital . verificado ) {
        texto . valor  =  texto . valor . toUpperCase ( ) ;
    } else  if ( cbxSmall . verificado ) {
        texto . valor  =  texto . valor . toLowerCase ( ) ;
    }
}