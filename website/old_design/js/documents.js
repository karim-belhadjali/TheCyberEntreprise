docReady(function() {



    // Start Folder Animation

    var folder_image = document.getElementsByClassName("documents_folder")[0];
    var documents_file = document.getElementsByClassName("documents_file")[0];
    var doc_animation;

    var folderMouseIn;
    var folderAnimationInProgress = false;

    folder_image.addEventListener("mouseenter", function(){
        folderMouseIn = true;

        if(folderAnimationInProgress == false){

            folderAnimationInProgress = true;
            doc_animation = anime({
                targets: documents_file,
                translateY: -110,
                easing: 'spring(1, 80, 10, 0)',
                duration: 500,
                complete: function() {
                    folderAnimationInProgress = false;
    
                    if(folderMouseIn == false){
                        anime({
                            targets: documents_file,
                            translateY: 0,
                            easing: 'easeInOutSine',
                            duration: 500
                        });
                    }
                }
            });
            
        }

    });


    folder_image.addEventListener("mouseout", function(){
        folderMouseIn = false;

        if(folderAnimationInProgress == false){
            anime({
                targets: documents_file,
                translateY: 0,
                easing: 'easeInOutSine',
                duration: 500
            });
        }

    });

    // End Folder Animation




    // Start Scroll Stamp
    var stamp_button = document.getElementsByClassName("stamp_button")[0];
    var scroll_stamp = document.getElementsByClassName("scroll_stamp")[0];
    var stamp_active = false;
    stamp_button.addEventListener("click", function(){
        scroll_stamp.style.opacity = 1;
        stamp_active = true;
        stamp_button.classList.remove("point_cursor");
    });

    // Stop Scroll Stamp



    // Start Scroll Signature
    var scroll_signature_click = document.getElementsByClassName("scroll_signature_click")[0];
    var scroll_contract = document.getElementsByClassName("scroll_contract")[0];
    var scroll_contract_overflow = document.getElementsByClassName("scroll_contract_overflow")[0];
    var scroll_contract_image = document.getElementsByClassName("scroll_contract_image")[0];
    var scroll_contract_image_empty = document.getElementsByClassName("scroll_contract_image_empty")[0];
    var scroll_data = document.getElementsByClassName("scroll_data")[0];


    scroll_signature_click.addEventListener("click", function(){

        if(stamp_active == true){
            scroll_stamp.style.display = "none";
            scroll_signature_click.classList.remove("point_cursor");
    
            anime({
                targets: [scroll_contract, scroll_contract_overflow],
                height: 0,
                easing: 'easeInOutSine',
                duration: 500,
                complete: function() {
                    scroll_contract_image.style.display = "none";
                    stamp_button.classList.remove("point_cursor");
                    scroll_contract_image_empty.style.display = "block";
                    scroll_data.style.display = "block";
    
                    anime({
                        targets: [scroll_contract, scroll_contract_overflow],
                        height: 196,
                        easing: 'easeInOutSine',
                        duration: 500,
                    });
    
                }
            });
        }

    
        
    });


    // Stop Scroll Signature


    // Start Scroll Diamond Left
    var diamond_left = document.getElementsByClassName("diamond_left")[0];
    var scroll_blue_left = document.getElementsByClassName("scroll_blue_left")[0];
    var diamondLeftMouseIn;
    var diamonLeftAnimationInProgress = false;


    diamond_left.addEventListener("mouseenter", function(){
        diamondLeftMouseIn = true;

        if(diamonLeftAnimationInProgress == false){

            diamonLeftAnimationInProgress = true;
            anime({
                targets: scroll_blue_left,
                width :  120,
                easing: 'easeInOutSine',
                duration: 300,
                complete: function() {
                    diamonLeftAnimationInProgress = false;
    
                    if(diamondLeftMouseIn == false){
                        anime({
                            targets: scroll_blue_left,
                            width: 0,
                            easing: 'easeInOutSine',
                            duration: 300
                        });
                    }
                }
            });
            
        }

    });


    diamond_left.addEventListener("mouseout", function(){
        diamondLeftMouseIn = false;

        if(diamonLeftAnimationInProgress == false){
            anime({
                targets: scroll_blue_left,
                width: 0,
                easing: 'easeInOutSine',
                duration: 300
            });
        }

    });

    // Stop Scroll Diamond Left





    // Start Scroll Diamond Right
    var diamond_right = document.getElementsByClassName("diamond_right")[0];
    var scroll_blue_right = document.getElementsByClassName("scroll_blue_right")[0];
    var diamondRightMouseIn;
    var diamonRightAnimationInProgress = false;


    diamond_right.addEventListener("mouseenter", function(){
        diamondRightMouseIn = true;

        if(diamonRightAnimationInProgress == false){

            diamonRightAnimationInProgress = true;
            anime({
                targets: scroll_blue_right,
                width :  120,
                easing: 'easeInOutSine',
                duration: 300,
                complete: function() {
                    diamonRightAnimationInProgress = false;
    
                    if(diamondRightMouseIn == false){
                        anime({
                            targets: scroll_blue_right,
                            width: 0,
                            easing: 'easeInOutSine',
                            duration: 300
                        });
                    }
                }
            });
            
        }

    });


    diamond_right.addEventListener("mouseout", function(){
        diamondRightMouseIn = false;

        if(diamonRightAnimationInProgress == false){
            anime({
                targets: scroll_blue_right,
                width: 0,
                easing: 'easeInOutSine',
                duration: 300
            });
        }

    });

    // Stop Scroll Diamond Right








    // Start Prepare Card Number
    var card_number_container = document.getElementsByClassName("card_number_container")[0];

    for (var i = 0; i < 4; i++){

        let numberGroup = document.createElement("div");
        numberGroup.className = "card_number_group";

        for(var g = 0; g < 4; g++){
            let div_number = g + 1;
            let numberContainerElement = document.createElement("div");
            numberContainerElement.className = "number_container_element number_container_element_" + div_number;


            for(var j = 0; j < 10; j++){
                let number = document.createElement("span");
                textnode = document.createTextNode(j);

                number.appendChild(textnode);

                numberContainerElement.appendChild(number);
            }


            numberGroup.appendChild(numberContainerElement);
        }

        card_number_container.appendChild(numberGroup);
    }

    // End Prepare Card Number




    // Start Initial Credit Card Number

    var card_number_initial = document.getElementsByClassName("card_number_initial")[0].textContent;
    card_number_initial = card_number_initial.replace(/\s+/g, '');
    

    var initial_number_array = card_number_initial.split("");
    var number_container_element = document.getElementsByClassName("number_container_element");



    for (var i = 0; i < initial_number_array.length; i++){
        let pixels = 26 * initial_number_array[i];
        number_container_element[i].style.transform = "translateY(-" + pixels + "px)"; 
    }
    
    // End Initial Credit Card Number






    // Start Credit Card Animation
    var credit_card_hover = document.getElementsByClassName("credit_card_hover")[0];
    var cyber_lines = document.getElementsByClassName("cyber_lines")[0];
    var circulating_supply_animated = false;

    credit_card_hover.addEventListener("mouseenter", function(){
        anime({
            targets: cyber_lines,
            translateY: 200,
            translateX: 230,
            easing: 'easeInOutSine',
            duration: 1000,
            complete: function() {
                cyber_lines.style.transform = "translate(0px,0px)";
            }
        });

        let circulating_supply = document.getElementsByClassName("card_number_circulating")[0].textContent;
        circulating_supply = circulating_supply.replace(/\s+/g, '');
        animateCirculatingSupply(circulating_supply);
    });








    // End Credit Card Animation


    // Start Credit Card Change Numbers Animation

    function animateCirculatingSupply(number){
        if(circulating_supply_animated == false){
            circulating_supply_animated = true;

            // fade out gray 
            anime({
                targets: ".fade_full_color",
                opacity: 0,
                easing: 'easeInOutQuad',
                duration : 500
            });

            // animate numbers
            let number_array = number.split("");

            for(i = 0; i < number_array.length; i++){

                let element_to_animate = number_container_element[i];
                let pixels = 26 * number_array[i];
                let top_property = "-" + pixels + "px"; 

                anime({
                    targets: element_to_animate,
                    easing: 'easeInOutQuad',
                    duration : 1000,
                    translateY : top_property,
                    complete: function() {
                        if(number_array.length == i){
                            

                            // fade in gray 
                            anime({
                                targets: ".fade_full_color",
                                opacity: 1,
                                easing: 'easeInOutQuad',
                                duration : 200
                            });

                        }
                    }
                });

            }
            
        }
    }


    // Stop Credit Card Change Numbers Animation


    // Start Inu Animation
    var inu_hover = document.getElementsByClassName("inu_hover")[0];
    var inu_base = document.getElementsByClassName("inu_base")[0];
    var inu_animation;

    var inuMouseIn;
    var inuAnimationInProgress = false;

    inu_hover.addEventListener("mouseenter", function(){
        inuMouseIn = true;

        if(inuAnimationInProgress == false){

            inuAnimationInProgress = true;
            inu_animation = anime({
                targets: inu_base,
                rotate: "14deg",
                easing: 'spring(1, 80, 10, 0)',
                duration: 500,
                complete: function() {
                    inuAnimationInProgress = false;
    
                    if(inuMouseIn == false){
                        anime({
                            targets: inu_base,
                            rotate: "0deg",
                            easing: 'easeInOutSine',
                            duration: 300
                        });
                    }
                }
            });
            
        }

    });


    inu_hover.addEventListener("mouseout", function(){
        inuMouseIn = false;

        if(inuAnimationInProgress == false){
            anime({
                targets: inu_base,
                rotate: "0deg",
                easing: 'easeInOutSine',
                duration: 300
            });
        }

    });

    // Stop Inu Animation


    // Start Special Thanks

    var thanks_name_el = document.getElementsByClassName("thanks_name_el");
    var thanks_language_el = document.getElementsByClassName("thanks_language_el");



    for (var i = 0; i < thanks_name_el.length; i++) {

        let el_thanks_name = thanks_name_el[i];
        let el_thanks_language = thanks_language_el[i];



        el_thanks_name.addEventListener("mouseenter", function(){
            el_thanks_name.classList.add("hover_background");
            el_thanks_language.classList.add("hover_background");
        });


        el_thanks_name.addEventListener("mouseleave", function(){
            el_thanks_name.classList.remove("hover_background");
            el_thanks_language.classList.remove("hover_background");
        });


        el_thanks_language.addEventListener("mouseenter", function(){
            el_thanks_name.classList.add("hover_background");
            el_thanks_language.classList.add("hover_background");
        });


        el_thanks_language.addEventListener("mouseleave", function(){
            el_thanks_name.classList.remove("hover_background");
            el_thanks_language.classList.remove("hover_background");
        });
    }


    // End Special Thanks

});