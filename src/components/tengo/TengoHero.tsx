import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle2, Sparkles } from "lucide-react";

const TengoHero = () => {
  const stats = [
    { value: "+25k", label: "Usuários ativos" },
    { value: "98%", label: "Satisfação" },
    { value: "2min", label: "Setup" },
  ];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-tengo-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-tengo-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-tengo-surface rounded-full border border-tengo-border">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-tengo-primary to-tengo-accent flex items-center justify-center text-white text-xs font-medium border-2 border-tengo-background"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-tengo-foreground">+25k usuários</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-tengo-foreground leading-tight">
                Automatize suas{" "}
                <span className="text-tengo-primary">conversas</span>{" "}
                com IA
              </h1>
              <p className="text-lg md:text-xl text-tengo-muted max-w-lg">
                Tengo transforma mensagens de voz em ações. Resumos, tarefas e respostas automáticas — tudo em segundos.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-tengo-primary hover:bg-tengo-primary/90 text-white group"
              >
                Começar grátis
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-tengo-border text-tengo-foreground hover:bg-tengo-surface group"
              >
                <Play className="w-4 h-4 mr-2" />
                Ver demonstração
              </Button>
            </div>

            {/* Features List */}
            <div className="flex flex-wrap gap-4">
              {["Sem cartão de crédito", "7 dias grátis", "Cancele quando quiser"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-tengo-muted">
                  <CheckCircle2 className="w-4 h-4 text-tengo-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Product Mockup */}
          <div className="relative">
            <div className="relative bg-tengo-surface rounded-3xl border border-tengo-border p-6 shadow-2xl shadow-tengo-primary/10">
              {/* Chat Interface Mock */}
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-tengo-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-tengo-primary to-tengo-accent flex items-center justify-center">
                    <span className="text-white font-medium">M</span>
                  </div>
                  <div>
                    <p className="font-medium text-tengo-foreground">Maria Santos</p>
                    <p className="text-xs text-tengo-muted">Online</p>
                  </div>
                </div>

                {/* Voice Message */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-tengo-primary to-tengo-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">M</span>
                  </div>
                  <div className="bg-tengo-background rounded-2xl rounded-tl-none p-4 max-w-[280px]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-tengo-primary/20 flex items-center justify-center">
                        <Play className="w-4 h-4 text-tengo-primary" />
                      </div>
                      <div className="flex-1 h-6 flex items-center gap-0.5">
                        {[...Array(20)].map((_, i) => (
                          <div
                            key={i}
                            className="w-1 bg-tengo-primary/40 rounded-full"
                            style={{ height: `${Math.random() * 100}%` }}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-tengo-muted">2:34</span>
                    </div>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex gap-3 justify-end">
                  <div className="bg-tengo-primary text-white rounded-2xl rounded-tr-none p-4 max-w-[300px]">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-xs font-medium opacity-90">Resumo por IA</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p>📋 <strong>Tarefas:</strong></p>
                      <ul className="text-sm opacity-90 space-y-1 ml-4">
                        <li>• Enviar relatório de vendas</li>
                        <li>• Agendar reunião dia 15</li>
                        <li>• Responder cliente até 17h</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Typing indicator */}
                <div className="flex items-center gap-2 text-tengo-muted text-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-tengo-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 bg-tengo-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 bg-tengo-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                  <span>Tengo está processando...</span>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-3 -right-3 bg-tengo-accent text-tengo-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                ⚡ Tempo real
              </div>
            </div>

            {/* Stats Cards */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl px-4 py-3 shadow-lg border border-tengo-border text-center"
                >
                  <p className="font-display font-bold text-tengo-primary">{stat.value}</p>
                  <p className="text-xs text-tengo-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TengoHero;
