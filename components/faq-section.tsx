"use client"

import { useState } from "react"
import { ChevronDown, MessageCircle } from "lucide-react"

const faqs = [
  {
    question: "Quels types de véhicules réparez-vous ?",
    answer:
      "Nous intervenons sur toutes les marques et tous les modèles de véhicules : citadines, berlines, SUV, utilitaires, etc. Notre équipe est formée pour travailler sur les véhicules essence, diesel, hybrides et électriques.",
  },
  {
    question: "Proposez-vous un service de véhicule de remplacement ?",
    answer:
      "Oui, nous disposons de véhicules de prêt pour vous permettre de continuer vos déplacements pendant que votre voiture est en réparation. Ce service est disponible sur réservation, contactez-nous pour plus d'informations.",
  },
  {
    question: "Comment fonctionne le service de dépannage ?",
    answer:
      "Notre service de dépannage est disponible 7j/7. Appelez-nous au numéro d'urgence, nous interviendrons rapidement sur place pour remorquer votre véhicule jusqu'à notre atelier ou vers la destination de votre choix.",
  },
  {
    question: "Quelles garanties offrez-vous sur vos réparations ?",
    answer:
      "Toutes nos réparations sont garanties 12 mois pièces et main d'œuvre. Pour les véhicules d'occasion vendus, nous proposons une garantie de 6 à 12 mois selon le véhicule, extensible sur demande.",
  },
  {
    question: "Puis-je suivre l'avancement des réparations de mon véhicule ?",
    answer:
      "Absolument ! Nous vous tenons informé par SMS ou téléphone à chaque étape importante. Vous pouvez également nous appeler à tout moment pour connaître l'état d'avancement des travaux.",
  },
  {
    question: "Acceptez-vous les paiements en plusieurs fois ?",
    answer:
      "Oui, nous proposons des facilités de paiement en 3 ou 4 fois sans frais pour les réparations et achats de véhicules supérieurs à 300€. Des solutions de financement sont également disponibles pour l'achat de véhicules.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl text-foreground mt-4">
              QUESTIONS <span className="text-primary">FRÉQUENTES</span>
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              Retrouvez les réponses aux questions les plus posées par nos clients. Si vous ne trouvez pas la réponse à
              votre question, n'hésitez pas à nous contacter.
            </p>

            <div className="mt-10 p-6 bg-card rounded-lg border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Une autre question ?</p>
                  <p className="text-muted-foreground text-sm">Contactez-nous directement</p>
                </div>
              </div>
              <a href="#contact" className="mt-4 inline-block text-primary font-medium hover:underline">
                Nous contacter →
              </a>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card rounded-lg border border-border overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
                >
                  <span className="font-medium text-foreground pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
