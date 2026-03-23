import { ArrowRight, Users, TrendingUp, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Placements" },
  { icon: TrendingUp, value: "98%", label: "Retention Rate" },
  { icon: Award, value: "2+", label: "Years Experience" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-bg"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(99,102,241,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Grid mesh */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8 py-24">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium text-brand-glow border border-brand-accent/30 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-brand-accent inline-block" />
          HR Solutions That Scale With You
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-brand-text leading-tight tracking-tight animate-fade-up">
          Build the Teams That{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #6366F1 0%, #818CF8 50%, #A5B4FC 100%)",
            }}
          >
            Build Your Business
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-brand-muted text-lg sm:text-xl max-w-2xl leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Simplecore connects you with exceptional talent and delivers HR
          strategies that drive measurable results — from first hire to
          executive leadership.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-accent hover:bg-brand-glow text-white font-semibold text-base transition-all duration-200 glow-accent hover:scale-105"
          >
            Get in Touch
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass text-brand-text font-semibold text-base border border-brand-border hover:border-brand-accent/50 transition-all duration-200"
          >
            Explore Services
          </a>
        </div>

        {/* Stats */}
        <div
          className="flex flex-col sm:flex-row gap-4 mt-4 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 glass rounded-xl px-5 py-3 border border-brand-border hover:border-brand-accent/40 transition-colors"
            >
              <div className="p-1.5 rounded-lg bg-brand-accent/10">
                <Icon size={16} className="text-brand-accent" />
              </div>
              <div className="text-left">
                <p className="text-brand-text font-bold text-lg leading-none">
                  {value}
                </p>
                <p className="text-brand-muted text-xs mt-0.5">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        aria-hidden
        style={{
          background: "linear-gradient(to bottom, transparent, #0A0A0F)",
        }}
      />
    </section>
  );
}
