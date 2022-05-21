
import Sidebar from './components/Sidebar/';
import { renderRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';

// context
import { UserInfoProvider } from './context/userContext';

import styles from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Sidebar />
          {renderRoutes()}
      </div>
    </BrowserRouter>
  );
}

export default App;
