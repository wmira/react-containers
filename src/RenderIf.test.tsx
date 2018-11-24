
import { mount } from 'enzyme'
import * as React from 'react'
import { RenderIf } from './RenderIf';

describe("<RenderIf/>", () => {
  const MyComp: React.SFC = () => ( <div>Hello</div> )
  const provider = () => <MyComp>test</MyComp>
  const returnFalse = () => false
  const returnTrue = () => true
  it(`
    does not call children function
    when expr is falsy
  `, () => {
    const fn = jest.fn(provider)
    const wrapper = mount(
                <RenderIf
                  expr={false}
                >
                  { fn }
                </RenderIf>
    )
    // provider is not called thus no MyComp
    expect(wrapper.find(MyComp).length).toBe(0)
    expect(fn).not.toHaveBeenCalled()
  })

  it(`
    calls children function
    when expr is truthy
  `, () => {
    const fn = jest.fn(provider)
    const wrapper = mount(
                <RenderIf
                  expr={true}
                >
                  { fn }
                </RenderIf>
    )
    // provider is called here
    expect(wrapper.find(MyComp).length).toBe(1)
    expect(fn).toHaveBeenCalled()
  })

  it(`
    does not call children function
    when expr is a function and
    it returns false
  `, () => {
    const falsyFn = jest.fn(returnFalse)
    const fn = jest.fn(provider)
    const wrapper = mount(
                <RenderIf
                  expr={falsyFn}
                >
                  { fn }
                </RenderIf>
    )
    expect(wrapper.find(MyComp).length).toBe(0)
    expect(falsyFn).toHaveBeenCalledTimes(1)
    expect(fn).not.toHaveBeenCalled()
  })

  it(`
    call children function
    when expr is a function and
    it returns true
  `, () => {
    const truthyFn = jest.fn(returnTrue)
    const fn = jest.fn(provider)
    const wrapper = mount(
                <RenderIf
                  expr={truthyFn}
                >
                  { fn }
                </RenderIf>
    )
    expect(wrapper.find(MyComp).length).toBe(1)
    expect(truthyFn).toHaveBeenCalledTimes(1)
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it(`
    does not render child element
    if expr is falsy
  `, () => {
    const wrapper = mount(
                <RenderIf
                  expr={false}
                >
                  <MyComp />
                </RenderIf>
    )
    expect(wrapper.find(MyComp).length).toBe(0)
  })

  it(`
    renders child element
    if expr is truthy
  `, () => {
    const wrapper = mount(
                <RenderIf
                  expr={true}
                >
                  <MyComp />
                </RenderIf>
    )
    expect(wrapper.find(MyComp).length).toBe(1)
  })
})