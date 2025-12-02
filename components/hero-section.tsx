import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-32 md:pt-40">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.png"
          alt="Volkswagen Golf G60 dans l'atelier"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            + de 15 ans d'expérience
          </span>

          <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl lg:text-8xl leading-none mb-6 text-foreground">
            VOTRE GARAGE
            <br />
            <span className="text-primary">AUTOMOBILE</span>
            <br />
            DE CONFIANCE
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
            Spécialisés dans l'achat, la vente, la réparation et la préparation de véhicules. Notre équipe d'experts
            vous accompagne avec rigueur et passion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-8 py-6"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Prendre rendez-vous
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground/20 text-foreground hover:bg-foreground/10 font-semibold text-lg px-8 py-6 bg-transparent"
            >
              Découvrir nos services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50">
            <div>
              <p className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-primary">500+</p>
              <p className="text-muted-foreground text-sm mt-1">Véhicules vendus</p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-primary">15+</p>
              <p className="text-muted-foreground text-sm mt-1">Années d'expérience</p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-primary">98%</p>
              <p className="text-muted-foreground text-sm mt-1">Clients satisfaits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
