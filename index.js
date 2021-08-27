const DivAccueil = document.getElementById("DivAccueil");
const DivRegles = document.getElementById("DivRegles");
var toggle = false;

function MaFonction(nbr){
    if(nbr == 1) {
        toggle =  !toggle;
        if(toggle) {
            DivAccueil.classList.remove('cacher');
            DivRegles.classList.add('cacher');
            
    
        }else{
            DivRegles.classList.add('cacher');
            DivAccueil.classList.remove('cacher');
    
        }
    }else if (nbr == 2){
        toggle =  !toggle;
        if(toggle) {
            DivAccueil.classList.add('cacher');
            DivRegles.classList.remove('cacher');
            
    
        }else{
            DivAccueil.classList.add('cacher');
            DivRegles.classList.remove('cacher');
    
        }
    }
};



const DivIndice = document.getElementById("DivIndice");
const LienIndice = document.getElementById("LienIndice");

function MyNewFonction(nbr){
    if(nbr == 1){
        LienIndice.classList.remove('cacher');
    }
    if(nbr == 2){
        DivIndice.classList.remove('cacher');
    }
};

const ScoreF = document.getElementById("ScoreF");
const DivGeneral = document.getElementById("DivGeneral");
var score = 10;
ScoreF.innerHTML = score;

function MyGame(){
    score --;
    ScoreF.innerHTML = score;
    if(score == 0){
        DivGeneral.classList.add("cacher")
        document.querySelector("body").style.backgroundColor = "red";
    }
}