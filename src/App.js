import { RouterProvider } from 'react-router-dom';
import Router from './routes/Router/Router';
import './App.css';

function App() {
  return (
    <div>
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
