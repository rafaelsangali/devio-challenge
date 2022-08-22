import { useContext } from "react"
import { OrderContext } from "../../contexts/OrderContext"

export default function DescriptionAndCounter() {
  const { product } = useContext(OrderContext)

  return (
    <div className="m-3 flex flex-col items-center">
      <h3 className="my-1 font-extrabold">{product.title}</h3>
      <p className="text-xs">{product.description}</p>
      <div className="my-3 flex items-center justify-between w-20 border-2 border-solid border-primary rounded-3xl">
        <button className="bg-primary bg-icon-minus bg-cover w-5 h-5 rounded-full" />
        <span className="px-2 text-xs">2</span>
        <button className="bg-primary bg-icon-plus bg-cover  w-5 h-5 rounded-full" />
      </div>
    </div>
  )
}
