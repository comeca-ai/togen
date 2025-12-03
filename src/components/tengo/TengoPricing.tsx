import { Button } from "@/components/ui/button";
import { Check, Zap, Star } from "lucide-react";

const TengoPricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Grátis",
      period: "para sempre",
      description: "Para quem quer experimentar",
      features: [
        "50 transcrições/mês",
        "Resumos automáticos",
        "1 idioma",
        "Suporte por email",
      ],
      cta: "Começar grátis",
      popular: false,
    },
    {
      name: "Pro",
      price: "R$ 29",
      period: "/mês",
      description: "Para profissionais",
      features: [
        "Transcrições ilimitadas",
        "Extração de tarefas",
        "Todos os idiomas",
        "Suporte prioritário",
        "API de integração",
        "Histórico de 90 dias",
      ],
      cta: "Assinar Pro",
      popular: true,
    },
    {
      name: "Teams",
      price: "R$ 79",
      period: "/mês",
      description: "Para equipes",
      features: [
        "Tudo do Pro",
        "Até 10 usuários",
        "Painel de administração",
        "Relatórios de uso",
        "SSO & SAML",
        "SLA garantido",
      ],
      cta: "Falar com vendas",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-tengo-primary/10 text-tengo-primary rounded-full text-sm font-medium mb-4">
            Preços
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-tengo-foreground mb-4">
            Escolha o plano{" "}
            <span className="text-tengo-primary">ideal</span> para você
          </h2>
          <p className="text-tengo-muted text-lg">
            Comece grátis. Sem cartão de crédito. Cancele quando quiser.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-6 ${
                plan.popular
                  ? "bg-tengo-primary text-white border-tengo-primary scale-105 shadow-2xl shadow-tengo-primary/20"
                  : "bg-tengo-background border-tengo-border"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-tengo-accent text-tengo-foreground px-3 py-1 rounded-full text-sm font-medium">
                  <Star className="w-3 h-3 fill-current" />
                  Mais popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className={`font-display font-semibold text-lg mb-2 ${plan.popular ? "text-white" : "text-tengo-foreground"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-4xl font-display font-bold ${plan.popular ? "text-white" : "text-tengo-foreground"}`}>
                    {plan.price}
                  </span>
                  <span className={plan.popular ? "text-white/70" : "text-tengo-muted"}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-sm mt-2 ${plan.popular ? "text-white/80" : "text-tengo-muted"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className={`w-4 h-4 ${plan.popular ? "text-tengo-accent" : "text-tengo-primary"}`} />
                    <span className={`text-sm ${plan.popular ? "text-white/90" : "text-tengo-muted"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-white text-tengo-primary hover:bg-white/90"
                    : "bg-tengo-primary text-white hover:bg-tengo-primary/90"
                }`}
              >
                {plan.popular && <Zap className="w-4 h-4 mr-2" />}
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TengoPricing;
