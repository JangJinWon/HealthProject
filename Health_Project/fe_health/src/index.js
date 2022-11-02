import { createRoot } from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"

import App from "./App"

import store from "./redux/configureStore"
import { Provider } from "react-redux"

// 👇️ IMPORTANT: make sure to specify correct ID
// must be the ID of the div element in your index.html file
const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
