import ReactDOM from 'react-dom/client'
import App from './App'
import { OrderProvider } from './contexts/OrderContext'
import "./styles/global.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <OrderProvider>
    <App />
  </OrderProvider>
  // </React.StrictMode>
)
