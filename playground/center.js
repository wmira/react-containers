

import React from 'react';
import { render } from 'react-dom';
import { Center } from 'react-containers';

class CenterExample extends React.Component {


    render() {
        return (
            <div>
                <div> Specify Width and Height </div>                
                <Center style={{width: 250, height: 100, border: '1px solid #999'}}>
                    <div>This is V and H Centered</div>
                </Center>                
                <div> Center in a parent container </div>
                <div style={{width: 80, height: 155, border: '1px solid green' }}>
                    <Center>
                        <div>Centered</div>
                    </Center>                
                </div>
            </div>
        );
    }
}

render(<CenterExample />, document.getElementById('app'));