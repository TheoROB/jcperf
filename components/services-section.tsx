import { Wrench, Settings, Truck, ShoppingBag, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: ShoppingBag,
    title: "Achat / Vente",
    subtitle: "Pièces & Véhicules",
    description:
      "Large choix de véhicules d'occasion contrôlés et de pièces détachées de qualité. Reprise de votre ancien véhicule.",
    image: "/car-dealership-showroom-with-multiple-vehicles.jpg",
  },
  {
    icon: Wrench,
    title: "Réparation",
    subtitle: "Toutes marques",
    description: "Diagnostic électronique, mécanique générale, entretien courant, freinage, embrayage et distribution.",
    image: "/mechanic-repairing-car-engine-in-workshop.jpg",
  },
  {
    icon: Settings,
    title: "Préparation",
    subtitle: "Performance & Esthétique",
    description:
      "Préparation moteur, reprogrammation, kit carrosserie, covering et personnalisation complète de votre véhicule.",
    image: "/car-tuning-preparation-workshop-performance-parts.jpg",
  },
  {
    icon: Truck,
    title: "Dépannage",
    subtitle: "7j/7",
    description:
      "Service de dépannage et remorquage disponible 7 jours sur 7. Intervention rapide dans toute la région.",
    image: "/tow-truck-roadside-assistance-night.jpg",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Ce que nous proposons</span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl text-foreground mt-4">
            NOS <span className="text-primary">SERVICES</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Une gamme complète de services automobiles pour répondre à tous vos besoins
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-card/70" />
              </div>

              <div className="relative z-10 p-8 md:p-10">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-primary font-medium text-sm mt-1">{service.subtitle}</p>
                    <p className="text-muted-foreground mt-4 leading-relaxed">{service.description}</p>
                    <Button variant="link" className="text-primary p-0 mt-4 hover:text-primary/80">
                      En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand logos */}
        <div className="mt-20 pt-12 border-t border-border">
          <p className="text-center text-muted-foreground text-sm mb-8">Nous travaillons sur toutes les marques</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {["Volkswagen", "Audi", "BMW", "Mercedes", "Peugeot", "Renault"].map((brand) => (
              <div
                key={brand}
                className="text-foreground font-[family-name:var(--font-heading)] text-xl md:text-2xl tracking-wider"
              >
                {brand.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
