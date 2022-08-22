import { createContext, useState } from "react";
import { IOrderContext, IOrderProvider } from "./types";

export const OrderContext = createContext({} as IOrderContext)

export function OrderProvider({ children }: IOrderProvider) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <OrderContext.Provider value={{
      modalOpen,
      setModalOpen,
    }}>
      {children}
    </OrderContext.Provider>
  )
}
