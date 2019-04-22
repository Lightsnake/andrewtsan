console.log("its working!");
// Hamburger toggle
let toggle = false;
function menuToggle(){
    if (!toggle){
        console.log('true');
        toggle = true;
        document.getElementById("hamburgerMenu").style.display="inline";
        return;
        
    }
    if (toggle){
        console.log('false');
        toggle=false;
        document.getElementById("hamburgerMenu").style.display="none";
        return;
    }
}
