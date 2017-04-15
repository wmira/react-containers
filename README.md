# react-containers

Components and Higher Order Components for commonly used React containers

## Left and Right Sections


Provide a left and/or right section. The first element is the left section while the second element is the right section. Note that if you only require a right section then make sure that the first element is not empty.

You can run/edit the example below via codesandbox or via playground vscode or webpack playground

Install vscode [React Playground Extension](https://marketplace.visualstudio.com/items?itemName=wmira.react-playground-vscode) and open the file LeftRightPlayground.js from the repository.
Launch React-Playground via Ctrl+Alt+P then select React Playground. You should see the screenshot below

![alt tag](https://raw.githubusercontent.com/wmira/react-containers/master/ss/playground-vscode.png) 

Invoke Example via npm playground script

```javascript
    npm install
    npm run playground -- playground/leftRightSection.js
```

[LeftRightSection example at codesandbox.io](https://codesandbox.io/s/R6XQoX4ww)

![alt tag](https://raw.githubusercontent.com/wmira/react-containers/master/ss/lrsection.png) 

Left And Right Section

```javascript
import { LeftRightSection, Center } from 'react-containers';

//left and right
<LeftRightSection>                   
    <div><Center><ProductTitle>Cool Product</ProductTitle></Center></div>
    <div><Center><Menus/></Center></div>                    
</LeftRightSection>     

```

Left Side Only

```javascript
import { LeftRightSection, Center } from 'react-containers';

<LeftRightSection>
    <div><Center><ProductTitle>Cool Product</ProductTitle></Center></div>
</LeftRightSection>
```

Right Side Only


```javascript
import { LeftRightSection, Center } from 'react-containers';

<LeftRightSection>
    <div></div>
    <div><Center><Menus/></Center></div>
</LeftRightSection>

```

## InlineItems


## Center

This container will center horizontally and verticall a component rendered inside. By default it will automatically centered within the parent container as so...

```javascript

import { Center } from 'react-containers'

<div style={{width: 250, height: 250}}>
    <Center><SomeComponent /></Center>
</div>

```

You can also choose to specify the dimension of the container...

```javascript

import { Center } from 'react-containers'


<Center style={{width: 250, height: 250}}>
    <SomeComponent />
</Center>


```

## RenderIf

Will call the function child if expression is true. Note that the child of this
needs to be a function.

```javascript
<RenderIf expr={this.props.shouldRender}>
   { (props) => <MyComponent {...props} /> };
</RenderIf>

//below is the same but the function child is not recreated on each render

class MyComponent extends React.Component {

    showToggledView = () {
        return <ToggledView {...this.props.toggledProps }/>;
    }

    render() {
        return (
            <div>
                <SomeComponent />
                <RenderIf expr={this.props.isToggled}>
                    { this.showToggledView }
                </RenderIf>
            </div>
        )
    }

}
```

