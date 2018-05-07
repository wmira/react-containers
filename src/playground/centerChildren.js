

import React from 'react';
import { render } from 'react-dom';
import { centerChildren } from 'react-containers';

const MyCustomComp = props => (
    <div >
        { props.children }
    </div>
);
const MyCenteredCustomComp = centerChildren(MyCustomComp);

const Item = (props) => <div style={{display: 'inline-block', padding: 10, border: '1px solid darksalmon'}}>{ props.children }</div>

class CenterChildrenExample extends React.Component {


    render() {
        return (
            <div>
                <div> No Hoc - Horizontally Center Children </div>
                <MyCustomComp>
                    <Item>1</Item>
                    <Item>2</Item>
                    <Item>3</Item>
                </MyCustomComp>
                <br/>
                <div> Horizontally Centered Children </div>                
                <MyCenteredCustomComp>
                    <Item>1</Item>
                    <Item>2</Item>
                    <Item>3</Item>
                </MyCenteredCustomComp>
            </div>
        );
    }
}

render(<CenterChildrenExample />, document.getElementById('app'));