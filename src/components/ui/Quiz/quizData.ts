export type QuizTier = "individual" | "multi" | "homecare";

export const quizQuestions: {
  question: string;
  options: { label: string; tier: QuizTier }[];
}[] = [
  {
    question: "Como você prefere ser acompanhado?",
    options: [
      { label: "Só um profissional, focado numa área", tier: "individual" },
      { label: "Mais de um profissional, trabalhando junto", tier: "multi" },
      { label: "Uma equipe completa, com visitas presenciais", tier: "homecare" },
    ],
  },
  {
    question: "O que mais pesa na sua decisão agora?",
    options: [
      { label: "Simplicidade e previsibilidade", tier: "individual" },
      { label: "Ter as áreas alinhadas em torno do mesmo objetivo", tier: "multi" },
      { label: "Comodidade e exclusividade", tier: "homecare" },
    ],
  },
  {
    question: "Qual desses cenários soa mais com você?",
    options: [
      { label: "Já sei o que preciso, só falta o profissional certo", tier: "individual" },
      { label: "Preciso de nutrição e psicologia juntas pra sair do lugar", tier: "multi" },
      { label: "Quero o máximo de suporte, sem me preocupar com logística", tier: "homecare" },
    ],
  },
];

export const tierResults: Record<
  QuizTier,
  { title: string; text: string; message: string }
> = {
  individual: {
    title: "Atendimento Individual",
    text: "Um profissional só, focado no que você mais precisa agora — online ou presencial.",
    message:
      "Olá! Fiz o teste rápido no site e o formato indicado foi o Atendimento Individual. Quero saber mais.",
  },
  multi: {
    title: "Acompanhamento Multidisciplinar",
    text: "Mais de um profissional trabalhando de forma coordenada em torno do mesmo objetivo.",
    message:
      "Olá! Fiz o teste rápido no site e o formato indicado foi o Acompanhamento Multidisciplinar. Quero saber mais.",
  },
  homecare: {
    title: "Home Care",
    text: "A experiência mais completa — parte da equipe até você, com acompanhamento integrado.",
    message:
      "Olá! Fiz o teste rápido no site e o formato indicado foi o Home Care. Quero saber mais.",
  },
};

// Empate: prioriza o formato coordenado antes de ir pro extremo (individual ou homecare)
const TIE_BREAK_PRIORITY: QuizTier[] = ["multi", "homecare", "individual"];

export function computeQuizResult(answers: QuizTier[]): QuizTier {
  const counts: Record<QuizTier, number> = { individual: 0, multi: 0, homecare: 0 };
  answers.forEach((tier) => {
    counts[tier] += 1;
  });
  const max = Math.max(...Object.values(counts));
  return TIE_BREAK_PRIORITY.find((tier) => counts[tier] === max) ?? "multi";
}
