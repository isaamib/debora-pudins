import { forwardRef } from 'react'

const Caramel = forwardRef(function Caramel(_, ref) {
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="
        caramel-layer
        absolute
        left-1/2
        top-0
        -translate-x-1/2
      "
      style={{
        width: 'min(46vw, 620px)',
        height: '75vh',
      }}
    >
      {/* Corpo principal da calda */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-[82%]
          w-[72%]
          -translate-x-1/2
          rounded-b-[48%]
          bg-caramel
          shadow-[0_30px_70px_rgba(149,59,10,0.16)]
        "
      />

      {/* Centro mais espesso */}
      <div
        className="
          absolute
          left-1/2
          top-[2%]
          h-[90%]
          w-[36%]
          -translate-x-1/2
          rounded-b-[50%]
          bg-[#F09A1A]
          opacity-80
          blur-[1px]
        "
      />

      {/* Reflexo */}
      <div
        className="
          absolute
          left-[38%]
          top-[4%]
          h-[68%]
          w-[8%]
          rounded-full
          bg-[#FFC15A]
          opacity-45
          blur-[5px]
        "
      />

      {/* Gota principal */}
      <div
        className="
          caramel-drop
          absolute
          left-1/2
          top-[70%]
          h-32
          w-32
          -translate-x-1/2
          rounded-full
          bg-caramel
          shadow-[0_20px_35px_rgba(149,59,10,0.18)]
        "
      />

      {/* Pequena gota lateral */}
      <div
        className="
          caramel-drop-side
          absolute
          left-[30%]
          top-[65%]
          h-12
          w-12
          rounded-full
          bg-[#D97806]
        "
      />
    </div>
  )
})

export default Caramel