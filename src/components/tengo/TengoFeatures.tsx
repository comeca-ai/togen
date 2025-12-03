import { MessageSquareText, ListTodo, Languages, Zap, Shield, Clock } from "lucide-react";

const TengoFeatures = () => {
  const features = [
    {
      icon: MessageSquareText,
      title: "Transcrição Instantânea",
      description: "Converte áudios de qualquer duração em texto preciso em segundos.",
    },
    {
      icon: ListTodo,
      title: "Extração de Tarefas",
      description: "IA identifica automaticamente ações e prazos mencionados no áudio.",
    },
    {
      icon: Languages,
      title: "Tradução Automática",
      description: "Traduza mensagens para +50 idiomas mantendo o contexto original.",
    },
    {
      icon: Zap,
      title: "Respostas Sugeridas",
      description: "Receba sugestões inteligentes de respostas baseadas no conteúdo.",
    },
    {
      icon: Shield,
      title: "Privacidade Total",
      description: "Seus dados são criptografados e nunca armazenados em nossos servidores.",
    },
    {
      icon: Clock,
      title: "Histórico Organizado",
      description: "Todas as transcrições ficam salvas e pesquisáveis por até 30 dias.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-tengo-surface">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-tengo-primary/10 text-tengo-primary rounded-full text-sm font-medium mb-4">
            Recursos
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-tengo-foreground mb-4">
            Tudo que você precisa para{" "}
            <span className="text-tengo-primary">dominar</span> suas mensagens
          </h2>
          <p className="text-tengo-muted text-lg">
            Ferramentas poderosas de IA que transformam a forma como você lida com áudios.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-tengo-background rounded-2xl border border-tengo-border hover:border-tengo-primary/50 hover:shadow-lg hover:shadow-tengo-primary/5 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-tengo-primary/10 flex items-center justify-center mb-4 group-hover:bg-tengo-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-tengo-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-lg text-tengo-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-tengo-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TengoFeatures;
