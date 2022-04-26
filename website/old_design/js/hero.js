docReady(function() {


    window.addEventListener('resize', function(){
        xSize = document.body.clientWidth;
        halfBodyWidth = xSize / 2;
        ySize = document.body.clientHeight;
        halfBodyHeight = ySize / 2;
    });






    var flameSmall = document.getElementsByClassName('flame_small')[0];
    var flameBig = document.getElementsByClassName('flame_big')[0];

    var xSize = document.body.clientWidth;
    var halfBodyWidth = xSize / 2;
    var ySize = document.body.clientHeight;
    var halfBodyHeight = ySize / 2;
    var hiddenFlames = true;

    document.addEventListener('mousemove', e => {

        if(hiddenFlames == true){
            hiddenFlames = false;

            anime({
                targets: [flameSmall, flameBig],
                opacity: [0, 1],
                easing: "linear",
                duration: 500
            });
        }

        let xPos = e.clientX;
        let yPos = e.clientY;


            let horizontalPercentageBig = xPos / halfBodyWidth * 100 / 10;
            flameBig.style.left = "-" + horizontalPercentageBig + "%";
        
            let verticalPercentageBig = yPos / halfBodyHeight * 100 / 10;
            flameBig.style.top = "-" + verticalPercentageBig + "%";

            let horizontalPercentageSmall = xPos / halfBodyWidth * 100 / 20;
            flameSmall.style.left = "-" + horizontalPercentageSmall + "%";
        
            let verticalPercentageSmall = yPos / halfBodyHeight * 100 / 20;
            flameSmall.style.top = "-" + verticalPercentageSmall + "%";

    });



    // BUILD MASCOTS

    var mascotContainer = document.getElementsByClassName("mascot_images")[0];

    function buildMascot(mascotName, mascotContainer){
        let element = document.createElement("img");
        element.src = "design/mascot/" + mascotName + ".png";
        element.classList.add("hiddenMascot");
        element.classList.add("absoluteMascot");
        mascotContainer.appendChild(element);
        return element;
    }

    function showMascot(mascot){
        let currentVisibleMascot = document.getElementsByClassName("visibleMascot")[0];
        
        if(mascot != currentVisibleMascot){
            if(currentVisibleMascot){
                anime({
                    targets: currentVisibleMascot,
                    opacity: [1, 0],
                    duration: 500,
                    easing: 'linear',
                    complete: function() {
                        currentVisibleMascot.classList.remove("visibleMascot");
                    }
                });
            }
    
    
    
            anime({
                targets: mascot,
                opacity: [0, 1],
                duration: 400,
                easing: 'linear',
                complete: function() {
                    mascot.classList.add("visibleMascot");
                }
            });
        }

    }


    // END BUILD MASCOTS


    // START SPEECH
    function initSpeech(speechTextContainer){
        let speechContainer = document.getElementsByClassName("speech")[0];
        anime({
            targets: speechContainer,
            opacity: [0, 1],
            duration: 400,
            easing: 'linear'
        });

        anime({
            targets: speechTextContainer.children,
            fontSize : "22px",
            duration: 500,
            easing: 'linear',
            begin: function() {
                speechTextContainer.style.display = "block";
            },
            complete: function() {
                speechTextContainer.classList.add("currentSceneText");
            }
        });
    }
    // END SPEECH



    // START SELECT SPEECH TEXTS
    var text_scene_intro = document.getElementsByClassName("text_scene_intro")[0];
    var text_scene_1 = document.getElementsByClassName("text_scene_1")[0];
    // END SELECT SPEECH TEXTS


    // START SPEECH BUTTON
    function initButton(){
        let btn_text_scene_intro = document.getElementsByClassName("btn_text_scene_intro")[0];

        anime({
            targets: btn_text_scene_intro,
            fontSize : "22px",
            duration: 500,
            easing: 'linear'
        });
    }
    // END SPEECH BUTTON



    // CHANGE SPEECH TEXT
    function changeTextTo(nextText){
        let currentText = document.getElementsByClassName("currentSceneText")[0];


        let tl = anime.timeline({
            easing: 'linear',
            duration: 1000
        });

        tl
        .add({
            targets: currentText.children,
            fontSize : "0px",
            duration: 500,
            easing: 'linear',
            complete: function() {
                currentText.classList.remove("currentSceneText");
                currentText.style.display = "none";
            }
        })

        .add({
            targets: nextText.children,
            fontSize : "22px",
            duration: 500,
            easing: 'linear',
            begin: function() {
                nextText.style.display = "block";
            },
            complete: function() {
                nextText.classList.add("currentSceneText");
            }
        });

    }



    // END CHANGE SPEECH TEXT



    // INIT DRAWING FUNCTION

    function initDrawing(){
        var mascotNormal = buildMascot("normal", mascotContainer);
        showMascot(mascotNormal);
        initSpeech(text_scene_intro);
        initButton();
    }

    // END INIT DRAWING FUNCTION


    var mascotHappy = buildMascot("happy", mascotContainer);
    var mascotAngry = buildMascot("angry", mascotContainer);
    var mascotSad = buildMascot("sad", mascotContainer);
    var mascotSurprised = buildMascot("surprised", mascotContainer);
    var mascotWink = buildMascot("wink", mascotContainer);


    
    initDrawing();


    var textClick = document.getElementsByClassName("continue_button")[0];
    textClick.addEventListener("click", function(){
        showMascot(mascotAngry);
        changeTextTo(text_scene_1);
    });


});