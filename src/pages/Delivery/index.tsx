import useFecth from "../../hooks/useFecth"

export default function Delivery() {
  const { orderList } = useFecth()

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
          )) : <p>Ocorreu algo de errado</p>}
      </section>
      <section className="py-8 px-8 md:px-16">
        <h4 className="my-4 text-2xl font-extrabold">Pronto:</h4>
        <span className="text-[60px] font-extrabold text-primary">Luiza</span>
      </section>
    </main>
  )
}
