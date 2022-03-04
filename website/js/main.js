
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

    // START Announcements Animation

    function animateAnnouncements(){
        let announcements = document.getElementsByClassName('announcements');

        let announcementsWidth = announcements[0].offsetWidth;
        let announcementsSpanWidth = announcements[0].getElementsByTagName("span")[0].offsetWidth;
    
    
        let speed = 70; // pixels per second
        let loopDuration = (announcementsSpanWidth / speed * 1000) + (announcementsWidth / speed *  1000);
    
    
        let announcementsAnim = anime({
            targets: 'div.announcements > span',
            easing: 'linear',
            loop: true,
            duration: loopDuration,
            translateX: [announcementsWidth, "-" + announcementsSpanWidth],
        });
    
    
    
        
        announcements[0].addEventListener("mouseenter", function(){
            announcementsAnim.pause();
        });
    
        announcements[0].addEventListener("mouseleave", function(){
            announcementsAnim.play();
        });
    }
    
    animateAnnouncements();
    // END of Announcements Animation
 

    // START Utility Bar Animation

    function animateUtility(){
        let utility = document.getElementsByClassName('info_bar');
        let utilityWidth = utility[0].offsetWidth;
        let utilitySpanWidth = utility[0].getElementsByTagName("div")[0].offsetWidth;
    

        let speed = 70; // pixels per second
        let loopDuration = (utilitySpanWidth / speed * 1000) - (utilityWidth / speed *  1000);


        let maxTranslate = utilityWidth - utilitySpanWidth;


        let utilityAnim = anime({
            targets: 'div.info_bar > div',
            easing: 'linear',
            loop: true,
            duration: loopDuration,
            direction: 'alternate',
            translateX: [0, maxTranslate],
        });
    
        utility[0].addEventListener("mouseenter", function(){
            utilityAnim.pause();
        });
    
        utility[0].addEventListener("mouseleave", function(){
            utilityAnim.play();
        });
    }

    animateUtility();
    
    // END of Utility Bar Animation


    // START Language Animation
    function animateLanguageButton(){
        let button = document.getElementsByClassName("language_btn")[0];
        let buttonText = button.textContent;

        addBracket(button, "left");
        addBracket(button, "right");

        makeTextSpans(button, buttonText);
        

        button.addEventListener("mouseenter", function(){
            let span1 = button.querySelector('span.indigo_1');
            let span2 = button.querySelector('span.indigo_2');
            let span3 = button.querySelector('span.indigo_3');
            
            animateTl1(span1);
            animateTl2(span2);
            animateTl1(span3);
        });


        let buttonMask = document.getElementsByClassName("language_mask")[0];
        buttonMask.addEventListener("mouseenter", function(){
            let span1 = button.querySelector('span.indigo_1');
            let span2 = button.querySelector('span.indigo_2');
            let span3 = button.querySelector('span.indigo_3');
            
            animateTl1(span1);
            animateTl2(span2);
            animateTl1(span3);
        });
       

    }

    animateLanguageButton();
    // END of Language Animation



    // START Create Fixed Bot Buttons Animation
    function createFixedBotButtons(){

        let btn_elements = document.getElementsByClassName("bottom_btn");
        
        for (var i = 0; i < btn_elements.length; i++) {
            var elem = btn_elements[i];
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
                    translateX: 10,
                    duration: 400
                });
    
                anime({
                    targets: bracketRight,
                    translateX: -10,
                    duration: 400,
                });


                let linkElem = thisElem.querySelector('a');


                let span1 = linkElem.querySelector('span.indigo_1');
                let span2 = linkElem.querySelector('span.indigo_2');
                let span3 = linkElem.querySelector('span.indigo_3');

                animateTl1(span1);
                animateTl2(span2);
                animateTl1(span3);



    
            }, false);
    
    
            elem.addEventListener("mouseleave", function( event ) {
    
                let bracketLeft = this.querySelector('.bracket_left');
                let bracketRight = this.querySelector('.bracket_right');
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

            }, false);
        }

    }
    createFixedBotButtons();
    // END of Create Fixed Bot Buttons Animation



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
            color : "#171822",
            duration: 500,
            easing: 'linear'
        });
        anime({
            targets: span2,
            background: '#FFF',
            color : "#171822",
            duration: 500,
            easing: 'linear'
        });
        anime({
            targets: span3,
            background: '#FFF',
            color : "#171822",
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
            background: '#171822',
            color : '#fff',
            duration: 500,
            easing: 'linear'
        });
        anime({
            targets: span2,
            background: '#171822',
            color : '#fff',
            duration: 500,
            easing: 'linear'
        });
        anime({
            targets: span3,
            background: '#171822',
            color : '#fff',
            duration: 500,
            easing: 'linear'
        });
    }


    // END of Menu Buttons



    // START Main Menu SHOW / HIDE
            // SHOW
    var menu_button = document.getElementById("menu_btn");
    menu_button.addEventListener("click", function(){
        showDarkLayer(showMainMenu);
    });

    function showMainMenu(){
        let menuRight = document.getElementsByClassName("menu_right")[0];
        let mainMenuUL = document.getElementById("main_menu");
        let mainMenuULli = mainMenuUL.querySelectorAll("li");


        mainMenuUL.style.display = "block";

        anime({
            targets: menuRight,
            right: 0,
            duration: 300,
            easing: 'linear'
        });

        anime({
            targets: mainMenuUL,
            delay: 200,
            opacity: [0, 1],
            duration: 1000,
            easing: 'linear'
        });

        for (var i = 0; i < mainMenuULli.length; i++) {

            let elementToAnimate = mainMenuULli[i];
            let elementDelay = 30 * i + 30;
            anime({
                targets: elementToAnimate,
                delay: elementDelay,
                translateX: [300, 0],
                duration: 300,
                easing: 'linear'
            });

        }
    }



                // HIDE
    var closeMenuRight = document.getElementsByClassName("close_menu_right")[0];
    closeMenuRight.addEventListener("click", function(){
        
        let menuRight = document.getElementsByClassName("menu_right")[0];
        let mainMenuUL = document.getElementById("main_menu");
        let mainMenuULli = mainMenuUL.querySelectorAll("li");

        let totalDelay = mainMenuULli.length * 30;

        for (var i = 0; i < mainMenuULli.length; i++) {

            let elementToAnimate = mainMenuULli[i];
            let elementDelay = totalDelay - (30 * i + 30);
            anime({
                targets: elementToAnimate,
                delay: elementDelay,
                translateX: [0, 300],
                duration: 300,
                easing: 'linear'
            });

        }


        anime({
            targets: menuRight,
            right: -340,
            delay: 300,
            duration: 300,
            easing: 'linear'
        });

        anime({
            targets: mainMenuUL,
            delay: 200,
            opacity: [1, 0],
            duration: 500,
            easing: 'linear',
            complete: function() {
                hideDarkLayer();
                mainMenuUL.style.display = "none";
            }
        });


    });


    // END of Main Menu SHOW / HIDE






    
    // START Language Menu SHOW / HIDE
            // SHOW
    var language_button = document.getElementById("language_btn");
    language_button.addEventListener("click", function(){
        showDarkLayer(showLanguageMenu);
    });

    function showLanguageMenu(){
        console.log('ceva');
        let menuRight = document.getElementsByClassName("menu_right")[0];
        let languageMenuUL = document.getElementById("language_menu");
        let languageMenuULli = languageMenuUL.querySelectorAll("li");


        languageMenuUL.style.display = "block";

        anime({
            targets: menuRight,
            right: 0,
            duration: 300,
            easing: 'linear'
        });

        anime({
            targets: languageMenuUL,
            delay: 200,
            opacity: [0, 1],
            duration: 1000,
            easing: 'linear'
        });

        for (var i = 0; i < languageMenuULli.length; i++) {

            let elementToAnimate = languageMenuULli[i];
            let elementDelay = 30 * i + 30;
            anime({
                targets: elementToAnimate,
                delay: elementDelay,
                translateX: [300, 0],
                duration: 300,
                easing: 'linear'
            });

        }
    }



                // HIDE
    var closeMenuRight = document.getElementsByClassName("close_menu_right")[0];
    closeMenuRight.addEventListener("click", function(){
        
        let menuRight = document.getElementsByClassName("menu_right")[0];
        let languageMenuUL = document.getElementById("language_menu");
        let languageMenuULli = languageMenuUL.querySelectorAll("li");

        let totalDelay = languageMenuULli.length * 30;

        for (var i = 0; i < languageMenuULli.length; i++) {

            let elementToAnimate = languageMenuULli[i];
            let elementDelay = totalDelay - (30 * i + 30);
            anime({
                targets: elementToAnimate,
                delay: elementDelay,
                translateX: [0, 300],
                duration: 300,
                easing: 'linear'
            });

        }


        anime({
            targets: menuRight,
            right: -340,
            delay: 300,
            duration: 300,
            easing: 'linear'
        });

        anime({
            targets: languageMenuUL,
            delay: 200,
            opacity: [1, 0],
            duration: 500,
            easing: 'linear',
            complete: function() {
                hideDarkLayer();
                languageMenuUL.style.display = "none";
            }
        });


    });


    // END of Language Menu SHOW / HIDE








    // START Init
    //adjustToScrollWidth();


    // END of Init



    // START Window Resize
    window.addEventListener('resize', function(){
        animateUtility();
        animateAnnouncements();
        //adjustToScrollWidth();
    });
   // END of Window Resize





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



