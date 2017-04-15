

import React from 'react';
import { render } from 'react-dom';
import { LeftRightSection, Center, InlineItems } from 'react-containers';

import styled from 'styled-components';

const Container = styled.div`
    width: 620px;
    border: 1px solid;
    background: #262626;
    height: 62px;
    color: #FFF;
    padding: 6px;
`;

const Menus = () => (
    <InlineItems space={8}>
        <span>Menu1</span>
        <span>Menu2</span>
        <span>Menu3</span>
    </InlineItems>
);

const ProductTitle = styled.div`
    font-weight: bold;
    font-size: 16px;
    color: #00d8ff;
`

const Title = styled.div`
    font-size: 14;
    padding: 10px;
`

class LeftRightExample extends React.Component {


    render() {
        return (
            <div>
                <Title> Left and Right section </Title>
                <Container>
                    <LeftRightSection>                   
                        <div><Center><ProductTitle>Cool Product</ProductTitle></Center></div>
                        <div><Center><Menus/></Center></div>
                    </LeftRightSection>     
                </Container>
                <Title> Left Side Only </Title>                 
                <Container>                               
                    <LeftRightSection>
                        <div><Center><ProductTitle>Cool Product</ProductTitle></Center></div>
                    </LeftRightSection>
                </Container>
                <Title> Right Side Only </Title>                 
                <Container>                               
                    <LeftRightSection>
                        <div></div>
                        <div><Center><Menus/></Center></div>
                    </LeftRightSection>
                </Container>
            </div>
        );
    }
}

render(<LeftRightExample />, document.getElementById('app'));