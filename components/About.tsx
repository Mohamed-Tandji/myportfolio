export default function About() {
  return (
    <section id="about" className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase text-emerald-700">
          À propos
        </p>

        <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
          Un développeur avec une vision produit.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          Je suis développeur web et mobile basé à Montréal. Je conçois des
          sites web, applications et solutions numériques modernes pour aider
          les entreprises à structurer leurs services, améliorer leur présence
          en ligne et automatiser leurs processus.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-3xl font-bold text-emerald-700">3+</p>
            <p className="mt-2 text-sm text-gray-600">Années d’expérience</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-3xl font-bold text-emerald-700">5+</p>
            <p className="mt-2 text-sm text-gray-600">Projets réalisés</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-3xl font-bold text-emerald-700">100%</p>
            <p className="mt-2 text-sm text-gray-600">Orienté solution</p>
          </div>
        </div>
      </div>
    </section>
  );
}