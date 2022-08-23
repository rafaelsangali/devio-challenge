import { useContext } from "react"
import { OrderContext } from "../../contexts/OrderContext"

interface IAditionalsModal {
  text: string
  img: string
}
export default function AditionalsModal({ text, img }: IAditionalsModal) {
  const { price, setPrice } = useContext(OrderContext)
  const handleClick = (e: any) => {
    e.checked == true ? setPrice(price + 1) : setPrice(price - 1)
  }

  return (
    <div className="my-4 flex flex-wrap items-center justify-evenly">
      <div className="flex">
        <img className="shadow-xl rounded-md" src={img} width={50} alt="" />
        <div className="mx-3 w-12 font-medium text-sm grid content-center justify-items-center">
          {text}
          <span className="text-xs">10g</span>
        </div>
      </div>
      <div className="flex my-5">
        <span className="mx-3 text-xs text-gray-500">R$ 1,00</span>
        <input name={text} type="checkbox" onClick={(e: any) => handleClick(e.target)} />
      </div>
    </div>
  )
}
