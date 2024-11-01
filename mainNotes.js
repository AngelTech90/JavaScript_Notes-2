//*Congratulations for finish the last course bro, your are great and i put all my confidence in your continous progress

//*Objet dom window:

/*Window is the top of dom herarchy, is the object were the rest of objects depends*/


//*window.open() method:

/*This method open a new window using the link in first param:*/

window.open("https://youtube.com");


//*window.close() method:

/*This method close the selected window:*/

window.close();


//*window.closed propertie:

/*This a bolean propertie that is true if our window is closed or false is our window is open:*/

console.log(window.closed);


//*window.stop():

/*This method let us stop the load and exucution of a page*/

window.stop();


//*window.print() method:

/*This method let us print the window content*/

window.print();


//*window.confirm() method:

/*This a input method that will return true if we acept or false if we don't acept:*/

window.confirm();

// We can only use confirm() as a function too:

let answer = confirm('Are you sure of let thia website?');

console.log(answer);

//The all screen properties are read only:

//screen propertie:

screen = window.screen;
console.log(screen);

// screen properties:

// availHeight: this propertie contain in pixels the total height in our screen:
console.log(screen.availHeight);

// window.screenTop propertie:

// It will see and take as reference the distance on the top of our window and the top of our screen.

//For example if we have in full screen our browser window this vakue will be 0.

console.log(window.screenTop);


// window.screenLeft propertie:

//This propertie represents the same as screenTop but using as reference the distance pixels at thr left of our screen.

console.log(window.screenLeft);

//*we stop at 25:43.