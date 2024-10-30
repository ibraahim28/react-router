import logo from './logo.svg';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Router from './config/AppRouter';

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element:(<h2>Hello World</h2>)
  //   },
  //   {
  //     path: '/about',
  //     element:(<h2>Hello About</h2>)
  //   },
  //   {
  //     path: '/profile',
  //     element:(<h2>Hello Profile</h2>)
  //   },
  // ])
  return (
    <div className="App text-center ">
      
     <Router />
    </div>
  );
}

export default App;
