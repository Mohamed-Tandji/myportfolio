import { Globe, Code, Wrench, Cloud } from "lucide-react";

const services = [
  {
    title: "Sites web modernes",
    icon: Globe,
  },
  {
    title: "Applications web",
    icon: Code,
  },
  {
    title: "Support technique",
    icon: Wrench,
  },
  {
    title: "Cloud & déploiement",
    icon: Cloud,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-emerald-700 px-6 py-16">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold">
            Des solutions adaptées à vos besoins
          </h2>
          <p className="mt-2 text-emerald-100 text-sm">
            Développement, support et déploiement de solutions numériques modernes
          </p>
        </div>

        {/* Bande de services */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="flex flex-col items-center text-center text-white"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <Icon size={22} />
                </div>

                <p className="text-sm font-semibold">
                  {service.title}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}