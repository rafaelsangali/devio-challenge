interface IOrderTicketModal {
  counter: number,
  product: string,
  price: number,
  observation?: string,
}

export default function OrderTicketModal({ counter, product, price, observation }: IOrderTicketModal) {
  return (
    <div className="px-10 py-5 border border-solid border-gray-300 rounded-md">
      <div className="my-5 flex flex-wrap justify-between text-xs text-gray-500">
        <span>{`${counter}x ${product}`}</span>
        <span>{`R$ ${(price * counter).toFixed(2)}`}</span>
      </div>
      <hr className="border-t-2 border-dotted border-gray-300 my-3" />
      <div className="m-2 flex flex-col">
        <span className="text-xs">Total do pedido:</span>
        <span className="my-2 font-extrabold">{`R$ ${(price * counter).toFixed(2)}`}</span>
      </div>
      {observation ?
        <span className="text-xs text-gray-500">{`Observações: ${observation}`}</span>
        : ""}
    </div>
  )
}
