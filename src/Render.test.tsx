
import { mount } from 'enzyme'
import * as React from 'react'
import { Render } from './Render';

describe("<Render/>", () => {
  const MyComp: React.SFC = () => ( <div>Hello</div> )
  const provider = () => <MyComp>test</MyComp>
  const returnFalse = () => false
  const returnTrue = () => true
  it(`
    does not call children function
    when expr is falsy
  `, () => {
    const fn = jest.fn(provider)
    const underTest = mount(
                <Render
                  ifTrue={false}
                >
                  { fn }
                </Render>
    )
    // provider is not called thus no MyComp
    expect(underTest.find(MyComp).length).toBe(0)
    expect(fn).not.toHaveBeenCalled()
  })

  it(`
    calls children function
    when expr is truthy
  `, () => {
    const fn = jest.fn(provider)
    const underTest = mount(
                <Render
                  ifTrue={true}
                >
                  { fn }
                </Render>
    )
    // provider is called here
    expect(underTest.find(MyComp).length).toBe(1)
    expect(fn).toHaveBeenCalled()
  })

  it(`
    does not call children function
    when expr is a function and
    it returns false
  `, () => {
    const falsyFn = jest.fn(returnFalse)
    const fn = jest.fn(provider)
    const underTest = mount(
                <Render
                  ifTrue={falsyFn}
                >
                  { fn }
                </Render>
    )
    expect(underTest.find(MyComp).length).toBe(0)
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
    const underTest = mount(
                <Render
                  ifTrue={truthyFn}
                >
                  { fn }
                </Render>
    )
    expect(underTest.find(MyComp).length).toBe(1)
    expect(truthyFn).toHaveBeenCalledTimes(1)
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it(`
    does not render child element
    if expr is falsy
  `, () => {
    const underTest = mount(
                <Render
                  ifTrue={false}
                >
                  <MyComp />
                </Render>
    )
    expect(underTest.find(MyComp).length).toBe(0)
  })

  it(`
    renders child element
    if expr is truthy
  `, () => {

    const underTest = mount(
                <Render
                  ifTrue={true}
                >
                  <MyComp />
                </Render>
    )
    expect(underTest.find(MyComp).length).toBe(1)
  })

  it(`
    returns null if child function returns undefined
  `, () => {
    // we just make sure this renders properly and will not throw error
    // if fn returns undefined, react cant render
    const fn = jest.fn(() => undefined)
    const underTest = mount(
                  <Render
                    ifTrue={true}>
                    { fn }
                  </Render>
    )
    expect(underTest.childAt(0)).toHaveLength(0)

  })
  it(`passes data to child props if given`, () => {
    const data = "ABC"
    const childFn = jest.fn((d: string) => (<div>{data}</div>))
    const underTest = mount(
                  <Render
                    data={data}
                    ifTrue={true}>
                      { childFn }
                  </Render>
    )
    expect(childFn).toHaveBeenCalledWith(data)
  })
})