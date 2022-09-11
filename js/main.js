let contador = 1;
let style = document.createElement('style');
let card = document.createElement('style');

//Al hacer click en botones especificos proyecta las tarjetas ampliadas y hace un efecto blur en el cuerpo de la pagina
function detectId(id) {
    if(contador == 1){
        style.innerHTML = `
        body {
            white-space:unset;
            overflow-y: hidden;
        }
        .glass {
            filter: blur(5px);
            pointer-events: none;
            transition: all 0.3s ease;
        }
        .post-b article p{
            overflow-y: visible;
            white-space: initial;
        }
        `;
        document.head.appendChild(style);
        contador = 0;
        if(id=="post1-s"){
            card.innerHTML = `
            #post1-b {
                display: grid;
            }
            `;
            document.head.appendChild(card);
        }
        else if(id=="post2-s"){
            card.innerHTML = `
            #post2-b {
                display: grid;
            }
            `;
            document.head.appendChild(card);
        }
        else if(id=="post3-s"){
            card.innerHTML = `
            #post3-b {
                display: grid;
            }
            `;
            document.head.appendChild(card);
        }
    }else{
        contador = 1;
        style.innerHTML = `
        body {
        filter: none;
        transition: all 0.3s ease;
        }
        `;
        document.head.appendChild(style);
        card.innerHTML = `
            #post1-b, #post2-b, #post3-b {
                display: none;
                transition: all 0.3s ease;
            }
            `;
        document.head.appendChild(card);
    }
}