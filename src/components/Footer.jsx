export default function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-black/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-serif">Debora Pudins</h3>
          <p className="mt-2 text-sm text-gray-500">
            Pudins feitos com carinho para momentos especiais.
          </p>
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#inicio" className="hover:opacity-60 transition">
            Início
          </a>

          <a href="#sobre" className="hover:opacity-60 transition">
            Sobre
          </a>

          <a href="#sabores" className="hover:opacity-60 transition">
            Sabores
          </a>

          <a href="#contato" className="hover:opacity-60 transition">
            Contato
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-black/10 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Debora Pudins. Todos os direitos reservados.
      </div>
    </footer>
  );
}