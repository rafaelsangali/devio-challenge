import { useContext } from "react";
import { images } from "../../assets";
import { KitchenContext } from "../../contexts/KitchenContext";

interface ICardKitchenDone {
  id: number
  name: string
}

export default function CardKitchenDone({ id, name }: ICardKitchenDone) {
  const { deleteOrder } = useContext(KitchenContext)

  return (
    <div className="p-3 max-w-sm flex flex-wrap flex-col gap-4 shadow-lg shadow-green-500  rounded-lg">
      <div className="flex items-center justify-evenly gap-5">
        <img className="px-2 py-4 shadow-lg rounded-lg"
          src={images.imageHamgurguer}
          width={80}
          alt="Imagem Hambuguer"
        />
        <div className="grid gap-1">
          <span className="font-extrabold">{id} - {name}</span>
          <span className="text-xs">1x Smash da casa</span>
        </div>
        <button className="p-4 m-1 bg-red-300 bg-icon-x bg-cover bg-no-repeat rounded-lg hover:bg-red-400 transition-colors"
          onClick={() => deleteOrder(id)}
        />
      </div>
    </div>
  )
}
