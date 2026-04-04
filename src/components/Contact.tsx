import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="relative section-padding bg-navy-light noise">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <span className="text-teal text-xs tracking-[0.25em] uppercase font-semibold">
            Get Started
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mt-4 mb-6">
            Ready to stop wasting
            <br />
            <span className="gradient-text">time and money?</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto mb-10">
            Send us a message on WhatsApp. We&apos;ll have a 15-minute chat,
            identify your biggest time-waster, and show you how we&apos;d fix
            it. No pitch, no pressure.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="https://wa.me/201234567890?text=Hi%20Sierra%20Tech%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20AI%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-teal text-navy-dark font-bold text-lg px-10 py-5 rounded-xl hover:bg-teal-light transition-all duration-300 flex items-center gap-3 teal-glow"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
            <a
              href="mailto:hello@sierratechspaces.com"
              className="text-muted hover:text-white text-base font-medium px-8 py-5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              hello@sierratechspaces.com
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="bg-slate/30 border border-white/5 rounded-xl p-6">
              <div className="text-teal font-display font-bold text-2xl mb-1">
                15 min
              </div>
              <p className="text-muted text-sm">Free discovery call</p>
            </div>
            <div className="bg-slate/30 border border-white/5 rounded-xl p-6">
              <div className="text-teal font-display font-bold text-2xl mb-1">
                7-14 days
              </div>
              <p className="text-muted text-sm">Working prototype</p>
            </div>
            <div className="bg-slate/30 border border-white/5 rounded-xl p-6">
              <div className="text-teal font-display font-bold text-2xl mb-1">
                EGP 0
              </div>
              <p className="text-muted text-sm">Until you see results</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
