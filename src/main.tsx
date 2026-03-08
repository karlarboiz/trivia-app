import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./index.css";
import { store } from './redux/store-config';
import { router as routerConfig } from './routes/Routes';

const router = createBrowserRouter(routerConfig); 
 
createRoot(document.getElementById('root')!).render(
  < Provider store={store}> 
    <RouterProvider router={router}  />
  </Provider>,
)
