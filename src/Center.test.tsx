
import * as React from 'react'
import * as Enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import { shallow } from 'enzyme'
import { Center } from './Center'

Enzyme.configure({ adapter: new Adapter() });

describe('Center', () => {
    it('renders using flex and centers items', () => {
        const wrapper = shallow(<Center><div>Hello</div></Center>);
        expect(wrapper.find('.sc-bdVaJa .gIMrlE').length).toBe(1)
    })
})