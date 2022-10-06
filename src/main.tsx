import React from 'react'
import ReactDOM from 'react-dom/client'
import {BlogApp} from './BlogApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BlogApp />
  </React.StrictMode>
)

