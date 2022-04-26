docReady(function() {


    // Estimates Hover
    var quick_line_1 = document.getElementsByClassName("quick_line_1");
    var quick_line_2 = document.getElementsByClassName("quick_line_2");
    var quick_line_3 = document.getElementsByClassName("quick_line_3");
    var quick_line_4 = document.getElementsByClassName("quick_line_4");
    var quick_line_5 = document.getElementsByClassName("quick_line_5");

    var quick_comp_line_1 = document.getElementsByClassName("quick_comp_line_1");
    var quick_comp_line_2 = document.getElementsByClassName("quick_comp_line_2");
    var quick_comp_line_3 = document.getElementsByClassName("quick_comp_line_3");
    var quick_comp_line_4 = document.getElementsByClassName("quick_comp_line_4");
    var quick_comp_line_5 = document.getElementsByClassName("quick_comp_line_5");

    function addHover(elArray){
        for(let i = 0; i < elArray.length; i++){
            let element = elArray[i];
            element.addEventListener("mouseenter", function(){
                
                for(let i = 0; i < elArray.length; i++){
                    elArray[i].classList.add("hover_background");

                }
            });


            element.addEventListener("mouseleave", function(){
                
                for(let i = 0; i < elArray.length; i++){
                    elArray[i].classList.remove("hover_background");

                }
            });
        }
    }

    addHover(quick_line_1);
    addHover(quick_line_2);
    addHover(quick_line_3);
    addHover(quick_line_4);
    addHover(quick_line_5);

    addHover(quick_comp_line_1);
    addHover(quick_comp_line_2);
    addHover(quick_comp_line_3);
    addHover(quick_comp_line_4);
    addHover(quick_comp_line_5);

    // END of Estimates Hover



    // Star Animation
    
    function sparkPlay(){
        let spark = document.getElementsByClassName("piece_spark_el")[0];

        anime({
            targets: spark,
            width: '100%',
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutSine'
        });

  
    }
    sparkPlay();
    // END of Star Animation



    // Start Feather Animation

    var pen_hover = document.getElementsByClassName("pen_hover")[0];
    var piece_feather = document.getElementsByClassName("piece_feather")[0];
    var piece_cyber = document.getElementsByClassName("piece_cyber")[0];


    pen_hover.addEventListener("mouseenter", function(){
        var tl = anime.timeline({
            easing: 'easeOutExpo',
        });

        tl
        .add({
        targets: piece_feather,
        opacity: 0,
        duration: 50
        })

        .add({
            targets: piece_cyber,
            opacity: 1,
            duration: 50
        })
        .add({
            targets: piece_cyber,
            opacity: 0,
            duration: 50
        })
        .add({
            targets: piece_feather,
            opacity: 1,
            duration: 50
        })
        .add({
            targets: piece_feather,
            opacity: 0,
            duration: 50
            })

            .add({
                targets: piece_cyber,
                opacity: 1,
                duration: 50
            })
            .add({
                targets: piece_cyber,
                opacity: 0,
                duration: 50
            })
            .add({
                targets: piece_feather,
                opacity: 1,
                duration: 50
            })
            .add({
                targets: piece_feather,
                opacity: 0,
                duration: 50
            })

            .add({
                targets: piece_cyber,
                opacity: 1,
                duration: 50
            })
            .add({
                targets: piece_cyber,
                opacity: 0,
                duration: 50
            })
            .add({
                targets: piece_feather,
                opacity: 1,
                duration: 50
            });


    });

    // END of Feather Animation





    // Start Calc Button Hover

    var btn_calc_mc = document.getElementsByClassName("btn_calc_mc");
    var btn_calc_m_minus = document.getElementsByClassName("btn_calc_m_minus");
    var btn_calc_m_plus = document.getElementsByClassName("btn_calc_m_plus");
    var btn_calc_on = document.getElementsByClassName("btn_calc_on");
    var btn_calc_ce = document.getElementsByClassName("btn_calc_ce");
    var btn_calc_7 = document.getElementsByClassName("btn_calc_7");
    var btn_calc_8 = document.getElementsByClassName("btn_calc_8");
    var btn_calc_9 = document.getElementsByClassName("btn_calc_9");
    var btn_calc_divide = document.getElementsByClassName("btn_calc_divide");
    var btn_calc_multiply = document.getElementsByClassName("btn_calc_multiply");
    var btn_calc_4 = document.getElementsByClassName("btn_calc_4");
    var btn_calc_5 = document.getElementsByClassName("btn_calc_5");
    var btn_calc_6 = document.getElementsByClassName("btn_calc_6");
    var btn_calc_plus_minus = document.getElementsByClassName("btn_calc_plus_minus");
    var btn_calc_minus = document.getElementsByClassName("btn_calc_minus");
    var btn_calc_1 = document.getElementsByClassName("btn_calc_1");
    var btn_calc_2 = document.getElementsByClassName("btn_calc_2");
    var btn_calc_3 = document.getElementsByClassName("btn_calc_3");
    var btn_calc_radical = document.getElementsByClassName("btn_calc_radical");
    var btn_calc_plus = document.getElementsByClassName("btn_calc_plus");
    var btn_calc_0 = document.getElementsByClassName("btn_calc_0");
    var btn_calc_dot = document.getElementsByClassName("btn_calc_dot");
    var btn_calc_equal = document.getElementsByClassName("btn_calc_equal");
    var btn_calc_percent = document.getElementsByClassName("btn_calc_percent");
    var btn_calc_slash = document.getElementsByClassName("btn_calc_slash");


    function addMouseListener(elArray){

        elArray[1].addEventListener("mouseenter", function(){
            elArray[0].classList.add("visible_opacity_half");
        });

        elArray[1].addEventListener("mouseout", function(){
            elArray[0].classList.remove("visible_opacity_half");
        });


        elArray[1].addEventListener("mousedown", function(){
            elArray[0].classList.add("visible_opacity_full");
        });

        elArray[1].addEventListener("mouseup", function(){
            elArray[0].classList.remove("visible_opacity_full");
        });
    }


    addMouseListener(btn_calc_mc);
    addMouseListener(btn_calc_m_minus);
    addMouseListener(btn_calc_m_plus);
    addMouseListener(btn_calc_on);
    addMouseListener(btn_calc_ce);
    addMouseListener(btn_calc_7);
    addMouseListener(btn_calc_8);
    addMouseListener(btn_calc_9);
    addMouseListener(btn_calc_divide);
    addMouseListener(btn_calc_multiply);
    addMouseListener(btn_calc_4);
    addMouseListener(btn_calc_5);
    addMouseListener(btn_calc_6);
    addMouseListener(btn_calc_plus_minus);
    addMouseListener(btn_calc_minus);
    addMouseListener(btn_calc_1);
    addMouseListener(btn_calc_2);
    addMouseListener(btn_calc_3);
    addMouseListener(btn_calc_radical);
    addMouseListener(btn_calc_plus);
    addMouseListener(btn_calc_0);
    addMouseListener(btn_calc_dot);
    addMouseListener(btn_calc_equal);
    addMouseListener(btn_calc_percent);
    addMouseListener(btn_calc_slash);
    // End Calc Button Hover




    // Start Calculator Text Adding
    var calc_text = document.getElementsByClassName("hidden_text")[0].innerHTML;
    var visible_text = document.getElementsByClassName("visible_text")[0]; 


    for (var i = 0; i < calc_text.length; i++) {
        let spanEl = document.createElement("span");

        if(calc_text.charAt(i) == "-"){
            spanEl.classList.add("space_text");
        }
        else{
            let spanText = document.createTextNode(calc_text.charAt(i));
            spanEl.appendChild(spanText);
        }

        visible_text.appendChild(spanEl);
    }
    // END Calculator Text Adding



    // Start Animate Text 

    var initialPosition = 165;
    var messageWidth = visible_text.offsetWidth;

    var total = messageWidth - messageWidth * 2;
    var textTimeout;
    var movingText = false;
  

    function moveText(){
        movingText = true;
        initialPosition = initialPosition - 15;

        visible_text.style.left = initialPosition + "px";

        if(initialPosition < total){
            initialPosition = 165;
        }

        textTimeout = setTimeout(moveText, 300);
    }

    moveText();

    // Stop Animate Text



    // Start CE Click

    btn_calc_ce[1].addEventListener("click", function(){
        initialPosition = 165 + 15;
    });

    // END CE Click


    // Start ON/OFF Click

    btn_calc_on[1].addEventListener("click", function(){
        if(movingText == true){
            initialPosition = 165 + 15;
            visible_text.style.left = initialPosition + "px";
            clearTimeout(textTimeout);
            movingText = false;
        }else{
            moveText();
        }
    });

    // END ON/OFF Click

});