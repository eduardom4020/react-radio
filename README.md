# React Radio

----

This is an radio app mockup, made in React Native. It main propourse is to select some radio and get the feedback on screen by seeing that the selected radio's name is in the application's footer. Although it is simple, the project was executed paying attention to quality and reuse.

----

### About Project's Architecture

In order to grant to developers working in this project the ability to reuse components, preventing code duplication and reimplementation of already existing solutions, this project encapsules every component in a folder that contains the following structure:

    ComponentName
    |
    +---- index
    |
    +---- DefaultController
    |
    +---- DefaultView
    |
    +---- ComponentName.test
    |
    .
    . 
    .

So everythng necessary to this component works well should be inside it folder. If the component uses external resources, it should have a way to render without this resource or receiving props to replace it.

In this architecture, just like in MVC pattern there is a slipt between View and Controller. The difference is that the concept of Model is being abstracted here, making Controller takes responsibility of data acquisition, manipulation, reliability and more. So, **controllers** carry all of component's complex logics, like calculus, state change, data fetch and more. Per other side, **views** are responsible for render what the Component looks like.

It's possible to have multiples controllers and views. A view can use more than one controller, and it's a good practice to do this when you have away different behaviours to put in just one controller, that would turn it in a bunch of unorganized functions, also, if a simplier view needs only a small part of behaviours, it would get all of the others if all of them would be in just one controller. Also, if the component have to render a different view due to any circunstances, it's possible to create another view and export it in **index**. It should export the default view for the component, but can carry any other simple *module export*. To import alternative views, the import statement would like something like this **import { View2 } from 'path/Component';**.

Following this archtecture is easier to reduce the scope of correcting some bug, if needed the you can crop the component and put in any other place, and the component will still work. **ATTENTION**: To make this behaviour works exactly that way, it's needed to use *absolute imports* if the component reuses any other file of this project.

Also, any React component should be made in this structure, and should reuse each other to make more complex components. In this project there are two components folders in **src** folder, they are **components** and **modules**. The first one carry all of *base components*, and the second carry the screens that should be displayed to end user, that way, a *module component* should use the *base* ones in order to make more complex screens with a clean and simple code.

### Running

*To run this project it's necessary to install expo app on cellphone, then do the next steps. Open a terminal in the root level of this project and run:*

```
npm install
```

```
npm start
```

----

### Architecture and Code Style

Currently I am using my own application archtecture that allows me to split view and logics. The idea is that each component will have a DefaultView and DefaultController. I also used a global importer of babel in order to make reuse easily.

*This project has two major sections: components and modules, wich are respectively low level like implementations and high level implementations, that uses components to make more complexes combinations, turning the project more product like.*

### Components

Bellow you have the list of Components and Modules of this application.

#### Base Components

*Located in components folder*

* Background
* Footer
* RadioFooter
* IconButton
* ImageButton
* ListItem
* RadioDetails
* RadioItem
* Toolbar
* RadioToolbar

#### Modules

* RadiosList
