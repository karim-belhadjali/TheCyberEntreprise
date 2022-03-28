
/*
DOCUMENT READY
*/
docReady(function() {



    // START Logo Animation
    var logoLink = document.getElementById("logo_link");
    var interiorEye = document.getElementsByClassName("interior_eye")[0];

    logoLink.addEventListener("mouseenter", function( event ){

        var tl = anime.timeline({
                
        });

        tl
        .add({
            targets: interiorEye,
            rotate: 360,
            duration: 1300,
            loop: false,
            elasticity: 600,
            easing: 'easeOutElastic',
        })
        .add({
            targets: interiorEye,
            delay : 1300,
            rotate: 0,
            duration: 0,
        });
   

    });

    // End Logo Animation


    // START Buy On Uniswap Animation

    let linkElem = document.getElementsByClassName('uniswap_btn')[0].querySelector('a');

    linkElem.addEventListener("mouseenter", function( event ) {
            
        noiseUniswap();
    }, false);

    function noiseUniswap(){
        
        let span1 = linkElem.querySelector('span.text_p1');
        let span2 = linkElem.querySelector('span.text_p2');
        let span3 = linkElem.querySelector('span.text_p3');
    
        animateTl1(span1);
        animateTl2(span2);
        animateTl1(span3);
    }






    // END of Buy On Uniswap Animation

 

    // START Menu Buttons
    var liEl = document.querySelectorAll('ul.menu_container > li');

    for (var i = 0; i < liEl.length; i++) {
        var elem = liEl[i];
        var elemText = elem.textContent;

        addBracket(elem, "left");
        addBracket(elem, "right");


        makeTextSpans(elem, elemText);



        elem.addEventListener("mouseenter", function( event ) {

            let bracketLeft = this.querySelector('.bracket_left');
            let bracketRight = this.querySelector('.bracket_right');
            var thisElem = this;
            anime({
                targets: bracketLeft,
                translateX: 20,
                duration: 400
            });

            anime({
                targets: bracketRight,
                translateX: -20,
                duration: 400,
            });

            changeBackgroundToWhite(thisElem);

        }, false);


        elem.addEventListener("mouseleave", function( event ) {

            let bracketLeft = this.querySelector('.bracket_left');
            let bracketRight = this.querySelector('.bracket_right');
            var thisElem = this;
            anime({
                targets: bracketLeft,
                translateX: 0,
                duration: 400
            });

            anime({
                targets: bracketRight,
                translateX: 0,
                duration: 400
            });
            changeBackgroundToNormal(thisElem);
        }, false);


    }

  
    function changeBackgroundToWhite(elem){

        let linkElem = elem.querySelector('a');

        let span1 = linkElem.querySelector('span.indigo_1');
        let span2 = linkElem.querySelector('span.indigo_2');
        let span3 = linkElem.querySelector('span.indigo_3');


        anime({
            targets: span1,
            background: '#FFF',
            color : "#222431",
            duration: 500,
            easing: 'linear'
        });
        anime({
            targets: span2,
            background: '#FFF',
            color : "#222431",
            duration: 500,
            easing: 'linear'
        });
        anime({
            targets: span3,
            background: '#FFF',
            color : "#222431",
            duration: 500,
            easing: 'linear',
            complete: function(anim) {
                

                animateTl1(span1);
                animateTl2(span2);
                animateTl1(span3);
            }
        });
        

    }

    function changeBackgroundToNormal(elem){

        let linkElem = elem.querySelector('a');

        let span1 = linkElem.querySelector('span.indigo_1');
        let span2 = linkElem.querySelector('span.indigo_2');
        let span3 = linkElem.querySelector('span.indigo_3');


        anime({
            targets: span1,
            background: '#222431',
            color : '#fff',
            duration: 500,
            easing: 'linear'
        });
        anime({
            targets: span2,
            background: '#222431',
            color : '#fff',
            duration: 500,
            easing: 'linear'
        });
        anime({
            targets: span3,
            background: '#222431',
            color : '#fff',
            duration: 500,
            easing: 'linear'
        });
    }


    // END of Menu Buttons

  

});



// START Document Ready
function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
} 
// END of Document Ready




// START Noise Animation
function animateTl1(span){
    var tl = anime.timeline({
                
    });
    
    tl
    .add({
    targets: span,
    translateX: 3,
    duration : 50
    })
    .add({
        targets: span,
        translateX: 0,
        duration : 50
    })
    .add({
        targets: span,
        translateX: 2,
        duration : 50
    })
    .add({
        targets: span,
        translateX: 0,
        duration : 50
    });
}


function animateTl2(span){
    var tl = anime.timeline({
                
    });
    
    tl
    .add({
    targets: span,
    translateX: -2,
    duration : 50
    })
    .add({
        targets: span,
        translateX: 0,
        duration : 50
    })
    .add({
        targets: span,
        translateX: -1,
        duration : 50
    })
    .add({
        targets: span,
        translateX: 0,
        duration : 50
    });
}
// END of Noise Animation



// START Create 3 identical Span Elements
function makeTextSpans(elem, elemText){

    let linkElem = elem.querySelector('a');

    linkElem.innerHTML = "";


    let content1 = document.createTextNode(elemText);
    let content2 = document.createTextNode(elemText);
    let content3 = document.createTextNode(elemText);

    // create indigo
    let indigo1 = document.createElement("span");
    indigo1.classList.add("indigo");
    indigo1.classList.add("indigo_1");
    indigo1.appendChild(content1);

    let indigo2 = document.createElement("span");
    indigo2.classList.add("indigo");
    indigo2.classList.add("indigo_2");
    indigo2.appendChild(content2);

    let indigo3 = document.createElement("span");
    indigo3.classList.add("indigo");
    indigo3.classList.add("indigo_3");
    indigo3.appendChild(content3);


    

    linkElem.append(indigo1);
    linkElem.append(indigo2);
    linkElem.append(indigo3);
}
// END of Create 3 identical Span Elements



// START Noise Animation
function animateTl1(span){
    var tl = anime.timeline({
                
    });
    
    tl
    .add({
    targets: span,
    translateX: 3,
    duration : 50
    })
    .add({
        targets: span,
        translateX: 0,
        duration : 50
    })
    .add({
        targets: span,
        translateX: 2,
        duration : 50
    })
    .add({
        targets: span,
        translateX: 0,
        duration : 50
    });
}


function animateTl2(span){
    var tl = anime.timeline({
                
    });
    
    tl
    .add({
    targets: span,
    translateX: -2,
    duration : 50
    })
    .add({
        targets: span,
        translateX: 0,
        duration : 50
    })
    .add({
        targets: span,
        translateX: -1,
        duration : 50
    })
    .add({
        targets: span,
        translateX: 0,
        duration : 50
    });
}
// END of Noise Animation

// START Add Bracket
function addBracket(elem, position){
        
    // create bracket
    let bracket = document.createElement("span");
    bracket.classList.add("brackets");
    bracket.classList.add("bracket_" + position);
    let content;
    if(position == "left"){
        content = document.createTextNode("[");
    }


    if(position == "right"){
        content = document.createTextNode("]");
    }

    bracket.appendChild(content);
    elem.append(bracket);

}
// END of Add Bracket

