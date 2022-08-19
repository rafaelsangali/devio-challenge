interface ICardProduct {
  src: string
  title: string
  description: string
  price: string
}

export default function CardProduct({ src, title, description, price }: ICardProduct) {
  return <article className="bg-green-500 w-44 h-60 m-2 relative flex flex-col items-center text-center justify-center  rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition-transform cursor-pointer">
    <div className="z-20">
      <img className="my-1" src={src} alt={`Icone ${title}`} width={120} />
      <h3 className="my-1 font-extrabold">{title}</h3>
      <p className="text-xs">{description}</p>
      <p className="mt-6 font-extrabold">{price}</p>
    </div>
    <span className="bg-white absolute bottom-0 w-44 h-40 rounded-lg"></span>
  </article>;
}
