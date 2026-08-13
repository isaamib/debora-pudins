import { useRef } from 'react'

function AboutDebora() {
  const imageRef = useRef(null)

  function handleMouseMove(event) {
    if (!imageRef.current) return

    const rect = imageRef.current.getBoundingClientRect()

    const x =
      ((event.clientX - rect.left) / rect.width - 0.5) * 10

    const y =
      ((event.clientY - rect.top) / rect.height - 0.5) * 10

    imageRef.current.style.transform =
      `scale(1.04) translate(${x}px, ${y}px)`
  }

  function handleMouseLeave() {
    if (!imageRef.current) return

    imageRef.current.style.transform =
      'scale(1) translate(0, 0)'
  }

  return (
    <section
      id="debora"
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

        <div className="grid gap-16 md:grid-cols-12 md:items-center">

          {/* FOTO */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[30px]
              md:col-span-6
            "
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="aspect-[4/5] bg-[#D5A17C]">

              <img
                ref={imageRef}
                src="/images/debora/debora.webp"
                alt="Debora, criadora da Debora Pudins"
                loading="lazy"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-1000
                  ease-out
                "
              />

            </div>

            <div
              className="
                absolute
                bottom-5
                left-5
                rounded-full
                bg-cream/85
                px-4
                py-2
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.16em]
                backdrop-blur-md
              "
            >
              Por trás do pudim
            </div>
          </div>


          {/* TEXTO */}

          <div className="md:col-span-5 md:col-start-8">

            <span className="eyebrow text-chocolate/45">
              04 / sobre a Debora
            </span>

            <h2
              className="
                mt-7
                font-display
                text-[clamp(4rem,7vw,7.5rem)]
                leading-[0.84]
                tracking-[-0.055em]
              "
            >
              O pudim
              <br />
              tem
              <br />

              <span className="text-caramel">
                dona.
              </span>
            </h2>

            <div
              className="
                mt-10
                space-y-5
                text-sm
                font-light
                leading-[1.9]
                text-chocolate/65
                md:text-base
              "
            >
              <p>
                A Debora Pudins nasceu de uma paixão bem simples:
                fazer pudim e querer fazer mais um.
              </p>

              <p>
                Da cozinha para a mesa, cada receita foi ganhando
                personalidade, novos sabores e aquele cuidado que
                transforma uma sobremesa em parte do momento.
              </p>

              <p>
                Porque no fim das contas, não é só sobre o pudim.
                É sobre a vontade de experimentar, dividir,
                conversar e pegar mais uma colherada.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">

              <span className="h-px w-10 bg-chocolate/30" />

              <span className="font-display text-2xl">
                — Debora
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default AboutDebora