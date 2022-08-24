import { createContext, useState } from "react";
import { supabase } from "../../libs/supabase";
import { IKitchenContext, IKitchenProvider } from "./types";

export const KitchenContext = createContext({} as IKitchenContext)

export function KitchenProvider({ children }: IKitchenProvider) {
  const [orderListDone, setOrderListDone] = useState([{ id: 0, clientName: "" }])

  const deleteOrder = async (id: number) => {
    try {
      const { data, error } = await supabase.from('order').delete().match({ id: id })
      window.location.reload()
      return { data, error };
    } catch (error) {
      console.log(error);
    }
    deleteOrder(id)
  }

  return (
    <KitchenContext.Provider value={{
      orderListDone,
      setOrderListDone,
      deleteOrder
    }}>
      {children}
    </KitchenContext.Provider>
  )
}
