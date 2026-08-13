import { useRef } from 'react'

function FlavorCard({ flavor, index }) {
  const cardRef = useRef(null)
  const imageRef = useRef(null)

  function handleMouseMove(event) {
    if (!cardRef.current || !imageRef.current) return

    const rect = cardRef.current.getBoundingClientRect()

    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -3
    const rotateY = ((x - centerX) / centerX) * 3

    cardRef.current.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `

    imageRef.current.style.transform = `
      translate(${(x - centerX) * 0.025}px, ${(y - centerY) * 0.025}px)
      scale(1.04)
    `
  }

  function handleMouseLeave() {
    if (!cardRef.current || !imageRef.current) return

    cardRef.current.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg)'

    imageRef.current.style.transform =
      'translate(0, 0) scale(1)'
  }

  return (
    <article
      ref={cardRef}
      className="
        pudding-card
        group
        relative
        overflow-hidden
        rounded-[28px]
        bg-white/30
        transition-transform
        duration-500
        ease-out
        will-change-transform
      "
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Imagem */}

      <div
        className="
          relative
          aspect-[4/5]
          overflow-hidden
        "
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundColor: flavor.accent,
          }}
        />

        <img
          ref={imageRef}
          src={flavor.image}
          alt={flavor.name}
          loading={index > 2 ? 'lazy' : 'eager'}
          className="
            pudding-card-image
            relative
            h-full
            w-full
            object-contain
            p-5
            transition-transform
            duration-700
            ease-out
          "
        />

        {/* Número */}

        <span
          className="
            absolute
            left-5
            top-5
            font-display
            text-5xl
            leading-none
            opacity-20
          "
        >
          {flavor.number}
        </span>

        {/* Badge */}

        <span
          className="
            absolute
            right-5
            top-5
            rounded-full
            border
            border-chocolate/10
            bg-cream/80
            px-3
            py-1.5
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.15em]
            backdrop-blur-md
          "
        >
          {flavor.highlight}
        </span>

        {/* Indicador */}

        <div
          className="
            absolute
            bottom-5
            right-5
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-chocolate
            text-cream
            opacity-0
            transition-all
            duration-500
            group-hover:opacity-100
          "
        >
          ↗
        </div>
      </div>

      {/* Conteúdo */}

      <div className="px-5 pb-7 pt-5 md:px-7 md:pb-8">

        <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-chocolate/45">
          {flavor.category}
        </p>

        <h3
          className="
            font-display
            text-4xl
            leading-[0.9]
            tracking-[-0.04em]
            md:text-5xl
          "
        >
          {flavor.name}
        </h3>

        <p className="mt-5 max-w-sm text-sm font-light leading-[1.8] text-chocolate/65">
          {flavor.description}
        </p>
      </div>
    </article>
  )
}

export default FlavorCard