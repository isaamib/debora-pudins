import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Caramel from './Caramel'

gsap.registerPlugin(ScrollTrigger)

function Hero() {
  const sectionRef = useRef(null)
  const caramelRef = useRef(null)
  const puddingRef = useRef(null)
  const headlineRef = useRef(null)
  const subtitleRef = useRef(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const caramel = caramelRef.current
    const pudding = puddingRef.current
    const headline = headlineRef.current
    const subtitle = subtitleRef.current

    if (!section || !caramel || !pudding) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (reduceMotion) return

    const ctx = gsap.context(() => {
      /*
       * Estado inicial
       */

      gsap.set(caramel, {
        yPercent: -72,
        scaleY: 0.45,
        scaleX: 0.8,
        opacity: 0,
        transformOrigin: '50% 0%',
      })

      gsap.set(pudding, {
        y: 40,
        scale: 0.88,
        rotation: -1.5,
      })

      gsap.set(headline, {
        y: 30,
        opacity: 0,
      })

      gsap.set(subtitle, {
        y: 20,
        opacity: 0,
      })


      /*
       * Entrada inicial
       */

      const intro = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      })

      intro
        .to(headline, {
          y: 0,
          opacity: 1,
          duration: 1.1,
          delay: 0.25,
        })
        .to(
          subtitle,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          '-=0.7'
        )


      /*
       * Scroll principal
       */

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=180%',
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      })

      scrollTimeline

        /*
         * Caramelo começa a aparecer
         */

        .to(
          caramel,
          {
            yPercent: -25,
            scaleY: 0.7,
            scaleX: 0.92,
            opacity: 1,
            duration: 1,
            ease: 'none',
          },
          0
        )

        /*
         * Caramelo ganha corpo
         */

        .to(
          caramel,
          {
            yPercent: 8,
            scaleY: 1.05,
            scaleX: 1,
            duration: 1,
            ease: 'none',
          },
          0.28
        )

        /*
         * Pequena deformação
         */

        .to(
          caramel,
          {
            scaleX: 1.08,
            duration: 0.35,
            ease: 'sine.inOut',
          },
          0.48
        )

        .to(
          caramel,
          {
            scaleX: 0.96,
            duration: 0.35,
            ease: 'sine.inOut',
          },
          0.7
        )

        /*
         * Pudim entra na composição
         */

        .to(
          pudding,
          {
            y: -10,
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: 'power2.out',
          },
          0.25
        )

        /*
         * Caramelo desce sobre o pudim
         */

        .to(
          caramel,
          {
            yPercent: 35,
            scaleY: 1.18,
            duration: 1,
            ease: 'none',
          },
          0.62
        )

        /*
         * Headline desaparece suavemente
         */

        .to(
          headline,
          {
            y: -70,
            opacity: 0,
            duration: 0.5,
            ease: 'power2.in',
          },
          0.72
        )

        .to(
          subtitle,
          {
            y: -40,
            opacity: 0,
            duration: 0.4,
            ease: 'power2.in',
          },
          0.76
        )

        /*
         * Final da cena
         */

        .to(
          pudding,
          {
            scale: 1.06,
            y: -30,
            duration: 0.5,
            ease: 'power2.out',
          },
          0.88
        )
    }, section)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="
        hero-section
        relative
        min-h-[100svh]
        bg-cream
      "
    >
      <div
        className="
          hero-stage
          relative
          flex
          min-h-[100svh]
          items-center
          justify-center
        "
      >

        {/* =================================================
            ELEMENTOS DECORATIVOS
        ================================================= */}

        <div
          className="
            absolute
            left-5
            top-1/2
            z-[1]
            hidden
            -translate-y-1/2
            flex-col
            gap-3
            md:flex
          "
        >
          <span className="text-[9px] font-semibold uppercase tracking-[0.22em] [writing-mode:vertical-rl]">
            artesanal
          </span>

          <span className="h-16 w-px bg-chocolate/20" />
        </div>


        <div
          className="
            absolute
            right-5
            top-1/2
            z-[1]
            hidden
            -translate-y-1/2
            flex-col
            gap-3
            md:flex
          "
        >
          <span className="h-16 w-px bg-chocolate/20" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.22em] [writing-mode:vertical-rl]">
            feito para repetir
          </span>
        </div>


        {/* =================================================
            HEADLINE
        ================================================= */}

        <div
          className="
            hero-content
            absolute
            left-1/2
            top-[19%]
            z-30
            w-[calc(100%-32px)]
            max-w-5xl
            -translate-x-1/2
            text-center
            md:top-[18%]
          "
        >
          <p
            ref={subtitleRef}
            className="
              eyebrow
              mb-5
              text-chocolate/70
            "
          >
            Debora Pudins
          </p>

          <h1
            ref={headlineRef}
            className="
              display-title
              text-chocolate
            "
          >
            Pudins
            <br />

            <span className="text-caramel">
              nada
            </span>{' '}
            tradicionais.
          </h1>
        </div>


        {/* =================================================
            PUDIM
        ================================================= */}

        <div
          ref={puddingRef}
          className="
            hero-pudding
            absolute
            bottom-[6%]
            left-1/2
            z-10
            h-[48vh]
            w-[88vw]
            max-w-[720px]
            -translate-x-1/2
            md:bottom-[3%]
            md:h-[58vh]
            md:w-[62vw]
          "
        >
          <div
            className="
              absolute
              inset-0
              rounded-[50%]
              bg-caramel/10
              blur-3xl
            "
          />

          {/* 
            Placeholder visual.

            Depois substituiremos por uma fotografia
            real/transparente do pudim.
          */}

          <div
            className="
              absolute
              bottom-[8%]
              left-1/2
              h-[58%]
              w-[58%]
              -translate-x-1/2
              rounded-[45%_45%_35%_35%]
              bg-gradient-to-b
              from-[#C96B27]
              via-[#A94A12]
              to-chocolate
              shadow-[0_35px_70px_rgba(80,30,5,0.25)]
            "
          />

          <div
            className="
              absolute
              bottom-[49%]
              left-1/2
              h-[18%]
              w-[50%]
              -translate-x-1/2
              rounded-[50%]
              bg-[#E5A15C]
              opacity-80
              blur-[1px]
            "
          />

          <div
            className="
              absolute
              bottom-[52%]
              left-[35%]
              h-[7%]
              w-[12%]
              rounded-full
              bg-[#FFC77C]
              opacity-60
              blur-[4px]
            "
          />
        </div>


        {/* =================================================
            CARAMEL
        ================================================= */}

        <Caramel ref={caramelRef} />


        {/* =================================================
            INDICADOR DE SCROLL
        ================================================= */}

        <div
          className="
            absolute
            bottom-7
            left-1/2
            z-40
            -translate-x-1/2
            md:bottom-9
          "
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-[9px] font-semibold uppercase tracking-[0.25em]">
              role
            </span>

            <div className="h-10 w-px overflow-hidden bg-chocolate/20">
              <div className="h-1/2 w-full origin-top animate-pulse bg-chocolate" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero