import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux'
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import { store } from './store/store';
import {BlogApp} from './BlogApp'
import './styles.css'


const queryClient = new QueryClient()
let persistor = persistStore(store);



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    <Provider store={store}>
    <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <BlogApp />
          </BrowserRouter>
        </QueryClientProvider>
     </PersistGate>
    </Provider>
      
  </React.StrictMode>
)

