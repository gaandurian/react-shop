







Building our own shopping cart in six hours



For a better experience listen to this while reading the file.

<audio src="/home/mahmoud/Music/work_music.mp3" controls></audio>



ReactJS workshop support file



React

React is a JavaScript library for building user interfaces, it is used to create single page applications

Single page apps

Single page apps/websites run on the client side (the browser) and only communicate with the database when it needs to update. and it only reloads a part of the website.

Lets' take an example, not Facebook.

when we open 

create-react-app CLI tool

After installing the create-react-app tool globally on our machine through the following line

npm install -g create-react-app

We can use the create-react-app tool to create a new react project.

create-creact-app myreactproject

Building and running an app

To build and preview the app we run the following command

 npm start

this will build and automatically start the app on your default browser

Components

React is a component oriented library, it allows us to create different components and bring them together to create our single page application.

The state

Every component in react has it's own state, the state is a JavaScript object describes the current condition of the visual elements of the web app (example: how many items in the cart), whenever the state updates in our code react updates the user interface updates to meet the new changes.

state examples:

    state = {
        cartItems: 5,
    }

    state = {
        numberOfLikes: 120
    }



The render() method

The render method contains the visual elements of our app.

all the JSX that we write inside the render method, will be rendered on the browser. 

    render() {
        return (<h2> Hello world </h2>)
    }



JSX

JSX looks like HTML but it's not, JSX allows us to put HTML like code inside JavaScript/React files.

JSX is extremely flexible, for example we can do this:

    let button = <button>إضغط على الزر يختفي الأستاذ</button>



<center>whaaaat ? We can put JSX in variables ?</center>



className

If we then want to apply bootstrap classes on this button we would add them like this in normal HTML

    <!-- this is normal HTML, NOT JSX -->
    <button class="btn btn-primary">
        إضغط على الزر يختفي الأستاذ
    </button>

and the rendered result would be something like this.



in JSX we would need to write className="" instead of class="" because class is a reserved word in javascript so we can't use it.

    {/* this is JSX and yes comments are written like this inside JSX */}
    <button className="btn btn-primary">
    	إضغط على الزر يختفي الأستاذ
    </button>

and this would obviously render the same result on the web app.



htmlFor

There is also the matter of using the word for when using the tag <label>

Normal HTML:

    <label for="username">Enter username</label>
    <input type="text" id="username" />

JSX:

    <label htmlFor="username">Enter username</label>
    <input type="text" id="username" />

In JSX we use htmlFor="" instead of for=""



Creating a component

This is how a simple component that renders <h2> Hello world </h2> when used.

    // import the needed files
    import React, {Component} from "react"
    
    // create the component
    class MyComponent extends Component() {
        render() {
            return (<h2> Hello world </h2>)
        }
    }
    
    // export the component
    export default MyComponent;

We haven't used the component yet so let's go ahead and call it in the main file App.jsx

    render() {
            return (<MyComponent />)
        }

This will render the message Hello world on the web app.





What is EcmaScript

EcmaScript is a scripting languages specifications that JavaScript is built on.

ES6

ES6 is a version of EcmaScript, it was released on 2015.
it added a lot of new next gen features to JavaScript like

Arrow functions

    const myFun = () => {
        
    }



let

const

why ? Minimize Mutable State we don't risk overwriting the constant

you could help a fellow developer when debugging, he knows that it won't change, it could be you too.

Always use const if you can otherwise use let

React.Fragment





   Mahmoud Ghandour at Formalab 

Last updated January 2019


