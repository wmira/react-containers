
import * as React from 'react'
import { render } from 'react-dom'
import { Center } from '../'
import { InlineItems } from '../InlineItems';
import { MappingOver } from '../MappingOver'
export const CenterDemo = () => (
    <div style={{width: 300, height: 300, border: '1px solid #AAA'}}>
        <Center>
            Center
        </Center>
    </div>
)

export const InlineDemo = () => (
    <div style={{ width: 40, height: 300, border: '1px solid #AAA'}}>
        <InlineItems container={Center}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </InlineItems>
    </div>
)
const col = [
    { 'name': 'A' },
    { 'name': 'B' }
]
export class MappingOverDemo extends React.Component {

    public map = (o: any) => {
        return (
            <div>{ o.name }</div>
        )
    }

    public render() {
        return (
            <div>
                <MappingOver collection={col}>
                    { this.map }
                </MappingOver>
            </div>
        )
    }
}

const renderPlayground = () => {
    
    const element = document.getElementById('app')
    render( 
        <>
            <div style={{width: 'width: 100%', height: '100%'}}>            
                <CenterDemo/>
                <InlineDemo/>
                <MappingOverDemo/>
            </div>            
        </>
    , 
    element)
}

renderPlayground()