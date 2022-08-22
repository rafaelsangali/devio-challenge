import { createContext, useState } from "react";
import { IOrderContext, IOrderProvider, IProduct } from "./types";

export const OrderContext = createContext({} as IOrderContext)

export function OrderProvider({ children }: IOrderProvider) {
  const [modalOpen, setModalOpen] = useState(false)
  const [product, setProduct] = useState({} as IProduct)

  return (
    <OrderContext.Provider value={{
      modalOpen,
      setModalOpen,
      product,
      setProduct
    }}>
      {children}
    </OrderContext.Provider>
  )
}
