import { flavors } from '../data/flavors'
import FlavorCard from './FlavorCard'

function Flavors() {
  return (
    <section
      id="sabores"
      className="
        relative
        overflow-hidden
        bg-cream
        px-5
        py-28
        md:px-10
        md:py-44
      "
    >
      <div className="site-container">

        {/* Cabeçalho */}

        <div className="grid gap-12 md:grid-cols-12 md:items-end">

          <div className="md:col-span-2">
            <span className="eyebrow text-chocolate/50">
              02 / sabores
            </span>
          </div>

          <div className="md:col-span-8 md:col-start-4">

            <h2
              className="
                section-title
                max-w-5xl
              "
            >
              Escolher um
              <span className="text-caramel"> só?</span>
            </h2>

          </div>

        </div>


        {/* Introdução */}

        <div className="mt-16 grid md:grid-cols-12">

          <div className="md:col-span-5 md:col-start-7">

            <p className="max-w-lg text-sm font-light leading-[1.9] text-chocolate/65 md:text-base">
              A parte mais difícil é decidir por onde começar.
              Tem o clássico, tem o inesperado e tem aquele que
              você prova por curiosidade e termina defendendo
              como se tivesse inventado.
            </p>

          </div>

        </div>


        {/* Grid */}

        <div
          className="
            mt-20
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {flavors.map((flavor, index) => (
            <FlavorCard
              key={flavor.id}
              flavor={flavor}
              index={index}
            />
          ))}
        </div>


        {/* Rodapé da seção */}

        <div
          className="
            mt-20
            flex
            flex-col
            gap-5
            border-t
            border-chocolate/15
            pt-6
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-chocolate/45">
            E ainda tem mais por aqui.
          </span>

          <span className="font-display text-2xl">
            Qual vai ser?
          </span>
        </div>

      </div>
    </section>
  )
}

export default Flavors