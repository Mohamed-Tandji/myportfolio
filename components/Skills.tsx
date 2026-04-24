import { Code2, Server, Database, Cloud } from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js", "Python", "C#", ".NET / ASP.NET"],
  },
  {
    title: "Bases de données",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "MySQL", "SQL Server", "SQLite"],
  },
  {
    title: "Cloud & outils",
    icon: Cloud,
    items: ["AWS", "Azure", "Git / GitHub", "Netlify", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase text-emerald-700">
            Compétences
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Stack technique principale
          </h2>

          <p className="mt-4 text-gray-600">
            Les technologies que j’utilise pour concevoir, développer et
            déployer des solutions numériques modernes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-bold text-gray-900">
                  {skill.title}
                </h3>

                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}