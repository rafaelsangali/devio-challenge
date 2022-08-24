import { createContext, useState } from "react";
import { supabase } from "../../libs/supabase";
import { IOrder, IOrderContext, IOrderProvider } from "./types";

export const OrderContext = createContext({} as IOrderContext)

export function OrderProvider({ children }: IOrderProvider) {
  const [modalOpen, setModalOpen] = useState(false)
  const [code, setCode] = useState(1)
  const [order, setOrder] = useState({} as IOrder)

  const handleInput = (e: any) => {
    const name = e.target.name
    const value = e.target.value
    setOrder({ ...order, [name]: value })
  }

  const saveProductInfo = (title: string, price: number) => {
    setModalOpen(!modalOpen)
    setOrder({ ...order, product: title, price: price, quantity: 1 })
  }

  const insertData = async () => {
    const { status } = await supabase.from("order").insert(order);
    console.log(status);
    return status
  }

  return (
    <OrderContext.Provider value={{
      modalOpen,
      setModalOpen,
      order,
      setOrder,
      saveProductInfo,
      code,
      setCode,
      insertData,
      handleInput
    }}>
      {children}
    </OrderContext.Provider>
  )
}
