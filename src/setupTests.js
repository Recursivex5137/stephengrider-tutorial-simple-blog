import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const enzymeSetup = Enzyme.configure({ adapter: new Adapter() });

export { enzymeSetup };


