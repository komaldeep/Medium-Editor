import React from 'react';
// import expect from 'expect';
import {expect} from 'chai';
import { mount , shallow } from 'enzyme';
import App from '../components/Scenes/app';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

describe('<App />', () => {
     const component = mount(<App />);

    // beforeEach(() => {
    //   const component = mount(<App />, {context: {getMuiTheme}});
    // });

    //
    // it('should be defined', () => {
    //     expect(component).to.have.length(1);
    // });
    //
    // it('input field should be defined', () => {
    //     expect(component.find('input')).to.have.length(1);
    // });
    //
    // it('state email is', () => {
    //     expect(component.state().email).to.equal('komaldeep1993@gmail.com');
    // });

});
