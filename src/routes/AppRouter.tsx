import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { FormsPage, HomePage } from "../pages";
import { AuthHOC } from "../components";

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Your main layout component, if you have one
    children: [ // Nested routes for components rendered within App
        {
          index: true, // This makes Home the default child route for '/'
          element: <HomePage />,
        },
      {
        path: 'formspage',
        element: <FormsPage />,
      },
      {
        path: 'hoc',
        element: <AuthHOC />,
      },
    ],
  },
]);

export default AppRouter;