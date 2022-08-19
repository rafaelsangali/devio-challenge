import { categories } from "./categoryObjetc";

export default function Home() {

  return (

    <main className="py-12 px-6 md:px-10">
      <span className="block my-2 font-extrabold text-2xl ">Seja bem vindo !</span>
      <input className="bg-gray-200 my-2 py-2 px-2 rounded-md" type="text" placeholder="O que você procura?" />
      <section className="my-2">
        <h2 className="font-extrabold text-lg">Categorias</h2>
        <span className="text-gray-700 text-sm">Navegue por categoria</span>
        <div className="flex flex-wrap justify-center">
          {categories.map(category => (
            <button className="w-60 h-44 flex flex-col items-center justify-center rounded-lg m-2 shadow-md hover:scale-105 hover:shadow-lg transition-transform cursor-pointer">
              <img src={category.img} width={100} alt={`Icone ${category.title}`} />
              <h3>{category.title}</h3>
            </button>
          ))}

        </div>
      </section>
    </main>

  )
}
