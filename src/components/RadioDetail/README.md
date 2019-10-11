# RadioDetail
>This component is a View that renders a ImageButton between two IconButtons. All of these are clickable.

### Props
These are the props accepted by the component, pay attention to the description, inputs and behaviour:

---

##### imageTag *(string)*
*In the root of the project you should have an assets folder with images. This folder exports all the images that can be used by this component. The tag props is the name of the exported Module*.
**example**: 
```html
<RadioDetail imageTag='loadedImage1' />
```

---

##### onTouchImage *(function)*
*A callback function to when the ImageButton is clicked.*
**example**: 
```html
<RadioDetail onTouchImage={() => console.log('Clicked!')} />
```

---

##### style *(object)*
*CSS styles to be applyied in the View wapper wich contains the three images.*
**example**: 
```html
<RadioDetail style={{flexDirection: 'column'}} />, *it should change displacement of contents from horizontal to vertical.*
```

---