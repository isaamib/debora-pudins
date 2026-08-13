function Manifesto() {
  return (
    <section
      id="manifesto"
      className="
        relative
        overflow-hidden
        bg-chocolate
        px-5
        py-28
        text-cream
        md:px-10
        md:py-44
      "
    >
      <div className="site-container">

        <div className="grid gap-16 md:grid-cols-12 md:items-end">

          {/* Número */}

          <div className="md:col-span-2">
            <span className="eyebrow text-cream/50">
              01 / manifesto
            </span>
          </div>


          {/* Frase */}

          <div className="md:col-span-9 md:col-start-4">

            <h2
              className="
                font-display
                text-[clamp(3.5rem,8vw,9rem)]
                leading-[0.86]
                tracking-[-0.055em]
              "
            >
              Um doce pode ser pequeno.
              <br />

              <span className="text-caramel">
                O momento que ele cria,
              </span>

              <br />

              não.
            </h2>

          </div>

        </div>


        {/* Texto complementar */}

        <div className="mt-20 grid md:grid-cols-12">

          <div className="md:col-span-4 md:col-start-7">

            <p
              className="
                max-w-md
                text-sm
                font-light
                leading-[1.9]
                text-cream/70
                md:text-base
              "
            >
              Tem sobremesa que só termina.
              Tem sobremesa que faz você parar,
              respirar e pegar mais uma colherada.
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Manifesto