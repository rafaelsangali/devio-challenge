import { useContext } from "react"
import { OrderContext } from "../../contexts/OrderContext"

export default function OrderTicket() {
  const { counter, price, product } = useContext(OrderContext)

  return (
    <div className="px-10 py-5 border border-solid border-gray-300 rounded-md">
      <div className="my-5 flex flex-wrap justify-between text-xs text-gray-500">
        <span>{`${counter}x ${product.title}`}</span>
        <span>{`R$ ${price * counter}`}</span>
      </div>
      <hr className="border-t-2 border-dotted border-gray-300" />
      <div className="m-2 flex flex-col">
        <span className="text-xs">Total do pedido:</span>
        <span className="my-2 font-extrabold">{`R$ ${price * counter}`}</span>
      </div>
    </div>
  )
}
