export type Testimonial = {
  name: string;
  quote: string;
  statValue?: number;
  statSuffix?: string;
  statLabel: string;
};

// Adicionar novos depoimentos aqui conforme forem coletados (ver .claude/FEEDBACKS.md)
export const testimonials: Testimonial[] = [
  {
    name: "Kauan",
    quote:
      "Quando comecei, estava decidido: dessa vez eu mudaria os hábitos de verdade — porque sem isso, seria só mais dinheiro jogado fora. Segui a dieta à risca e os resultados vieram, e com eles a motivação. O Heitor esteve presente em cada etapa, sempre perguntando sobre a fome, os alimentos, a evolução — até quando decidi apostar na tirzepatida, e aí a mudança foi radical, na dieta e nos treinos. Hoje já são 23kg a menos em 6 meses, e a meta não para — ainda temos um grande propósito pela frente.",
    statValue: 23,
    statSuffix: "kg",
    statLabel: "em 6 meses de acompanhamento",
  },
  {
    name: "Erick Borges",
    quote:
      "Fiz o acompanhamento por 6 meses e consegui alcançar meu objetivo. O Heitor me deu muita atenção, entendeu exatamente o que eu queria e montou as refeições de uma forma muito boa — e toda semana ele perguntava como tinha sido minha semana, acompanhando de verdade se eu estava seguindo a dieta como planejado. É um profissional que recomendo para várias pessoas.",
    statValue: 6,
    statSuffix: " meses",
    statLabel: "até alcançar o objetivo",
  },
  {
    name: "Gustavo Rezende",
    quote:
      "Uma experiência muito positiva — tanto pela qualidade do serviço, das dietas e do conhecimento nutricional, quanto pela clareza na transmissão das informações e pela proximidade com o paciente. A disponibilidade do Heitor é algo louvável: ao mesmo tempo que você tem um profissional extremamente qualificado, tem alguém que entende as frustrações do dia a dia e não menospreza nenhum esforço ou dificuldade.",
    statLabel: "Proximidade e suporte constante",
  },
];
