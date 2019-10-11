# Footer
>This component is a view renders the application's footer, that is the borded bar on bottom of the screen.

### Props
These are the props accepted by the component, pay attention to the description, inputs and behaviour:

---

##### height *(string | number)*
*The height of the footer. By default it's five times status bar height.*
**example**: 
```html
<Footer height={200} /> 
```

---

##### color *(string)*
*The background color in wich the footer will be filled. You should pass to it any color code accepted by CSS, like hexadecial, rgb or the color name. By default it's grey*
**example**: 
```html
<Footer color='yellow' />
```

---

##### borderColor *(string)*
*The border color of the footer. It can be colored the same way of the props above. By default it value is #a3acbe.*
**example**: 
```html
<Footer borderColor='orange' />
```

---