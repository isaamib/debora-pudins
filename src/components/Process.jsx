import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    number: '01',
    title: 'Ingredientes',
    description:
      'Tudo começa com a escolha dos sabores e dos ingredientes que vão dar personalidade a cada receita.',
  },
  {
    number: '02',
    title: 'Preparo',
    description:
      'Cada receita recebe seu tempo. Mistura, textura e equilíbrio importam tanto quanto o sabor.',
  },
  {
    number: '03',
    title: 'Forno',
    description:
      'Temperatura, textura e paciência. É aqui que a receita começa a virar aquele pudim que a gente conhece.',
  },
  {
    number: '04',
    title: 'Finalização',
    description:
      'A última etapa antes de chegar à mesa. Calda, detalhes e aquele segundo em que dá vontade de provar.',
  },
]

function Process() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (reduceMotion) return

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.process-step')

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            y: 70,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 55%',
              scrub: 0.8,
            },
          }
        )
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="processo"
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

        {/* Cabeçalho */}

        <div className="grid gap-12 md:grid-cols-12">

          <div className="md:col-span-2">
            <span className="eyebrow text-cream/45">
              03 / processo
            </span>
          </div>

          <div className="md:col-span-8 md:col-start-4">

            <h2 className="section-title">
              Antes da
              <br />
              primeira
              <span className="text-caramel"> colher.</span>
            </h2>

          </div>

        </div>


        {/* Texto */}

        <div className="mt-16 grid md:grid-cols-12">

          <div className="md:col-span-5 md:col-start-7">

            <p className="text-sm font-light leading-[1.9] text-cream/65 md:text-base">
              Existe bastante coisa acontecendo antes daquele
              momento em que você quebra a superfície com a colher.
              E é justamente essa parte que faz diferença.
            </p>

          </div>

        </div>


        {/* Steps */}

        <div className="mt-24">

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="
                process-step
                grid
                grid-cols-1
                gap-8
                border-t
                border-cream/15
                py-10
                md:grid-cols-12
                md:items-center
                md:py-14
              "
            >

              <div className="md:col-span-2">
                <span className="process-number text-caramel">
                  {step.number}
                </span>
              </div>


              <div className="md:col-span-4">
                <h3
                  className="
                    font-display
                    text-5xl
                    leading-none
                    tracking-[-0.04em]
                    md:text-7xl
                  "
                >
                  {step.title}
                </h3>
              </div>


              <div className="md:col-span-4 md:col-start-8">

                <p className="max-w-md text-sm font-light leading-[1.9] text-cream/60 md:text-base">
                  {step.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Process