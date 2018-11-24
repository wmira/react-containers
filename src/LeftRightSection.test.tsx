import { mount } from "enzyme";
import * as React from 'react'
import LeftRightSection from "./LeftRightSection";

import 'jest-styled-components'

describe('<LeftRightSection/>', () => {
  it('renders two children into a left and right section', () => {
    const Left: React.SFC = () => <div>Left</div>
    const Right: React.SFC = () => <div>Left</div>
    const underTest = mount(
      <LeftRightSection>
        <Left/>
        <Right/>
      </LeftRightSection>
    )

    expect(underTest).toHaveStyleRule('display', 'flex')
    expect(underTest).toHaveStyleRule('justify-content', 'space-between')
    expect(underTest.find(Left)).toHaveLength(1)
    expect(underTest.find(Right)).toHaveLength(1)
  })
  it('renders 2 divs if no children is found', () => {
    const underTest = mount(
      <LeftRightSection/>
    )
    expect(underTest.find('ReactContainers-Empty')).toHaveLength(2)
  })
  it('renders 1 div if one section is specified', () => {
    const underTest = mount(
      <LeftRightSection>
        <div>Left</div>
      </LeftRightSection>
    )
    expect(underTest.find('ReactContainers-Empty')).toHaveLength(1)
  })
})