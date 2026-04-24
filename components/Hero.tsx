export default function Hero() {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Je développe des solutions numériques modernes.
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-xl">
          Développeur web & mobile basé à Montréal, je conçois des sites,
          applications et outils numériques performants.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-emerald-700 text-white px-6 py-3 rounded-full">
            Voir mes projets
          </button>

          <button className="border px-6 py-3 rounded-full">
            Télécharger CV
          </button>
        </div>
      </div>
    </section>
  );
}