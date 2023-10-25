import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import { BudgetsProvider } from "./contexts/BudgetsContext"

const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  const element = 
  <BudgetsProvider>
    <App />
  </BudgetsProvider>
  root.render(element);