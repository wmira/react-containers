import * as React from 'react'
import styled from 'styled-components'
import { Flex } from './styled';

const { Children } = React

const LeftRightContainer = styled(Flex)`
    justify-content: space-between;
`
const Empty: React.SFC = () => (<div/>)
Empty.displayName = 'ReactContainers-Empty'

export interface ILeftRightSectionProps {
    children?: React.ReactNode
    style?: React.CSSProperties,
    className?: string
}

export const LeftRightSection: React.SFC<ILeftRightSectionProps> = (props) => {
    const children = Children.toArray(props.children || []);
    return (
        <LeftRightContainer>
            { children[0] ? children[0] : <Empty /> }
            { children[1] ? children[1] : <Empty /> }
        </LeftRightContainer>
    );
}

export default LeftRightSection