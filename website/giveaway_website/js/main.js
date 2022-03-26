
/*
DOCUMENT READY
*/
docReady(function() {


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

 

    // START Hidden

    // hero point of entry
    var lettersArray = ["C", "Y", "B", "R"];

    shuffle(lettersArray);
    
    var correctSecret = false;
    var eventAdd = false;

    let userArray = [];


    var entryBox = document.getElementsByClassName('about_project');

    // console.log(entryBox[0].offsetLeft + 90);
    // console.log(entryBox[0].offsetTop + 110);

    entryBox[0].addEventListener('mouseenter', e => {
        var dir = determineDirection(entryBox[0], {x: e.pageX, y: e.pageY});


    

        let correctText = "CYBR";

        let boxSelector = document.getElementsByClassName("woop_btn");
        boxSelector = boxSelector[0];

        boxSelector.classList.add("woop_white");

        if(!correctSecret){
            userArray.push(lettersArray[dir]);

            if(correctText.substring(0, userArray.length) != userArray.join('')){
                userArray = [];
                userArray.push(lettersArray[dir]);
            }
        }

        
        if(userArray.join('') == correctText){
            correctSecret = true;
            boxSelector.classList.add("woop_active");

            if(!eventAdd){
                
                boxSelector.addEventListener("click", function(){

                    anime({
                        targets: boxSelector,        
                        opacity: '0',
                        duration: 100,
                        easing: 'easeInOutQuad',
                        complete: function() {
                            boxSelector.style.display = 'none';
                        },
                    });



                    var nftHolder = document.getElementsByClassName("nft_holder");
                    nftHolder = nftHolder[0];

                    nftHolder.classList.add("nft_holder_animate");


                    animateWoops();

                });
                eventAdd = true;
            }

        }

            // write user array in show off div
            boxSelector.innerText = userArray.join('');
    });


    // END Hidden

  

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


// START Animate Woops

function animateWoops(){
    var woop1 = document.getElementsByClassName("woop1");
    woop1 = woop1[0];

    var woop2 = document.getElementsByClassName("woop2");
    woop2 = woop2[0];

    var tl = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
    });


    tl
    .add({
        targets: woop1,
        duration: 1000
    })
    .add({
        targets: woop1,
        translateX: 25,
        translateY: 25,
        rotate : -14,
        opacity : 1,
        zoom : 1,
        duration: 800
    })
    .add({
        targets: woop1,
        duration: 300
    })
    .add({
        targets: woop1,
        opacity : 0,
        duration: 300
    })
    .add({
        targets: woop1,
        duration: 300
    })
    .add({
        targets: woop2,
        translateX: 40,
        translateY: 61,
        rotate : 22,
        opacity : 1,
        zoom : 1,
        duration: 800
    })
    .add({
        targets: woop2,
        duration: 300
    })
    .add({
        targets: woop2,
        opacity : 0,
        duration: 300
    })
    .add({
        targets: woop2,
        duration: 300
    });



}

// END Animate Woops


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


    // determine point of entry
    function determineDirection(el, pos){
        var w = el.offsetWidth,
            h = el.offsetHeight,
            x = (pos.x - el.offsetLeft - 90 - (w/2)) * (w > h ? (h/w) : 1),
            y = (pos.y - el.offsetTop - 110  - (h/2)) * (h > w ? (w/h) : 1);

  


        return Math.round((((Math.atan2(y,x) * (180/Math.PI)) + 180)) / 90 + 3) % 4;



    }



    // huffles array

    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

