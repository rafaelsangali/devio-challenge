import { useEffect, useState } from "react";
import { supabase } from "../libs/supabase";

export default function useFetch<T = unknown>() {
  const [orderList, setOrderList] = useState<any[] | null | undefined>(null);

  useEffect(() => {
    const getOrderList = async () => {
      try {
        const { data } = await supabase.from("order").select("*")
        setOrderList(data)
      } catch (error) {
        console.log(error)
      }
    }
    getOrderList()
  }, [])
  return { orderList, setOrderList };
}
