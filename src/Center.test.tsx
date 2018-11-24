
import { mount } from 'enzyme'
import 'jest-styled-components'
import * as React from 'react'
import { Center } from './Center'


describe('Center', () => {
    it('renders using flex and centers items', () => {
      const wrapper = mount(<Center><div>Hello</div></Center>);

      expect(wrapper).toHaveStyleRule('display', 'flex')
      expect(wrapper).toHaveStyleRule('justify-content', 'center')
      expect(wrapper).toHaveStyleRule('align-items', 'center')
      expect(wrapper).toHaveStyleRule('height', '100%')
      expect(wrapper).toHaveStyleRule('width', '100%')
    })
})