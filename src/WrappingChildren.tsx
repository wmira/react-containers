
import * as React from 'react'

export interface IWrappingChildrenProp<W={}> {
    with: React.ComponentType<W>
    wrapperProps?: W
    children?: React.ReactChild | React.ReactChild[];
}

export const WrappingChildren: React.SFC<IWrappingChildrenProp> = props => {
    const { with: Wrapper, wrapperProps = {}} = props
    return (
        <>
            {
                React.Children.toArray(props.children).map( (child: React.ReactElement<any>, index: number) => {
                    return (
                        <Wrapper key={index} {...wrapperProps}>{ child }</Wrapper>
                    )
                })
            }
        </>
    )

}