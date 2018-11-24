
import { mount } from 'enzyme'
import * as React from 'react'
import { Render } from './Render';
import { WrappingChildren } from './WrappingChildren';

describe("<WrappingChildren/>", () => {

  const Wrapper: React.SFC<{name: string}> = (props) => <div id={props.name}>{ props.children }</div>

  it('wraps all children with an outer element', () => {

    const underTest = mount(
      <WrappingChildren with={Wrapper}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </WrappingChildren>
    )
    expect(underTest.find(Wrapper)).toHaveLength(3);
  })
  it(`
    passes props to the Wrapper if
    withProps is specified
  `, () => {
    const underTest = mount(
      <WrappingChildren
        wrapperProps={{name: 'x'}}
        with={Wrapper}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </WrappingChildren>
    )
    expect(underTest.find(Wrapper)).toHaveLength(3)
    expect(underTest.find('#x')).toHaveLength(3)

  })
})