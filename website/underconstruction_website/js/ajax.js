docReady(function() {
   
   

    // follower
    var submitFollower = document.getElementById("send_follower");

    submitFollower.addEventListener("click", function(){
        
        var followerInput = document.getElementById("follower_twitter");
        var followerHandle = followerInput.value;

        if(followerHandle.length == 0){

            addErrorToFollower("Twitter Handle is empty.");

        }else{
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "https://www.thecyberinu.com/add_follower.php", true);
            xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhttp.onreadystatechange = function() {
               if (this.readyState == 4 && this.status == 200) {
            
                  // Response
                    var response = this.responseText; 
                    var responseJson = JSON.parse(response);

                    if(responseJson.error == false){
                        
                        var follower_form_container = document.getElementById("follower_form_container");
                        follower_form_container.classList.add("opacity_0");
                        submitFollower.classList.add("display_none");

                        var follower_form_message = document.getElementById("follower_form_message");
                        follower_form_message.classList.add("display_block");

                    }else{
                        addErrorToFollower(responseJson.error_message);
                    }
               }
            };
            xhttp.send("follower_twitter=" + followerHandle);
    
        }

    });






    // shiller

    var submitPromoter = document.getElementById("send_promoter");

    submitPromoter.addEventListener("click", function(){
        var promoterTwitterInput = document.getElementById("promoter_twitter");
        var promoterHandle = promoterTwitterInput.value;

        var promoterEmailInput = document.getElementById("promoter_email");
        var promoterEmail = promoterEmailInput.value;

        var error = false;
        if(promoterHandle.length == 0){
            addErrorToPromoterTwitter("Twitter Handle is empty.");
            error = true;
        }

        if(promoterEmail.length == 0){
            addErrorToPromoterEmail("Email is empty.");
            error = true;
        }

        if(error == false){
            

            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "https://www.thecyberinu.com/add_promoter.php", true);
            xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhttp.onreadystatechange = function() {
               if (this.readyState == 4 && this.status == 200) {
            
                  // Response
                    var response = this.responseText; 


                    var responseJson = JSON.parse(response);

                    if(responseJson.error == false){
                        // all good

                        var shiller_form_container = document.getElementById("shiller_form_container");
                        shiller_form_container.classList.add("opacity_0");
                        submitPromoter.classList.add("cursor_none");

                        var shiller_form_message = document.getElementById("shiller_form_message");
                        shiller_form_message.classList.add("display_block");

                    }else{
                        if(responseJson.error_twitter == true){
                            addErrorToPromoterTwitter(responseJson.error_message);
                        }

                        if(responseJson.error_email == true){
                            addErrorToPromoterEmail(responseJson.error_message);
                        }
                    }
               }
            };
            xhttp.send("promoter_twitter=" + promoterHandle + "&promoter_email=" + promoterEmail);


        }

    });


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




function addErrorToFollower(text){
    var follower_error_twitter = document.getElementById("follower_error_twitter");
    follower_error_twitter.classList.add("red_color");
    follower_error_twitter.innerText = text;

    setTimeout(function(){
        follower_error_twitter.classList.remove("red_color");
        follower_error_twitter.innerText = "Your Twitter Handle";
    }, 2000);
}


function addErrorToPromoterTwitter(text){
    var promoter_error_twitter = document.getElementById("promoter_error_twitter");
    promoter_error_twitter.classList.add("red_color");
    promoter_error_twitter.innerText = text;

    setTimeout(function(){
        promoter_error_twitter.classList.remove("red_color");
        promoter_error_twitter.innerText = "Your Twitter Handle";
    }, 2000);
}


function addErrorToPromoterEmail(text){
    var promoter_error_email = document.getElementById("promoter_error_email");
    promoter_error_email.classList.add("red_color");
    promoter_error_email.innerText = text;

    setTimeout(function(){
        promoter_error_email.classList.remove("red_color");
        promoter_error_email.innerText = "Your Email Address";
    }, 2000);
}