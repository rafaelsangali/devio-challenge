import { createContext, useState } from "react";
import { IOrderContext, IOrderProvider, IProduct } from "./types";

export const OrderContext = createContext({} as IOrderContext)

export function OrderProvider({ children }: IOrderProvider) {
  const [modalOpen, setModalOpen] = useState(false)
  const [product, setProduct] = useState({} as IProduct)
  const [price, setPrice] = useState(0)
  const [counter, setCounter] = useState(1)
  const [observation, setObservation] = useState('')

  return (
    <OrderContext.Provider value={{
      modalOpen,
      setModalOpen,
      product,
      setProduct,
      price,
      setPrice,
      counter,
      setCounter,
      observation,
      setObservation
    }}>
      {children}
    </OrderContext.Provider>
  )
}
