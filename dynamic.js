const dynamicContent=document.querySelector("#heading-inverted");

const phrases=["WebDeveloper...", "Mentor..." , "Student...", "Professional..."];
let phraseIndex=0;
let letterIndex=0;
const typingSpeed=200;
const erasingSpeed=100;

function TypeNames(phrase){

    if(letterIndex==phrase.length){
       eraseNames();
    }
    else if(letterIndex<phrase.length){
     dynamicContent.textContent += phrase.charAt(letterIndex);
     letterIndex++;
     setTimeout(TypeNames(phrase),typingSpeed);
    }

}

function eraseNames(){
if(letterIndex===-1){
    phraseIndex=(phraseIndex+1)%phrases.length;
    letterIndex=0;
    TypeNames(phrases[phraseIndex])
}
else if (letterIndex > -1){
    let updatedPharse="";
    for(let index=0; index < letterIndex;index++){
        updatedPharse += phrases[phraseIndex].charAt(index);
    }
    dynamicContent.textContent = updatedPharse;
    letterIndex--;
    setTimeout(eraseNames,erasingSpeed);
}
}


TypeNames(phrases[0]);