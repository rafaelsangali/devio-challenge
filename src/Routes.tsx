import { BrowserRouter, Route, Routes as RoutesReact } from "react-router-dom";
import Header from "./components/Header";
import { OrderProvider } from "./contexts/OrderContext";
import Delivery from "./pages/Delivery";
import Home from "./pages/Home";
import Kitchen from "./pages/Kitchen";
import Payment from "./pages/Payment";

export function Routes() {
  return (
    <BrowserRouter>
      <OrderProvider>
        <>
          <Header />
          <RoutesReact>
            <Route path="/" element={<Home />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/kitchen" element={<Kitchen />} />
            <Route path="/delivery" element={<Delivery />} />
          </RoutesReact>
        </>
      </OrderProvider>
    </BrowserRouter>
  );
}
