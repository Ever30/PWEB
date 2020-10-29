const  closePath= janelaFechada.jpeg
const  openPath=janelaAberta.png
const  brokenPath=janelaQuebrada.jpeg

documento.addEventListener("DOMContentLoaded" ,function( )  {
    const $img = document.querySelector( "img" )

    $img.src = closePath

    $img.addEventListener("mouseover",( )=>  {
        $img.src=openPath
    } )

    $ img.addEventListener ("mouseout",( )=>  {
        $img.src=closePath
    } )

    $ img.addEventListener ("click",( )=>  {
        $img.src=brokenPath
    } )
} )
