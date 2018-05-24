
import * as React from 'react'
import { render } from 'react-dom'
import { Center } from '../'

export const CenterDemo = () => (
    <div style={{width: 300, height: 300, border: '1px solid #AAA'}}>
        <Center>
            Center
        </Center>
    </div>
)

const renderPlayground = () => {
    const element = document.getElementById('app')
    render( (
        <div style={{width: '100%', height: '100%'}}>
            <CenterDemo/>
        </div>
    ), 
    element)
}