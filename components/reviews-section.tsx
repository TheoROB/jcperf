"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const reviews = [
  {
    name: "Jean-Pierre M.",
    rating: 5,
    date: "Il y a 2 semaines",
    text: "Excellent garage ! J'ai fait réparer ma BMW et le travail est impeccable. Équipe très professionnelle et tarifs honnêtes. Je recommande vivement.",
    avatar: "/middle-aged-french-man-portrait.jpg",
  },
  {
    name: "Sophie L.",
    rating: 5,
    date: "Il y a 1 mois",
    text: "Super expérience pour l'achat de ma voiture. Ils m'ont très bien conseillée et le véhicule était exactement comme décrit. Suivi après-vente au top !",
    avatar: "/young-french-woman-portrait-smiling.jpg",
  },
  {
    name: "Marc D.",
    rating: 5,
    date: "Il y a 3 semaines",
    text: "Dépannage rapide et efficace un dimanche soir ! L'équipe est réactive et le service irréprochable. Merci pour votre professionnalisme.",
    avatar: "/older-french-man-portrait-friendly.jpg",
  },
  {
    name: "Émilie R.",
    rating: 4,
    date: "Il y a 2 mois",
    text: "Très bon garage pour l'entretien de mon véhicule. Les mécaniciens sont compétents et prennent le temps d'expliquer les réparations nécessaires.",
    avatar: "/french-woman-portrait-professional.jpg",
  },
]

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const visibleReviews = []
  for (let i = 0; i < 3; i++) {
    visibleReviews.push(reviews[(currentIndex + i) % reviews.length])
  }

  return (
    <section id="avis" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Témoignages</span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl text-foreground mt-4">
              AVIS <span className="text-primary">CLIENTS</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl">
              Découvrez ce que nos clients disent de nous sur Google
            </p>
          </div>

          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-xs font-bold text-blue-500">
                G
              </div>
              <span className="font-semibold text-foreground">4.9</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-muted-foreground text-sm">(127 avis)</span>
            </div>
          </div>
        </div>

        {/* Reviews carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleReviews.map((review, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg border border-border hover:border-primary/30 transition-colors"
              >
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < review.rating ? "fill-primary text-primary" : "text-border"}`}
                    />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6">{review.text}</p>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src={review.avatar || "/placeholder.svg"}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-muted-foreground text-sm">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-10">
            <Button
              variant="outline"
              size="icon"
              onClick={prevReview}
              className="border-border hover:bg-primary hover:text-primary-foreground hover:border-primary bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextReview}
              className="border-border hover:bg-primary hover:text-primary-foreground hover:border-primary bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="text-center mt-10">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            Voir tous les avis sur Google
          </Button>
        </div>
      </div>
    </section>
  )
}
