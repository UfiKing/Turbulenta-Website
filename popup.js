        // Get the modal
        var modal = document.getElementById("popROSD");
        var modal1 = document.getElementById("popRRL");
        var modal2 = document.getElementById("popVS");
        var modal3 = document.getElementById("popRG");
        var modal4 = document.getElementById("popCSOTM");
        var modal5 = document.getElementById("popB");
        var modal6 = document.getElementById("popEB");
        var modal7 = document.getElementById("popLS");
        var modal8 = document.getElementById("popHOS");
        var modal9 = document.getElementById("popROK");

        // Get the button that opens the modal
        var btn = document.getElementById("btnROSD");
        var btn1 = document.getElementById("btnRRL");
        var btn2 = document.getElementById("btnVS");
        var btn3 = document.getElementById("btnRG");
        var btn4 = document.getElementById("btnCSOTM");
        var btn5 = document.getElementById("btnB");
        var btn6 = document.getElementById("btnEB");
        var btn7 = document.getElementById("btnLS");
        var btn8 = document.getElementById("btnHOS")
        var btn9 = document.getElementById("btnROK")


        // Get the <span> element that closes the modal
        //var span = document.getElementsByClassName("close")[0];
        var span = document.getElementById("close")
        var span1 = document.getElementById("close1")
        var span2 = document.getElementById("close2")
        var span3 = document.getElementById("close3")
        var span4 = document.getElementById("close4")
        var span5 = document.getElementById("close5")
        var span6 = document.getElementById("close6")
        var span7 = document.getElementById("close7")
        var span8 = document.getElementById("close8")
        var span9 = document.getElementById("close9")

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
    }
    btn1.onclick = function() {
        modal1.style.display = "block";
    }
    btn2.onclick = function() {
        modal2.style.display = "block";
    }
    btn3.onclick = function() {
        modal3.style.display = "block";
    }
    btn4.onclick = function() {
        modal4.style.display = "block";
    }
    btn5.onclick = function() {
        modal5.style.display = "block";
    }   
    btn6.onclick = function() {
        modal6.style.display = "block";
    }
    btn7.onclick = function() {
        modal7.style.display = "block";
    }
    btn8.onclick = function() {
        modal8.style.display = "block";
    }
    btn9.onclick = function() {
        modal9.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    span1.onclick = function() {
        modal1.style.display = "none";
    }
    span2.onclick = function() {
        modal2.style.display = "none";
    }
    span3.onclick = function() {
        modal3.style.display = "none";
    }
    span4.onclick = function() {
        modal4.style.display = "none";
    }
    span5.onclick = function() {
        modal5.style.display = "none";
    }
    span6.onclick = function() {
        modal6.style.display = "none";
    }
    span7.onclick = function() {
        modal7.style.display = "none";
    }
    span8.onclick = function() {
        modal8.style.display = "none";
    }
    span9.onclick = function() {
        modal9.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }else if(event.target == modal1){
            modal1.style.display = "none";
        }else if(event.target == modal2){
            modal2.style.display = "none";
        }else if(event.target == modal3){
            modal3.style.display = "none";
        }else if(event.target == modal4){
            modal4.style.display = "none";
        }else if(event.target == modal5){
            modal5.style.display = "none";
        }else if(event.target == modal6){
            modal6.style.display = "none";
        }else if(event.target == modal7){
            modal7.style.display = "none";
        }else if(event.target == modal8){
            modal8.style.display = "none";
        }else if(event.target == modal9){
            modal9.style.display = "none";
        }
    }
    /*window.onclick = function(event) {
        if (event.target == modal1) {
            modal1.style.display = "none";
        }
    }
    window.onclick = function(event) {
        if (event.target == modal2) {
            modal2.style.display = "none";
        }
    }*/

    