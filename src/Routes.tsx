import { BrowserRouter, Route, Routes as RoutesReact } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Payment from "./pages/Payment";

export function Routes() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <RoutesReact>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
        </RoutesReact>
      </>
    </BrowserRouter>
  );
}
