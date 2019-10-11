# RadioToolbar
>This component is a specialization of Toolbar component. It renders a Toolbar with content (title and action buttons).


### Props
These are the props accepted by the component, pay attention to the description, inputs and behaviour:

---

##### title *(string)*
*The title being showed in toolbar. By default it value is 'STATIONS'*

**example**: 
```
<RadioToolbar title='Listen Now!' />
```

---

##### color *(string)*
*The background color in wich the wrapper will be filled. You should pass to it any color code accepted by CSS, like hexadecial, rgb or the color name.*

**example**: 
```
<RadioToolbar color='#ff0000' /> 
```
*this will paint background in red*

---

##### iconStyle *(object)*
*CSS configurations passed to IconButton component.*

**example**: 
```
<RadioToolbar iconStyle={{color: '#ff0000'}} /> 
```

---

##### textStyle *(object)*
*CSS configurations for the header text component.*

**example**: 
```
<RadioToolbar textStyle={{color: '#ff0000'}} /> 
```

---