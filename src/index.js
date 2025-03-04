import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Sass/style.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Portfolio from './Pages/Portfolio';
import Hiring from './Pages/Hiring';
import ApplyNowPage from './Pages/ApplyNow';
import JobDetailsPage from './Pages/JobDetails';
import ContactusPage from './Pages/ContactUs';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },{
    path: '/about-us',
    element: <AboutUs />,
  },{
    path: '/portfolio',
    element: <Portfolio />,
  },
  {
    path: '/hiring',
    element: <Hiring />,
  },
  {
    path: '/hiring/jobdetails/:id', 
    element: <JobDetailsPage />,
  },
  {
    path: '/hiring/applynow/:id', 
    element: <ApplyNowPage />,
  },
  {
    path: '/contact-us', 
    element: <ContactusPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
