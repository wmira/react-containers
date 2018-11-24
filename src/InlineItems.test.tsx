import { mount } from "enzyme";
import * as React from 'react'
import { InlineItems } from "./InlineItems";

import 'jest-styled-components'

describe('<InlineItems/>', () => {
  it('renders items inlined', () => {
    const underTest = mount(
      <InlineItems>
        <div className='x'>A</div>
        <div className='x'>B</div>
      </InlineItems>
    )
    expect(underTest).toHaveStyleRule('display', 'flex')
    expect(underTest.find('.x')).toHaveLength(2)
  })
  it('uses container for items if specified', () => {
    const CustomCont: React.SFC = (props) => <div>{ props.children }</div>
    const underTest = mount(
      <InlineItems container={CustomCont}>
        <div className='x'>A</div>
        <div className='x'>B</div>
      </InlineItems>
    )
    expect(underTest).toHaveStyleRule('display', 'flex')
    // container is there
    expect(underTest.find(CustomCont)).toHaveLength(2)
    // children still there
    expect(underTest.find('.x')).toHaveLength(2)
  })
  it('it left pads items if rAlign is true', () => {
    const underTest = mount(
      <InlineItems rAlign={true}>
        <div className='x'>A</div>
        <div className='x'>B</div>
        <div className='x'>C</div>
      </InlineItems>
    )

    expect(underTest.find('ReactContainers-LeftPad')).toHaveLength(3)
  })
})