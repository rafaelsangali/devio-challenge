import { useContext } from "react"
import { Loading } from "../../components/Loading"
import { KitchenContext } from "../../contexts/KitchenContext"
import useFetch from "../../hooks/useFetch"

export default function Delivery() {
  const { orderList } = useFetch()
  const { orderListDone } = useContext(KitchenContext)

  return (
    <main className="grid grid-row-2 md:grid-cols-2">
      <section className="flex flex-col py-8 px-8 md:px-16 border-b-2 md:border-r-2 md:border-b-0 border-solid border-black">
        <h4 className="my-4 text-2xl font-extrabold">Preparando:</h4>
        {orderList ?
          orderList.map((order, index) => (
            <span className="text-[60px] font-extrabold text-gray-400"
              key={order.clientName + index}
            >
              {order.clientName}
            </span>
          )) : <Loading />}
      </section>
      <section className="py-8 px-8 md:px-16 flex flex-col">
        <h4 className="my-4 text-2xl font-extrabold">Pronto:</h4>
        {orderListDone ?
          orderListDone.map((order: { clientName: string, id: number }, index: number) => (
            order.clientName ?
              <span className="text-[60px] font-extrabold text-primary"
                key={order.clientName + index}
              >
                {order.clientName}
              </span>
              : ""
          )) : ""}
      </section>
    </main>
  )
}
