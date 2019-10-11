# React Radio

----

This is an radio app mockup, made in React Native. It main propourse is to select some radio and get the feedback on screen by seeing that the selected radio's name is in the application's footer. Most part of interactions received an expecial cate to bring to the user some good UX.

----

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