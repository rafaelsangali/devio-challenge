interface ICardCategory {
  src: string
  text: string
}

export default function CardCategory({ src, text }: ICardCategory) {
  return (
    <button className="w-60 h-44 flex flex-col items-center justify-center rounded-lg m-2 shadow-md hover:scale-105 hover:shadow-lg transition-transform cursor-pointer">
      <img
        src={src}
        width={100}
        alt={`Icone ${text}`}
      />
      <h3>{text}</h3>
    </button>
  )
}
