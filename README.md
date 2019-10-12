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

----

### Running

To test the application there are three ways:

#### Via Apetize's Emulator

* [Android](https://appetize.io/embed/xc1w6f1krd589zhp22a0mgftyw?autoplay=true&debug=false&device=nexus5&deviceColor=black&embed=true&launchUrl=exp:%2F%2Fexpo.io%2F@snack%2FByhIGDytB%2Bdd13k18iu&orientation=portrait&screenOnly=false&xDocMsg=true&xdocMsg=true&params=%7B%22EXKernelLaunchUrlDefaultsKey%22:%22exp:%2F%2Fexpo.io%2F@snack%2FByhIGDytB%2Bdd13k18iu%22,%22EXKernelDisableNuxDefaultsKey%22:true%7D&scale=75&osVersion=8.1)
* [iOS](https://appetize.io/embed/8bnmakzrptf1hv9dq7v7bnteem?autoplay=true&debug=false&device=iphone6s&deviceColor=black&embed=true&orientation=portrait&screenOnly=false&xDocMsg=true&xdocMsg=true&params=%7B%22EXKernelLaunchUrlDefaultsKey%22:%22exp:%2F%2Fexpo.io%2F@snack%2FByhIGDytB%2Bdd13k18iu%22,%22EXKernelDisableNuxDefaultsKey%22:true%7D&scale=75&osVersion=11.4)

*The project was imported in [expo snack](https://snack.expo.io/ByhIGDytB) and adjusted to run with it.*

>**ATTENTION**: For the next spets you need to install [Expo app](https://expo.io/tools#client) in your cellphone.

#### Via Expo's Published Project

*In your cellphone access the app using the following url*:

[https://expo.io/@eduardom4020/native-app](https://expo.io/@eduardom4020/native-app)

#### Via npm Package Manager

*In you PC, open a terminal in the root level of this project and run:*

```
npm install
```

*Then*

```
npm start
```

*Then a expo application will open in your browser. When it runs it will shows to you an QR code, you need to switch to tunnel option then access expo app on your cellphone and search for scan qr code option.* **ATTENTION**: For some iPhones you should scan the Qr code using the default scanner of the OS, then it will ask you if you wish to run with expo.*

#### Tests

*If you wish you can run the test suite by calling in the project's root*:

```
npm run test
```

**ATTENTION**: If you want to enable the code coverage analysis, you should got to package.json and change the value of the variable in line 35 (*"collectCoverage": false*) to true. Then run the tests again.

----

### Components

Bellow you have the list of Components and Modules of this application.

#### Base Components

*Located in components folder*

* [Background](./src/components/Background)
* [Footer](./src/components/Footer)
* [RadioFooter](./src/components/RadioFooter)
* [IconButton](./src/components/IconButton)
* [ImageButton](./src/components/ImageButton)
* [ListItem](./src/components/ListItem)
* [RadioDetail](./src/components/RadioDetail)
* [RadioItem](./src/components/RadioItem)
* [Toolbar](./src/components/Toolbar)
* [RadioToolbar](./src/components/RadioToolbar)

#### Modules

* [RadiosList](./src/modules/RadiosList)

----

### About

*This project was made by*,

Eduardo Melo de Carvalho Braga

**Contact**:

* Email: [eduardom4020@gmail.com](mailto:eduardom4020@gmail.com)
* LinkedIn: [https://www.linkedin.com/in/eduardo-melo-braga/](https://www.linkedin.com/in/eduardo-melo-braga/)
