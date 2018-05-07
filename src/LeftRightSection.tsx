import * as React from 'react'
import styled from 'styled-components'

const { Children } = React

const LeftRightContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
`
const Empty = () => (<div></div>)

export interface LeftRightSectionProps {
    children?: React.ReactNode
    style?: React.CSSProperties,
    className?: string
}

export const LeftRightSection: React.SFC<LeftRightSectionProps> = (props) => {
    const children = Children.toArray(props.children || []);    
    return (
        <LeftRightContainer>
            { children[0] ? children[0] : <Empty /> }
            { children[1] ? children[1] : <Empty /> }
        </LeftRightContainer>
    );
}

export default LeftRightSection