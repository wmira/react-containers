# react-containers

Components and Higher Order Components for commonly used React containers

## Left and Right Sections


Provide a left and/or right section. The first element is the left section while the second element is the right section. Note that if you only require a right section then make sure that the first element is not empty.

```javascript
import { LeftRightSection } from 'react-containers';

//left and right
<LeftRightSection>
    <div>Left</div>
    <div>Right</div>
</LeftRightSection>

```

If you have right section only


```javascript
import { LeftRightSection } from 'react-containers';

//left and right
<LeftRightSection>
    <div></div>
    <div>Right Only</div>
</LeftRightSection>

```

## InlineItems


## CenteredContent

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

