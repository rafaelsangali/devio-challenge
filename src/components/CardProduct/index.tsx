import { useContext } from "react"
import { OrderContext } from "../../contexts/OrderContext"
import { IProduct } from "../../contexts/OrderContext/types"

interface ICardProduct {
  src: string
  title: string
  description: string
  price: number
}

export default function CardProduct({ src, title, description, price }: ICardProduct) {
  const { modalOpen, setModalOpen, setProduct, setPrice, counter } = useContext(OrderContext)
  function handleClick(infoProduct: IProduct) {
    setModalOpen(!modalOpen)
    setPrice(infoProduct.price)
    setProduct(infoProduct)
  }

  return (
    <article className="bg-green-500 w-44 h-60 m-2 relative flex flex-col items-center text-center justify-center  rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition-transform cursor-pointer"
      tabIndex={0}
      onClick={() => handleClick({ title, description, price })}
    >
      <div className="z-20">
        <img className="my-1"
          src={src}
          width={120}
          alt={`Icone ${title}`}
        />
        <h3 className="my-1 font-extrabold">{title}</h3>
        <p className="text-xs">{description}</p>
        <p className="mt-6 font-extrabold">{`R$ ${price.toFixed(2)}`}</p>
      </div>
      <span className="bg-white absolute bottom-0 w-44 h-40 rounded-lg"></span>
    </article>
  )
}
