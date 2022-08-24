import { useContext } from "react"
import { images } from "../../assets"
import { KitchenContext } from "../../contexts/KitchenContext"

interface ICardPreparing {
  id: number
  name: string
  observation: string | null
}
export default function CardKitchenPreparing({ id, name, observation }: ICardPreparing) {
  const { orderListDone, setOrderListDone } = useContext(KitchenContext)

  return (
    <div className="p-3 max-w-sm flex flex-wrap flex-col gap-4 shadow-lg rounded-lg">
      <div className="flex items-center justify-evenly gap-5">
        <img className="px-2 py-4 shadow-lg rounded-lg"
          src={images.imageHamgurguer}
          width={80}
          alt="Imagem Hambuguer"
        />
        <div className="grid gap-1">
          <span className="font-extrabold">{`${id} - ${name}`}</span>
          <span className="text-xs">1x Smash da casa</span>
        </div>
        <div>
          <button className="p-4 m-1 bg-red-300 bg-icon-x bg-cover bg-no-repeat rounded-lg hover:bg-red-400 transition-colors" />
          <button className="p-4 m-1 bg-green-300 bg-icon-check bg-cover bg-no-repeat rounded-lg hover:bg-green-400 transition-colors"
            onClick={() => setOrderListDone([...orderListDone, { id: id, clientName: name }])}
          />
        </div>
      </div>
      {observation ? (
        <label className="grid font-extrabold"
          htmlFor="observation"
        >
          Observações:
          <textarea className="p-4 resize-none font-normal"
            name="observation"
            id="observation"
            cols={30}
            rows={2}
            value={observation}
            disabled
          />
        </label>
      ) : ""}
    </div>
  )
}
