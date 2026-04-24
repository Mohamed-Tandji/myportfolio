export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-700 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-3">
            <div className="text-3xl font-black tracking-[-0.15em]">
              MT
            </div>

            <div>
              <p className="font-bold">Mahamadou Tandjigora</p>
              <p className="text-sm text-emerald-100">
                Développeur web & mobile
              </p>
            </div>
          </div>

          {/* CENTER */}
          <div className="flex justify-center gap-6">
            {/* GitHub */}
            <a
              href="https://github.com/Mohamed-Tandji"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-emerald-100 transition hover:scale-110 hover:bg-white/20 hover:text-white"
              title="GitHub"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mahamadou-tandjigora-40402924a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-emerald-100 transition hover:scale-110 hover:bg-white/20 hover:text-white"
              title="LinkedIn"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.21c.837 0 1.358-.554 1.358-1.248-.015-.71-.521-1.248-1.342-1.248-.821 0-1.358.538-1.358 1.248 0 .694.521 1.248 1.327 1.248h.015zm4.908 8.21h2.401V9.359c0-.215.016-.43.08-.584.174-.43.571-.875 1.237-.875.872 0 1.221.66 1.221 1.63v3.864h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.192v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.677 0 7.225 0 7.225z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:mahamadoutandjigora03@gmail.com"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-emerald-100 transition hover:scale-110 hover:bg-white/20 hover:text-white"
              title="Email"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.217l-8 4.8-8-4.8V4zm0 2.383v5.617a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6.383l-7.447 4.468a1 1 0 0 1-1.106 0L0 6.383z" />
              </svg>
            </a>
          </div>

          {/* RIGHT */}
          <div className="text-center text-sm text-emerald-100 md:text-right">
            © {currentYear} Tous droits réservés
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-4 text-center text-xs text-emerald-200">
          Conçu et développé par Mahamadou Tandjigora
        </div>
      </div>
    </footer>
  );
}