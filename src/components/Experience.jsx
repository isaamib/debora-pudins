export default function Experience() {
  return (
    <section className="py-24 px-6 bg-[#f8f5f0]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <span className="text-sm uppercase tracking-[0.2em]">
            Experiência
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-serif">
            Um sabor que fica na memória.
          </h2>

          <p className="mt-6 text-lg leading-relaxed">
            Cada pudim é preparado com cuidado, ingredientes selecionados
            e aquele toque especial que transforma uma sobremesa em
            experiência.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div>
            <h3 className="text-xl font-semibold">Ingredientes</h3>
            <p className="mt-3 text-gray-600">
              Selecionados para garantir sabor e qualidade em cada receita.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Feito com carinho</h3>
            <p className="mt-3 text-gray-600">
              Produção cuidadosa, respeitando cada etapa do preparo.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Para momentos especiais</h3>
            <p className="mt-3 text-gray-600">
              Uma sobremesa pensada para compartilhar, presentear e celebrar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}