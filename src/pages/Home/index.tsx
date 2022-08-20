import CardCategory from "../../components/CardCategory";
import CardProduct from "../../components/CardProduct";
import { categories } from "./categoryObjetc";
import { products } from "./productsObject";

export default function Home() {

  return (
    <main className="py-12 px-6 md:px-10">
      <span className="block my-2 font-extrabold text-2xl ">Seja bem vindo !</span>
      <input className="bg-gray-200 my-2 py-2 px-2 rounded-md"
        type="text"
        placeholder="O que você procura?"
      />
      <section className="my-10">
        <h2 className="font-extrabold text-lg">Categorias</h2>
        <span className="text-gray-700 text-sm">Navegue por categoria</span>
        <div className="flex flex-wrap justify-center my-10">
          {categories.map(category => (
            <CardCategory
              src={category.img}
              text={category.title}
            />
          ))}
        </div>
      </section>
      <section className="my-10">
        <h2 className="font-extrabold text-lg">Produtos</h2>
        <span className="text-gray-700 text-sm">Selecione um produto para adicionar ao seu pedido</span>
        <div className="flex flex-wrap justify-center my-10 md:grid md:grid-cols-4 md:justify-items-center md:gap-y-20">
          {products.map(product => (
            <CardProduct
              src={product.img}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </section>
      <div className="flex flex-wrap justify-center md:justify-end my-20">
        <button className="w-52 h-10 m-4 border-2 border-solid border-gray-400 rounded-xl text-gray-400 font-extrabold hover:scale-105 hover:shadow-lg transition-transform">Cancelar</button>
        <button className="bg-gray-400 w-52 h-10 m-4 rounded-xl text-white font-extrabold hover:scale-105 hover:shadow-lg transition-transform">Finalizar Pedido</button>
      </div>
    </main>
  )
}
