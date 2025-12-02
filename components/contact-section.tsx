"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Contactez-nous
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl text-foreground mt-4">
            PRENEZ <span className="text-primary">CONTACT</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Une question, un devis, une prise de rendez-vous ? Notre équipe vous
            répond dans les plus brefs délais.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact form */}
          <div className="bg-card p-8 md:p-10 rounded-lg border border-border">
            <h3 className="font-[family-name:var(--font-heading)] text-2xl text-foreground mb-6">
              Envoyez-nous un message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nom complet *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Téléphone *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="06 00 00 00 00"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-secondary border-border focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Sujet
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Objet de votre message"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="bg-secondary border-border focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message *
                </label>
                <Textarea
                  id="message"
                  placeholder="Décrivez votre demande..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="bg-secondary border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-6"
              >
                <Send className="w-5 h-5 mr-2" />
                Envoyer le message
              </Button>
            </form>
          </div>

          {/* Contact info & map */}
          <div className="space-y-8">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <img
                src="/garage-dehors.jpg"
                alt="Notre garage"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-[family-name:var(--font-heading)] text-2xl text-foreground">
                  JC Performance
                </p>
                <p className="text-muted-foreground">
                  Votre garage de confiance
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Adresse</h4>
                <p className="text-muted-foreground text-sm">
                  1 Rue de la Plaine
                  <br />
                  02700 Tergnier, France
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  Téléphone
                </h4>
                <a
                  href="tel:06 18 71 50 62"
                  className="text-primary hover:underline"
                >
                  06 18 71 50 62
                </a>
                <p className="text-muted-foreground text-sm mt-1">
                  Urgences : 06 18 71 50 62
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Email</h4>
                <a
                  href="mailto:contact@jcperformance.fr"
                  className="text-primary hover:underline"
                >
                  contact@jcperformance.fr
                </a>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Horaires</h4>
                <p className="text-muted-foreground text-sm">
                  Lun - Sam : 9h - 12h30
                  <br />
                  14h - 18h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
