# RadioItem
>The main interactive component of the application. It is a composition of ListItem and RadioDetail components. The final result is a item with toggle action that triggers an smooth toggle animation, revealing the image when click on radio.


This component uses two Controllers (default and animation), that are logic modules, written using hooks, responsible for complex behaviours of the component. State manipulation, side effects, data fetch and more are examples of these behaviours. The reason wich they are separated controllers is that they do way distinct things, and one of them needs to use React Native's Animated API, turning this AnimationController exclusive for Native, but the DefaultController can still being able to reuse in any other React applicaition.


### Props
These are the props accepted by the component, pay attention to the description, inputs and behaviour:

---

##### id *(string | number)*
*The id of the radio. It should be unique.*

**example**: 
```
<RadioItem id='1' />
```

---

##### title *(string)*
*The name of the radio*.

**example**: 
```
<RadioItem title='Doge FM' />
```

---

##### frequency *(string | number)*
*A string or a number representing the frequency number wich the radio works with.*

**example**: 
```
<RadioItem frequency='123,4' />
```

---

##### tag *(string)*
*A tag that feeds the props imageTag of RadioDetail component.*

**example**: 
```
<RadioItem tag='doge.png' />
```

---

##### selectedRadio *(object)*
*The current radio being listened in the entire application. It is used when switching between radios, in order the close radios that aren't the selected one.*

**example**: 
```
<RadioItem selectedRadio={{id: '1', title: 'Doge FM', ...}} />
```

---

##### onToggle *(function)*
*A callback function that is triggered when radio is about to active. In this application is being used for update radio name on footer.*

**example**: 
```
<RadioItem onToggle={(id, isActive) => console.log(id, isActive)} />
```

---

**ATTENTION**: Any other props passed to this component will work as props for an ListItem component.