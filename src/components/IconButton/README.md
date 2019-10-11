# IconButton
>This component is a button made by any image. It always keeps the aspect ration of that image, by creating only squared buttons.

### Props
These are the props accepted by the component, pay attention to the description, inputs and behaviour:

---

##### src *(image | string| object)*
*The image 'icon' showed in button. It can be an loaded image (using require or ES6 import), an relative path for image and an object containing key 'url' that have receives a string as value, and loads the image from internet to show in the application*. 

**example**: 
```
import Image from './path-to-image';
<IconButton src={Image} /> 
```
---

##### size *(string | number)*
*Sets the size of the button, by setting equal width and height in CSS. By default, it value is 24px.*

**ATTENTION**: you can make rectangular buttons by passing *style* props with width or height. In this case, the size value will be overridden. 

**example**:
```
<IconButton size={50} /> 
```

---