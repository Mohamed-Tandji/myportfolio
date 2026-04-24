const projects = [
  {
    title: "PureSahel",
    type: "Site web vitrine & import-export",
    status: "Projet en ligne",
    description:
      "Création et déploiement d’un site web professionnel pour une marque spécialisée dans les matières premières naturelles d’Afrique de l’Ouest.",
    tech: ["React.js", "Vite", "Tailwind CSS", "Netlify Forms", "GitHub"],
    link: "https://puresahel.com",
  },
  {
    title: "Kalansokunafoni",
    type: "Plateforme éducative",
    status: "Projet client",
    description:
      "Développement d’une plateforme numérique utilisée au Mali pour structurer l’accès à des contenus éducatifs.",
    tech: ["Web App", "Frontend", "Backend", "Gestion de projet"],
    link: "#",
  },
  {
    title: "FasoLink",
    type: "Plateforme B2B agro-industrielle",
    status: "Projet à venir",
    description:
      "Concept de plateforme d’interconnexion entre industries, courtiers exportateurs et coopératives productrices de matières premières.",
    tech: ["Architecture", "UX", "Base de données", "API REST"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase text-emerald-700">
            Projets
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Projets actuels et à venir
          </h2>

          <p className="mt-4 text-gray-600">
            Une sélection de projets qui démontrent ma capacité à concevoir,
            développer et livrer des solutions numériques utiles.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {project.status}
                </span>

                <span className="text-sm text-gray-400 group-hover:text-emerald-700">
                  ↗
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {project.title}
              </h3>

              <p className="mt-1 text-sm font-medium text-emerald-700">
                {project.type}
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-gray-200 px-3 py-1 text-xs text-gray-600"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target={project.link === "#" ? "_self" : "_blank"}
                className="mt-6 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-900"
              >
                Voir le projet
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}