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





});