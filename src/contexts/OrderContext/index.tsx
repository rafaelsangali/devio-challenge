import { createContext, useState } from "react";
import { IOrder, IOrderContext, IOrderProvider, IProduct } from "./types";

export const OrderContext = createContext({} as IOrderContext)

export function OrderProvider({ children }: IOrderProvider) {
  const [modalOpen, setModalOpen] = useState(false)
  const [product, setProduct] = useState({} as IProduct)
  const [price, setPrice] = useState(0)
  const [counter, setCounter] = useState(1)
  const [observation, setObservation] = useState('')
  const [order, setOrder] = useState({} as IOrder)

  const closeAndResetModal = () => {
    setModalOpen(!modalOpen)
    setObservation('')
    setCounter(1)
  }

  const addOrder = () => {
    setOrder({
      quantity: counter,
      product: product.title,
      observation: observation,
      price: price
    })
    closeAndResetModal()
  }

  const productInfo = (infoProduct: IProduct) => {
    setModalOpen(!modalOpen)
    setPrice(infoProduct.price)
    setProduct(infoProduct)
  }

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
      setObservation,
      order,
      setOrder,
      closeAndResetModal,
      addOrder,
      productInfo,
    }}>
      {children}
    </OrderContext.Provider>
  )
}
