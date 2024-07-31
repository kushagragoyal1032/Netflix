import './App.css';
import Body from './components/Body';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Brose from './components/Brose';

function App() {

  const approuter = createBrowserRouter([
    {
      path: '/',
      element: <Body />,
      children: [
        {
          path: '/browse',
          element: <Brose />
        },
        {
          path: '/login',
          element: <Login />
        }
      ]
    }])

  return (
    <div>
      <RouterProvider router={approuter} />
    </div>
  )

}

export default App;
