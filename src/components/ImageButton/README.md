# ImageButton
>This component is a button made by any image. It always keeps the aspect ration of that image, by creating only squared buttons. It shape is rounded and it use images from an assets folder, so you doesn't need to pass loaded images for this component.

### Props
These are the props accepted by the component, pay attention to the description, inputs and behaviour:

---

##### tag *(string)*
*In the root of the project you should have an assets folder with images. This folder exports all the images that can be used by this component. The tag props is the name of the exported Module*. 
**example**: 
```html
<ImageButton tag='loadedImage1' /> 
```
---

##### size *(string | number)*
*Sets the size of the button, by setting equal width and height in CSS. By default, it value is 192px.*
**ATTENTION**: you can make rectangular buttons by passing *style* props with width or height. In this case, the size value will be overridden. Also if you change border-radius style you can make button different from the round ones. 
**example**:
```html
<ImageButton size={50} /> 
```

---

##### borderColor *(string)*
*The border color of the button. It can be colored passing color values accepted by CSS. By default it value is #a3acbe.*
**example**: 
```html
<ImageButton borderColor='grey' />
```

---