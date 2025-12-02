import { Award, Heart, Users, Wrench } from "lucide-react";

const team = [
  {
    name: "Jean-Claude Martin",
    role: "Fondateur & Gérant",
    bio: "Plus de 25 ans d'expérience dans l'automobile. Passionné par la mécanique depuis son plus jeune âge.",
    image: "/professional-male-mechanic-portrait.jpg",
  },
  {
    name: "Sophie Renaud",
    role: "Responsable Atelier",
    bio: "Experte en diagnostic et réparation. Certifiée par les plus grandes marques automobiles.",
    image: "/professional-female-mechanic-portrait.jpg",
  },
  {
    name: "John Doe",
    role: "Chef",
    bio: "Expert en diagnostic et réparation. Certifiée par les plus grandes marques automobiles.",
    image: "/professional-male-mechanic-portrait.jpg",
  },
  {
    name: "John Doe",
    role: "Chef",
    bio: "Expert en diagnostic et réparation. Certifiée par les plus grandes marques automobiles.",
    image: "/professional-male-mechanic-portrait.jpg",
  },
];

const values = [
  {
    icon: Wrench,
    title: "Expertise",
    description: "Des mécaniciens certifiés et expérimentés",
  },
  {
    icon: Award,
    title: "Qualité",
    description: "Pièces d'origine et garantie sur nos interventions",
  },
  {
    icon: Users,
    title: "Proximité",
    description: "Un service personnalisé et à l'écoute",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "L'amour du métier au service de votre véhicule",
  },
];

export function AboutSection() {
  return (
    <section id="apropos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Qui sommes-nous
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl text-foreground mt-4">
              À <span className="text-primary">PROPOS</span>
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">JC Performance</strong> et
                le{" "}
                <strong className="text-foreground">
                  garage Caetano Alexandre
                </strong>
                , c'est avant tout une histoire de passion pour l'automobile et
                la mécanique de précision.
              </p>
              <p>
                Spécialisés dans la{" "}
                <strong className="text-foreground">réparation</strong>, l'
                <strong className="text-foreground">entretien</strong>, la{" "}
                <strong className="text-foreground">carrosserie</strong> et la{" "}
                <strong className="text-foreground">restauration</strong>, nous
                mettons notre expertise au service de votre véhicule, qu'il soit
                de collection ou récent.
              </p>
              <p>
                Notre savoir-faire s'étend au{" "}
                <strong className="text-foreground">montage SWAP</strong>, à la{" "}
                <strong className="text-foreground">
                  préparation moteur turbo
                </strong>
                , ainsi qu'au{" "}
                <strong className="text-foreground">
                  démontage et remontage de pièces d'origine et d'occasion
                </strong>
                . Chaque projet est traité avec rigueur et passion.
              </p>
              <p>
                Que vous souhaitiez redonner vie à un véhicule ancien ou
                optimiser les performances de votre moteur, notre équipe vous
                accompagne à chaque étape de votre projet automobile.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="/garage-dedans.jpg"
              alt="Notre atelier"
              className="rounded-lg w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg">
              <p className="font-[family-name:var(--font-heading)] text-4xl">
                15+
              </p>
              <p className="text-sm font-medium">Années d'expérience</p>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-border">
          <h3 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-foreground text-center mb-12">
            NOTRE <span className="text-primary">ÉQUIPE</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/30 transition-colors"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-[family-name:var(--font-heading)] text-2xl text-foreground">
                    {member.name}
                  </h4>
                  <p className="text-primary font-medium text-sm">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
