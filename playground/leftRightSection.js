

import React from 'react';
import { render } from 'react-dom';
import { LeftRightSection } from 'react-containers';

class LeftRightExample extends React.Component {


    render() {
        return (
            <div>
                <div> Left and Right section </div>
                <div style={{width: 320, border: '1px solid blue'}}>
                    <LeftRightSection>                   
                        <div>Left Side</div>
                        <div>Right Side</div>
                    </LeftRightSection>     
                </div>
                <br/>           
                <div> Right Side Only </div> 
                <br/>
                <div style={{width: 320, border: '1px solid green'}}>                               
                    <LeftRightSection>
                        <div></div>
                        <div>Right Side</div>
                    </LeftRightSection>
                </div>
            </div>
        );
    }
}

render(<LeftRightExample />, document.getElementById('app'));