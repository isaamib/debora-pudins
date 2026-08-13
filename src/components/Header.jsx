function Header() {
  return (
    <header
      className="
        absolute
        top-0
        left-0
        z-50
        w-full
        px-5
        py-5
        md:px-10
        md:py-7
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1520px]
          items-center
          justify-between
        "
      >
        {/* Indicador lateral esquerdo */}
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-chocolate" />

          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] sm:block">
            Pudins nada tradicionais
          </span>
        </div>

        {/* Logo */}
        <a
          href="#inicio"
          aria-label="Debora Pudins — início"
          className="
            absolute
            left-1/2
            -translate-x-1/2
            font-display
            text-2xl
            leading-none
            tracking-[-0.04em]
            transition-transform
            duration-300
            hover:scale-105
            md:text-3xl
          "
        >
          debora
          <span className="text-caramel">.</span>
        </a>

        {/* Indicador lateral direito */}
        <div className="ml-auto flex items-center gap-2">
          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] sm:block">
            scroll
          </span>

          <span className="block h-8 w-px bg-chocolate/30" />
        </div>
      </div>
    </header>
  )
}

export default Header