import { MessageCircle, Sparkles, CheckSquare } from "lucide-react";

const TengoHowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      step: "01",
      title: "Receba um áudio",
      description: "Quando alguém te enviar uma mensagem de voz no WhatsApp, o Tengo entra em ação automaticamente.",
    },
    {
      icon: Sparkles,
      step: "02",
      title: "IA processa",
      description: "Nossa inteligência artificial transcreve, resume e identifica as ações necessárias em segundos.",
    },
    {
      icon: CheckSquare,
      step: "03",
      title: "Aja com clareza",
      description: "Receba um resumo claro com tarefas extraídas e sugestões de resposta prontas para usar.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-tengo-primary/10 text-tengo-primary rounded-full text-sm font-medium mb-4">
            Como funciona
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-tengo-foreground mb-4">
            Simples como{" "}
            <span className="text-tengo-primary">1, 2, 3</span>
          </h2>
          <p className="text-tengo-muted text-lg">
            Configure em 2 minutos e comece a economizar horas do seu dia.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-tengo-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="bg-tengo-background rounded-2xl border border-tengo-border p-8 text-center hover:shadow-xl hover:shadow-tengo-primary/5 transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-tengo-primary text-white font-bold text-sm flex items-center justify-center">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-tengo-primary/10 flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-tengo-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-semibold text-xl text-tengo-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-tengo-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TengoHowItWorks;
