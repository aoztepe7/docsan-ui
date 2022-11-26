import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes/MainRoutes';
import './assets/sass/login.min.css';
import './assets/sass/common.min.css';


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
