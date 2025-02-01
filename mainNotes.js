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

// resizeTo abd resizeBy methods:

// this methods let us change the dimensions of the window were we are:

// resizeTo change by a relative way the window dimensions:
window.resizeTo(300,700);

//resizeBy change by an absolute way the windows dimensions:
window.resizeBy(clientWidth,clienHeight);

// moveTo and moveBy methods:

//They are methods that works moves our window taking as reference two numeric parameters that represents X, and Y movement in pixels

//moveBy method:
//this method works moving in an absolute position our window

window.moveBy(123,788);

//moveTo method:
//this method works moving in an relative position our window

window.moveTo(-123,-788);


//window.location properties:

//href:
// This propertie show us the url of the file that we are using:

console.log(window.location.href);

//hostname:
// This propertie show us the domain name of the file where we are in a page:

console.log(window.location.hostname);

// pathname:
// This propertie contains a url where we are taking as reference the root 

console.log(window.location.pathname);

// protocol
// this propertie contains the encryotation protocol that is using our website:

console.log(window.location.protocol);

// asign
// this is a method that loads the part of our website using as parameter a string that contains url of website part:

console.log(window.location.asign("./index.html"));


//chrome developer tools:

//if we use right click over an piece of HTML code in our elements tab, if we click the "copy selector" we can take the selector of that element for use it our CSS files.

//we can do the same for use an element in JS selecting our JS path.

// We have how copy the xPath of oyr element that show how are structured our component like this:

// /html/body/div

// and we can force the state of our our component, like hover state, active etc


// New so interesting JS feature:
//As we now, on JS we can only set on cache strings, so usually at moment of cache the JSON of an API request, for that we use this method for stringify our response:
const apiExampleReponse = {
  name:"Angel",
  lastName:"Molina",
  age:18,
  single:false,
  money:null
};

JSON.stringify(apiExampleResponse);
localStorage.setItem('response', apiExampleResponse);

console.log(localStorage.getItem('response'));

//*The cool stuff of this is that we can set again our response to an object using parse method
apiExampleResponse = JSON.parse(localStorage.getItem('response'));
console.log(apiExampleResponse);

//*NOTE: A good practice is just set the JSON.stringify and JSON.parse at moment of setItem on local storage:

localStorage.setItem('response2', JSON.stringify(apiExampleResponse));

const = newApiExampleResponse = localStorage.getItem('response2');
console.log(JSON.parse(newApiExampleResponse));

//*we stop at 1:03:50
