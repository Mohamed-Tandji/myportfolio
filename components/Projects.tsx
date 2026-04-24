import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        
        {/* Header */}
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

        {/* Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md"
            >
              {/* Top */}
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {project.status}
                </span>

                <div className="flex items-center gap-2">
                  
                  {/* Lien projet */}
                  <a
                    href={project.link}
                    target={project.link === "#" ? "_self" : "_blank"}
                    className="text-gray-400 hover:text-emerald-700 transition"
                  >
                    ↗
                  </a>

                  {/* GitHub SVG */}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      className="opacity-0 group-hover:opacity-100 hover:scale-110 text-gray-400 hover:text-emerald-700 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.20-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                      </svg>
                    </a>
                  )}

                </div>
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {project.title}
              </h3>

              {/* Type */}
              <p className="mt-1 text-sm font-medium text-emerald-700">
                {project.type}
              </p>

              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-gray-600">
                {project.description}
              </p>

              {/* Tech */}
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

              {/* CTA */}
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