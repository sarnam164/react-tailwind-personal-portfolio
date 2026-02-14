import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sarnam164@gmail.com",
    href: "mailto:sarnam164@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 94970 11604",
    href: "tel:+919497011604",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kerala, India",
    href: "https://maps.app.goo.gl/VSr3kTuqmkZ3raRMA",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let’s build{" "}
            <span className="font-serif italic font-normal text-white">
              something meaningful.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Open to backend engineering roles, cloud-native platform work,
            and impactful product teams. If you have an opportunity or
            engineering challenge in mind, I’d be glad to connect.
          </p>

          {/* Primary CTA */}
          <div className="mt-8 flex justify-center animate-fade-in animation-delay-300">
            <a
              href="mailto:sarnam164@gmail.com"
              className="inline-block shrink-0 whitespace-nowrap"
            >
              <Button size="lg" className="whitespace-nowrap">
                Email Me <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>

        </div>

        {/* Contact cards */}
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in animation-delay-400">
          <div className="glass rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.label === "Location" ? "_blank" : undefined}
                  rel={
                    item.label === "Location"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="glass rounded-3xl p-8 border border-primary/30">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="font-medium">Currently Available</span>
            </div>

            <p className="text-muted-foreground text-sm">
              Interested in backend systems, distributed architecture,
              cloud platforms, and real-world scalability challenges.
              Always open to meaningful engineering conversations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
