export default function Delivery() {
  return (
    <main className="grid grid-row-2 md:grid-cols-2">
      <section className="py-8 px-8 md:px-16 border-b-2 md:border-r-2 md:border-b-0 border-solid border-black">
        <h4 className="my-4 text-2xl font-extrabold">Preparando:</h4>
        <span className="text-[60px] font-extrabold text-gray-400">Carlos</span>
      </section>
      <section className="py-8 px-8 md:px-16">
        <h4 className="my-4 text-2xl font-extrabold">Pronto:</h4>
        <span className="text-[60px] font-extrabold text-primary">Luiza</span>
      </section>
    </main>
  )
}
