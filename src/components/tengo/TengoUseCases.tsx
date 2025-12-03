import { Briefcase, GraduationCap, HeartHandshake, ShoppingBag } from "lucide-react";

const TengoUseCases = () => {
  const useCases = [
    {
      icon: Briefcase,
      title: "Empreendedores",
      description: "Nunca mais perca um pedido ou compromisso escondido em um áudio de 5 minutos.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: GraduationCap,
      title: "Estudantes",
      description: "Transforme áudios de professores e colegas em anotações organizadas instantaneamente.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: HeartHandshake,
      title: "Profissionais de Saúde",
      description: "Documente orientações a pacientes e mantenha registros precisos sem esforço.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: ShoppingBag,
      title: "Vendedores",
      description: "Capture detalhes de negociações e pedidos de clientes automaticamente.",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="use-cases" className="py-24 bg-tengo-surface">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-tengo-primary/10 text-tengo-primary rounded-full text-sm font-medium mb-4">
            Para quem é
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-tengo-foreground mb-4">
            Tengo é para quem{" "}
            <span className="text-tengo-primary">valoriza tempo</span>
          </h2>
          <p className="text-tengo-muted text-lg">
            Profissionais de todas as áreas já economizam horas por semana com o Tengo.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="group relative overflow-hidden rounded-2xl bg-tengo-background border border-tengo-border p-6 hover:shadow-xl transition-all duration-300"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              <div className="relative flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center flex-shrink-0`}>
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-tengo-foreground mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-tengo-muted text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TengoUseCases;
