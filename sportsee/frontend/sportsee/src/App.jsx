import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
/**
 * Root component of the application.
 * Wraps the entire app with React Router's BrowserRouter for routing.
 *
 * @component
 * @returns {JSX.Element} The app wrapped in BrowserRouter with routes.
 */
function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
