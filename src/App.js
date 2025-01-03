import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import { Outlet } from 'react-router-dom';
import Body from './components/Body';
import ResCard from './components/ResCard';
import { Provider } from 'react-redux';
import appStore from '../utils/appStore';

function App() {
  return (<div>
     <Header />
            <Provider store={appStore}>
     
      <Outlet />
     
    </Provider>
     <Footer />
  </div>);
}

const Grocery = lazy(() => import('./components/Grocery'));

const approuter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Body /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/cart', element: <Cart /> },
      { path: '/rest/:id', element: <ResCard /> },
      {
        path: '/groc',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={approuter} />
  </React.StrictMode>
);
