import { expect } from 'chai';
import { renderComponent } from 'helpers/TestHelper';
import { Home } from './index';

describe('<Home />', () => {

    const component = renderComponent(Home);

    it('Renders with correct style', () => {
        const style = require('./style.css');
        expect(component.find(style.Home)).to.exist;
    });

});
