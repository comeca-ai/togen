import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TengoFAQ = () => {
  const faqs = [
    {
      question: "Como o Tengo funciona com WhatsApp?",
      answer: "O Tengo se conecta ao WhatsApp Web através de uma extensão segura do navegador. Quando você recebe um áudio, basta clicar no botão do Tengo para transcrever e resumir instantaneamente.",
    },
    {
      question: "Meus áudios são armazenados?",
      answer: "Não. O processamento acontece em tempo real e seus áudios são descartados imediatamente após a transcrição. Apenas o texto resultante fica disponível por até 30 dias no seu histórico, e você pode apagar a qualquer momento.",
    },
    {
      question: "Funciona em português brasileiro?",
      answer: "Sim! O Tengo foi treinado especialmente para entender o português brasileiro, incluindo gírias, sotaques regionais e expressões coloquiais. Também suporta mais de 50 outros idiomas.",
    },
    {
      question: "Posso usar no celular?",
      answer: "Atualmente o Tengo funciona via WhatsApp Web no computador. Estamos desenvolvendo um app nativo para iOS e Android que será lançado em breve.",
    },
    {
      question: "Qual a precisão das transcrições?",
      answer: "Nossa IA alcança mais de 95% de precisão em áudios com qualidade razoável. Áudios com muito ruído de fundo podem ter precisão reduzida, mas ainda assim entregamos resultados úteis.",
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Sim! Você pode cancelar sua assinatura a qualquer momento sem multas ou taxas. Seu acesso continua até o fim do período pago.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-tengo-surface">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-tengo-primary/10 text-tengo-primary rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-tengo-foreground mb-4">
            Perguntas{" "}
            <span className="text-tengo-primary">frequentes</span>
          </h2>
          <p className="text-tengo-muted text-lg">
            Tudo que você precisa saber sobre o Tengo.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-tengo-background rounded-xl border border-tengo-border px-6 data-[state=open]:shadow-lg data-[state=open]:shadow-tengo-primary/5 transition-all"
              >
                <AccordionTrigger className="text-left font-display font-medium text-tengo-foreground hover:text-tengo-primary hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-tengo-muted pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default TengoFAQ;
