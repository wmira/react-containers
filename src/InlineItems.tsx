
import * as React from 'react';
import styled from 'styled-components';
import { MappingOver } from './MappingOver';
import { Flex } from './styled'
const { Children } = React

export interface InlineItemsProps {
    rAlign?: boolean // is it right align?, default is false
    children?: React.ReactNode | React.ReactNode[]
    container?: React.ComponentType
}

const RightPad = styled.div`
    padding-right: 4px;
`
const LeftPad = styled.div`
    padding-right: 4px;
`

RightPad.displayName = "ReactContainers-RightPad"
LeftPad.displayName = "ReactContainers-LeftPad"

const getContainerToUse = (props:InlineItemsProps) => {
    if ( props.container ) {
        return props.container
    }
    if ( props.rAlign ) {
        return LeftPad
    }

    return RightPad
}

export class InlineItems extends React.PureComponent<InlineItemsProps> {

    public static displayName = "ReactContainers-InlineItems"
    public static defaultProps = { rAlign: false }

    public renderChild = (child: React.ReactChild, index: number) => {
        const Container = getContainerToUse(this.props)
        return <Container key={index}>{ child }</Container>;
    }
    public render() {
        const { props } = this
        return (
            <Flex>
                <MappingOver
                    collection={Children.toArray(props.children) || []}>
                    { this.renderChild }
                </MappingOver>
            </Flex>
        )
    }
}

