
import * as React from 'react';
import styled from 'styled-components';

const { Children } = React

export interface InlineItemsProps {
    rAlign?: boolean //is it right align?, default is false
    padding?: number //the default padding
    children?: React.ReactNode    
    container?: React.ReactType
}

const InlineContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const InlineItems: React.SFC<InlineItemsProps> = (props: InlineItemsProps ) => (
    <InlineContainer>
        { Children.toArray(props.children || []).map( (child, idx) => {
            const spacerField = props.rAlign ? 'paddingLeft' : 'paddingRight';
            const ContainerToUse = props.container
            if ( ContainerToUse ) {
                return <ContainerToUse style={{ [spacerField]: props.padding }} key={idx} >{ child }</ContainerToUse>
            }
            return <div style={{ [spacerField]: props.padding }}>{ child }</div>;
        })}
    </InlineContainer>
);

InlineItems.defaultProps = {
    padding: 4,
    rAlign: false
};

