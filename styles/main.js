// $(document).ready(main);

var contador = 1;
var style = document.createElement('style');
var card = document.createElement('style');
var contadormenu = 1;

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
            transition: all 1s ease;
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
                transition: all 0.3s ease;
            }
            `;
            document.head.appendChild(card);
        }
        else if(id=="post3-s"){
            card.innerHTML = `
            #post3-b {
                display: grid;
                transition: all 0.3s ease;
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