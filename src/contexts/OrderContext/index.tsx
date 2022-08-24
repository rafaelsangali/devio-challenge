import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../libs/supabase";
import { IOrder, IOrderContext, IOrderProvider } from "./types";

export const OrderContext = createContext({} as IOrderContext)

export function OrderProvider({ children }: IOrderProvider) {
  const [modalOpen, setModalOpen] = useState(false)
  const [order, setOrder] = useState({} as IOrder)
  const navigate = useNavigate()

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
    navigate("/kitchen")
    return status
  }

  return (
    <OrderContext.Provider value={{
      modalOpen,
      setModalOpen,
      order,
      setOrder,
      saveProductInfo,
      insertData,
      handleInput
    }}>
      {children}
    </OrderContext.Provider>
  )
}
