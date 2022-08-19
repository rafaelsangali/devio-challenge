import { BrowserRouter, Route, Routes as RoutesReact } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

export function Routes() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <RoutesReact>
          <Route path="/" element={<Home />} />
        </RoutesReact>
      </>
    </BrowserRouter>
  );
}
