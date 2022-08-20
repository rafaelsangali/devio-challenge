import { images } from "../../assets";
import OrderTicket from "../../components/OrderTicket";

export default function OrderModal() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-[2px] flex py-10 justify-center overflow-y-auto">
      <form className="bg-white p-5 rounded w-3/4 h-min relative">
        <span className="text-xl font-extrabold">Revise seu Pedido!</span>
        <button className="w-5 h-5 bg-contain absolute top-5 right-4 bg-icon-close" />
        {/* section containing card and counter */}
        <section className="flex flex-wrap items-center justify-center md:justify-evenly">
          <CardProductModal />
          <DescriptionAndCounter />
          <span className="font-extrabold m-4">R$30,50</span>
        </section>
        {/* Section containing additional products */}
        <section className="my-10">
          <label className="text-md font-extrabold">Adicionais</label>
          <p className="text-xs">Selecione os ingredientes que você quer adicionar a mais no seu lanche</p>
          <Aditional
            text={"Bacon"}
            img={images.imageBacon}
          />
          <Aditional
            text={"Cheddar"}
            img={images.imageCheddar}
          />
          <Aditional
            text={"Barbecue"}
            img={images.imageBarbecue}
          />
        </section>
        {/* Section containing customer note */}
        <section>
          <label className="text-md font-extrabold"
            htmlFor="observation"
          >
            Observaçãoes
          </label>
          <textarea className="bg-gray-100 resize-none p-3 my-3 w-full rounded-lg"
            name="observation"
            id="observation"
            cols={30}
            rows={5}
            placeholder="Adicione uma observação ao seu pedido"
          />
        </section>
        <OrderTicket />
        <div className="my-5 flex flex-wrap justify-evenly">
          <input className="w-48 h-7 my-2 border border-solid border-primary text-primary rounded-lg cursor-pointer hover:scale-105 transition-transform"
            type="button"
            value="Continuar Adicionando"
          />
          <input className="w-48 h-7 my-2 bg-primary text-white rounded-lg cursor-pointer hover:scale-105 transition-transform"
            type="Submit"
            value="Adicionar ao pedido"
          />
        </div>
      </form>
    </div >
  )
}

function CardProductModal() {
  return (
    <div className="bg-green-500 w-20 h-20 mx-2 my-4 relative flex flex-col items-center text-center justify-center  rounded-lg shadow-md">
      <div className="z-20">
        <img className="my-1" src={images.imageHamgurguer} alt={`Icone hamburguer`} width={70} />
      </div>
      <span className="bg-white absolute bottom-0 w-20 h-11 rounded-lg"></span>
    </div>
  )
}

function DescriptionAndCounter() {
  return (
    <div className="m-3 flex flex-col items-center">
      <h3 className="my-1 font-extrabold">Smash da casa</h3>
      <p className="text-xs">2x hambúrguer 200g</p>
      <div className="my-3 flex items-center justify-between w-20 border-2 border-solid border-primary rounded-3xl">
        <button className="bg-primary bg-icon-minus bg-cover w-5 h-5 rounded-full" />
        <span className="px-2 text-xs">2</span>
        <button className="bg-primary bg-icon-plus bg-cover  w-5 h-5 rounded-full" />
      </div>
    </div>
  )
}

interface IAditional {
  text: string
  img: string
}
function Aditional({ text, img }: IAditional) {
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
        <input type="checkbox" />
      </div>
    </div>
  )
}
