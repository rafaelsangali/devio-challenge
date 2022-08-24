import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";

export default function OrderTicketModal() {
  const { order } = useContext(OrderContext)

  return (
    <div className="px-10 py-5 border border-solid border-gray-300 rounded-md">
      <div className="my-5 flex flex-wrap justify-between text-xs text-gray-500">
        <span>{`${order.quantity}x ${order.product}`}</span>
        <span>{`R$ ${(order.price * order.quantity).toFixed(2)}`}</span>
      </div>
      <hr className="border-t-2 border-dotted border-gray-300 my-3" />
      <div className="m-2 flex flex-col">
        <span className="text-xs">Total do pedido:</span>
        <span className="my-2 font-extrabold">{`R$ ${(order.price * order.quantity).toFixed(2)}`}</span>
      </div>
      {order.observation ?
        <span className="text-xs text-gray-500">{`Observações: ${order.observation}`}</span>
        : ""}
    </div>
  )
}
