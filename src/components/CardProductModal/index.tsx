import { images } from "../../assets";

export default function CardProductModal() {
  return (
    <div className="bg-green-500 w-20 h-20 mx-2 my-4 relative flex flex-col items-center text-center justify-center  rounded-lg shadow-md">
      <div className="z-20">
        <img className="my-1"
          src={images.imageHamgurguer}
          width={70}
          alt={`Icone hamburguer`}
        />
      </div>
      <span className="bg-white absolute bottom-0 w-20 h-11 rounded-lg"></span>
    </div>
  )
}