// START AdjustToScrollWidth
function adjustToScrollWidth(){
    let windowWidth = document.body.clientWidth;
    let announcementsSpanWidth = document.getElementsByClassName('announcements')[0].offsetWidth;
    let insideWidth = announcementsSpanWidth + 40;

    let scrollWidth = windowWidth - insideWidth;

    // Adjust Top Hide 
    let top_hide = document.getElementsByClassName("top_hide")[0];
    top_hide.style.width = 'calc(100% - '+ scrollWidth +'px)';

    // Adjust Bottom Hide 
    let bottom_hide = document.getElementsByClassName("bottom_hide")[0];
    bottom_hide.style.width = 'calc(100% - '+ scrollWidth +'px)';


    // Adjust Fixed Top
    let fixedTopNewWidth = scrollWidth + 40;
    let fixedTop = document.getElementsByClassName("fixed_top")[0];
    fixedTop.style.width = 'calc(100% - '+ fixedTopNewWidth +'px)';

    // Adjust Fixed Bottom
    let fixedBottom = document.getElementsByClassName("fixed_bot")[0];
    fixedBottom.style.width = 'calc(100% - '+ fixedTopNewWidth +'px)';
   
}
// END AdjustToScrollWidth



// START Show Dark Layer

function showDarkLayer(callback){
    let darkLayer = document.getElementsByClassName("dark_layer")[0];
    darkLayer.style.display = "block";
    
    anime({
        targets: darkLayer,
        opacity: [0, 0.8],
        duration: 200,
        easing: 'linear',
        complete: function() {
            callback();
        }
    });
}

// END of Show Dark Layer



// START Hide Dark Layer

function hideDarkLayer(){
    let darkLayer = document.getElementsByClassName("dark_layer")[0];
    
    
    anime({
        targets: darkLayer,
        opacity: [0.8, 0],
        duration: 200,
        easing: 'linear',
        complete: function() {
            darkLayer.style.display = "none";
        }
    });
}

// END of Hide Dark Layer