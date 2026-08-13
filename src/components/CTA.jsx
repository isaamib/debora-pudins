export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-serif">
          Um pudim feito para marcar momentos.
        </h2>

        <p className="mt-6 text-lg">
          Escolha seu sabor e faça seu pedido.
        </p>

        <a
          href="#pedido"
          className="inline-block mt-8 px-8 py-4 rounded-full bg-black text-white"
        >
          Fazer pedido
        </a>
      </div>
    </section>
  );
}