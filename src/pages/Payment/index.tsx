import { Link } from "react-router-dom";
import OrderTicket from "../../components/OrderTicket";
import { paymentForm } from "./PaymentFormObject";

export default function Payment() {
  return (
    <main className="grid h-[90vh] items-center md:grid-cols-2 ">
      <section className="py-12 px-6 gap-5 md:px-10 ">
        <h2 className="text-2xl font-extrabold my-2 pl-14 bg-icon-wallet bg-contain bg-no-repeat">Pagamento</h2>
        <div className="my-10">
          <span className="block font-extrabold my-2">Resumo da compra</span>
          <OrderTicket />
        </div>
        <div className="flex flex-wrap gap-5 my-4">
          <div className="flex flex-col items-start">
            <label className="font-extrabold"
              htmlFor="client-name"
            >
              Nome do cliente
            </label>
            <input className="bg-gray-200  py-1 px-3 rounded-md"
              type="text"
              name="client-name"
              id="client-name"
              placeholder="Primeiro Nome"
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="font-extrabold"
              htmlFor="client-code"
            >
              Código
            </label>
            <input className="bg-gray-200 text-center w-10 py-1 px-3 rounded-md"
              type="text"
              name="client-code"
              id="client-code"
              value={1}
              disabled
            />
          </div>
        </div>
      </section>
      <section className="py-6 px-6 md:px-10 flex flex-col gap-6">
        <span className="block font-extrabold my-2">Seleciona a forma de pagamento</span>
        <div className="flex flex-col gap-4">
          {paymentForm.map((form, index) => (
            <label className={`max-w-[400px] py-4 px-5 flex justify-around border border-solid border-gray-300 rounded-md hover:border-primary transition-colors cursor-pointer ${form.img} bg-no-repeat bg-[length:30px_30px] bg-[center_left_1rem] `}
              key={form.title + index}
              htmlFor={form.title}
            >
              {form.title}
              <input name={form.title} id={form.title} type="radio" />
            </label>
          ))}
        </div>
        <div className="flex flex-wrap gap-5">
          <label className="font-extrabold grid"
            htmlFor="exchange"
          >
            Valor Entregue
            <input className="bg-gray-200 font-normal text-center max-w-[120px] py-1 px-3 rounded-md"
              type="text"
              name="exchange"
              id="exchange"
            />
          </label>
          <label className="font-extrabold grid"
            htmlFor="result">
            Troco
            <input className="bg-gray-200 font-normal text-center max-w-[120px] py-1 px-3 rounded-md"
              type="number"
              name="result"
              id="result"
              disabled
              value={"1203"}
            />
          </label>
        </div>
        <div className="my-5 flex flex-wrap justify-center sm:justify-start">
          <Link className="w-48 h-10 my-2 mx-1 flex items-center justify-center border border-solid border-primary text-primary rounded-lg cursor-pointer hover:scale-105 transition-transform"
            type="button"
            to={"/"}
          >
            Cancelar
          </Link>
          <input className="w-48 h-10 my-2 mx-1 bg-primary text-white rounded-lg cursor-pointer hover:scale-105 transition-transform"
            type="button"
            value="Finalizar pedido"
          />
        </div>
      </section>
    </main >
  )
}
