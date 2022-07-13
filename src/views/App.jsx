import "./App.css";

import Menu from '.././layout/Menu';
import Content from '.././layout/Content';
import Footer from '../layout/Footer';

const App = () => (
    <div className='App container-fluid h-100'>
      <div className='row'>
        <div className='col-3'>
          <div className='container-fuid h-100'>
            <Menu></Menu>
          </div>
        </div>
        <div className='col-9'>
          <div className='container-fluid h-100'>
            <Content></Content>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <Footer></Footer>
        </div>
      </div>
    </div>
);

export default App;
