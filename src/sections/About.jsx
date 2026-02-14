import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description:
      "Designing maintainable, modular backend systems built for long-term scalability.",
  },
  {
    icon: Rocket,
    title: "Scalable Performance",
    description:
      "Building high-throughput services optimized for reliability and real-world production load.",
  },
  {
    icon: Users,
    title: "Enterprise Ownership",
    description:
      "Leading end-to-end delivery of critical systems from design to production support.",
  },
  {
    icon: Lightbulb,
    title: "AI-Driven Automation",
    description:
      "Applying LLM integrations and intelligent workflows to reduce manual effort and improve efficiency.",
  },
];


export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Engineering reliable systems,
              <span className="font-serif italic font-normal text-white">
                {" "}
                at enterprise scale.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a Senior Software Engineer with 6+ years of experience building
                scalable backend systems for enterprise environments. My work focuses on
                designing secure, high-performance services using Java, microservices
                architecture, and cloud-native platforms.
              </p>

              <p>
                I have led development of critical billing, transaction, and workflow
                automation systems used in production by large organizations. My approach
                emphasizes reliability, clean architecture, and measurable business
                impact—combining strong engineering fundamentals with modern cloud and
                AI-driven automation.
              </p>

              <p>
                Beyond implementation, I take ownership of end-to-end delivery—from system
                design and development to deployment, observability, and production
                support—ensuring software performs consistently at real-world scale.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I build secure, scalable backend platforms that power real business
                workflows—software designed not just to function, but to endure,
                evolve, and deliver measurable value."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
