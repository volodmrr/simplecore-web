import { services } from "@/lib/services";
import type { Service } from "@/lib/services";

function ServiceCard({ icon: Icon, title, description }: Service) {
  return (
    <div className="group flex flex-col gap-4 p-6 rounded-2xl bg-brand-surfaceAlt border border-brand-border hover:border-brand-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/10">
      <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-brand-accent/10 group-hover:bg-brand-accent/20 transition-colors">
        <Icon size={22} className="text-brand-accent" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-brand-text font-semibold text-lg">{title}</h3>
        <p className="text-brand-muted text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-brand-accent text-sm font-semibold uppercase tracking-widest mb-4">
            What We Do
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-text mb-4">
            HR Services Built for{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #6366F1 0%, #818CF8 100%)",
              }}
            >
              Scale
            </span>
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            From sourcing a single specialist to building entire departments,
            we bring the expertise and network to make it happen.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
