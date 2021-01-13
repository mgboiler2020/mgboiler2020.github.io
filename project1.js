console.log("it works3")


//NOTE: AFTER LATE MONDAY AFTERNOON MEETING W/ DAVID IT WAS EVIDENT I NEEDED TO 
//RESTRUCTURE MY HTML AND START OVER WITH JAVASCRIPT TO MAKE THE GAME WORK COMPLETELY.
//I WAS GOING IN THE WRONG DIRECTION.

//I USED THIS EXAMPLE AS REFERENCE FOR STRUCTUING HTML AND 
//OF THE JAVASCRIPT METHODS:
//https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae

//WHAT IS LEFT TO DO (as of 12:30PM Tuesday)
//1) make backCard transpart upon click.  Use opacity: 0% in CSS
//2) capture match pair
//3) make unmatched pairs turn opacity = 100%
//4) make sure only two cards can be selected at one time.

//VARIABLES AND CODE


let backTrans = document.querySelectorAll('.cardBack');
let isTrans = false;

let firstSel = '';
let secondSel = '';

//NOTE:  When a card/div is clicked this changes the the class of .cardBack to .cardBack.trans
// which makes the div on top transparent (opacity = 0%), revealing the letter on the bottom div
function makeTransparent() {
   
    this.classList.add('trans');
        if (!isTrans) { //if the card/div is NOT isTrans, then the first selection is recorded.
            isTrans = true;
            firstSel = this;
            return;
            
    }
secondSel = this; //second selection is recorded 
isTrans = false;
console.log("in trans function");


//after two selections this calss the function that compares the data-display value on the two cards/divs selected
isMatch();
}
//used data-* to add a searchable/comparable attribute to the div class in html.  The value entered can be accessed with "dataset" and the attribute entered.
// reference: https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
function isMatch() {
if (firstSel.dataset.display === secondSel.dataset.display) {
    removeClickEvent();
//if the first and second selections' data-display values match this calls 
// the function to remove the eventListener from the two selected divs so they cannot be selected again.  
// the two matchining divs display a letter and remain visible.


//if the selections are not a match the else statement calls the function that removes the .cardBack.trans class added in the makeTransparent function.
} else {
    hideLetter();
    console.log("in else statement for Hide Letter");
}






//this removes the listener from the two selected cards to prevent clicking more than once.
function removeClickEvent() {
    firstSel.removeEventListener('click', makeTransparent);
    secondSel.removeEventListener('click', makeTransparent);
    console.log("prevent click again on same box");
r
}


//if the selections do not match the hideLetter removes the cardBack.trans class from the selected divs
//and reverts to the original class (making the top div opaque)
////used w3schools.com to look up setTimeout info and syntax.  This turns the cards opaque if the two clicks aren't a match
//Suggested by Neal
function hideLetter() {
    setTimeout(function() {
        firstSel.classList.remove('trans');
        secondSel.classList.remove('trans');
    }, 3000);
}

}
backTrans.forEach(card => card.addEventListener('click', makeTransparent));
// forEach method used instead of an if statement to loop through the div array
// it calls the card function once for each element (divs)
//reference: https://www.w3schools.com/jsref/jsref_foreach.asp









