import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-6 py-24 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* TEXTE */}
        <div>
          <p className="text-sm font-semibold uppercase text-emerald-700">
            Développeur web & mobile
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Je développe des solutions numériques modernes.
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Développeur web & mobile basé à Montréal, je conçois des sites,
            applications et outils numériques performants pour aider les
            entreprises à structurer leurs services et améliorer leur présence en ligne.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            
            {/* CTA 1 */}
            <a
              href="#projects"
              className="bg-emerald-700 text-white px-6 py-3 rounded-lg hover:bg-emerald-800 transition text-center font-medium"
            >
              Voir mes projets
            </a>

            {/* CTA 2 */}
            <a
              href="/cv-mahamadou-tandjigora.pdf"
              download
              className="border border-gray-300 px-6 py-3 rounded-lg text-gray-800 hover:border-emerald-700 hover:text-emerald-700 transition text-center font-medium"
            >
              Télécharger CV
            </a>

          </div>
        </div>

        {/* IMAGE + BORDURE DÉGRADÉE */}
        <div className="flex justify-center md:justify-end">
          
          <div className="p-[2px] rounded-3xl bg-gradient-to-br from-emerald-400 via-emerald-600 to-emerald-800 shadow-lg shadow-emerald-500/20">
            
            <div className="relative w-[280px] h-[380px] md:w-[360px] md:h-[480px] rounded-3xl overflow-hidden bg-white">
              
              <Image
                src="/mahamadou-hero.jpeg"
                alt="Mahamadou Tandjigora"
                fill
                className="object-cover object-top"
                priority
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}