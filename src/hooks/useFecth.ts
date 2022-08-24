import { useEffect, useState } from "react";
import { supabase } from "../libs/supabase";

export default function useFecth<T = unknown>() {
  const [orderList, setOrderList] = useState<any[] | null>(null);

  useEffect(() => {
    const getOrderList = async () => {
      try {
        const { data } = await supabase.from("order").select("*")
        console.log(data);
        setOrderList(data)
      } catch (error) {
        console.log(error)
      }
    }
    getOrderList()
  }, [])
  return { orderList };
}
