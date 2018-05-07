

import * as React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

import { Center } from '../Center'

const CenterCont = styled.div`
    height: 42px;
    width: 320px;
    border: 1px solid #E5E5E5;
`

const SpanCont = styled.div`
    padding: 4px;
    margin: 4px;
    border: 1px solid green;
`

const StyledCenter = styled(Center)`
    background: pink;
    color: white;
`

const CenterDemo  = () => (
    <div>
        <CenterCont>
            <Center>
                <SpanCont>Item 1</SpanCont>
                <SpanCont>Item 2</SpanCont>
                <SpanCont>Item 3</SpanCont>
            </Center>
        </CenterCont>    
        <CenterCont>
            <StyledCenter>
                <SpanCont>Item 1</SpanCont>
                <SpanCont>Item 2</SpanCont>
                <SpanCont>Item 3</SpanCont>
            </StyledCenter>
        </CenterCont>        
    </div>
)


render(<CenterDemo />, document.getElementById('app'))