import { createRoot } from 'react-dom/client'
import App from './App.js'

import './style.css';

const root = createRoot(document.querySelector('#root'))
const toto = 'tata'

root.render(
  <div>
    <App />
  </div>
)
