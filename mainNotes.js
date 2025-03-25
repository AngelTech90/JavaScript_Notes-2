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

const newApiExampleResponse = localStorage.getItem('response2');
console.log(JSON.parse(newApiExampleResponse));


//* console.dir()
// This is a console method that works as a selector of an element that will show us every single propertie from.a node of our page (a node is an HTML element)

console.dir($0);

//On our responsive view with our tools, we can see the differents devices width selecting *See media queries

//We can capture screenshot on this options of our responsive view.

//An interesting tool for find specific elements as images we can press *CTRL + f and we can add the tag of the specific elememt that we want to find

//This option is able to clickimg on seaech om HTML tab of development tools

//An interesting feature of the developer tools is that we can got to "Sources" tab and directly edit and modify every file that it's beeing rendered on our browser, and this changes we'll be saved on real time on the file on our local device

// if we press ctrl + p on the developer tools we can open a file that it's on our sources

// The "+" icon at the left side on our sources tap let us import all directories that we could want

// We have the "Snippets" tab that let us add JS code that will execute only in our browser when we go to our snippets and then

// we press "ctrl + enter"

// In case that we want to save our JS snipets we just have to select it on the file and then just do it like save as

//DEVELOPER TOOlS NETWORK TAB:
//On the main window of our tab we can read and see how the sources of our page load, and where it's loading and time that it's taking to load every source 

//Some extra options at moment of see our info on our network it right click and go to "Sort by" this it's for give an alphabetic order, sort by bigger to smaller number

// We can do the same on the top side of our tab, and we can sort by images, css files, html files, JS files, and other very useful examples

// We can block process on our tab too, changing how our page it's working and with this we can understand better how a page works on real time

// We can find a specific source with search barn and we can filther our query for find some specific source  


//PERFORMANCE TAB:
//WE can use the command palete on our developer tools for run on the bottom part of our tab the "Performance Monitor", so this is very useful for have a register of how many resources our app consume and how we can improve our app's performance

// APPLICATION TAB:
// It's a place we can see all scripts, images, videos and general files that are on our web page


// Events in JS:
// An event it's every action asociated to an element on a page, like our document element, our windows element etc.

// Some examples of elements could be scroll, click, load and reload.

//In JavaScript, an event requires a "event hadler" for be useful at moment of manage events of a page using JS, there's a code example:

const sexyButton = document.querySelector('.sexyButton');

//Here we specifies that at when our element (sexyButton) got the event "onclick" we make an action.

sexyButton.onclick = () => {
	console.log("Hi sexy pedrito");
}


// A very good practice it's avoid use "eventhandlers" and use "event listeners, this is because at moment of use event handlers we run the risk that if our don't receive JS this element wont work well.

// so for that it's better use event listeners here an example:

sexyButton.addEventListener("click",setSexy);

function setSexy(){
	console.log('Setting sexy luis');
}


//An interesting tip is that we can't use arrow functions on event listeners as default parameters, only normal functions

//An on that default normal functions we can't set a parameter, this will make problem on our page

function notSexy(s){
	console.log(s);
}

sexyButton.addEventListener('doubleclick', noSexy('This is not working bro'));

//A better option, it's use an anonym arrow function as default parameter on our event listener:

sexyButton.addEventListener('click',()=>{
	console.log('gooood bro');
})


//We can remove events listeners like this:

sexyButton.removeEventListener('doubleclick',noSexy('bye'));


//How we can manage our default events on our page's elements?:

sexyButton.addEventListener('click',(e)=>{ 
	console.log(e);
})

//This will shows on console MouseEvent Object in this object we have many properties about how this event works, as example we can see the target element:

sexyButton.addEventListener('click',(e)=>{ 
	console.log(e.target)
})

//This will returns our element, in this case sexyButton

//Event bubling:
//This is a JS concept that means that every event will works separately of others, going from parent nodes to children nodes in order of events in our events flow

//This means that if we click on the children node of 3 nested elements, we will activate first the last children node event, then the first children node event, and then the parent node event 

sexyButton.addEventListener('click', (e)=>{ 
	console.log('first event');
}, true);

sexyButton.addEventListener('click', (e)=>{         console.log('second event');         }, true);


sexyButton.addEventListener('click', (e)=>{         console.log('third event');         }, true);


//Very good, now we know how we can "capture"or events, and change their propagation order, but how we can stop this events flow?, well here we have how:

sexyButton.addEventListener('event', (e)=>{ 
	console.log('Here we stop events');
	e.stopPropagation();
});

//stopPropgation method it's an event handler that avoid event bubling from the parent element were we aplied the method

//interface events

//error event
//with this event we can set an action when our element get an error

const exampleEvent = 6;
exampleEvent.addEventListener('error', ()=>{
  console.error("You got a failure on examplrEvent");
});


//load event:
//With this event we can manage whne our page loads, the main object for that it's windowz, this object it's on the top of our herarchy of objects in JS, so we don't need to refer to an specific object for add our event listener:

//first option:
window.addEventListener('load',()=>{
  console.log("Page is fully load 1");
});

//second option:
addEventListener('load',()=>{
  console.log("Page is fully load 1");
});

//*we stop at 2:23:43






