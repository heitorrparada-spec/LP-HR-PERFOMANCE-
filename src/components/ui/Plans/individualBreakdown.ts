export type ProfessionalProcess = {
  key: string;
  label: string;
  quote: string;
  includes: string[];
  steps: { title: string; text: string }[];
};

// Detalhamento por profissional dentro do Acompanhamento Individual.
// Conteúdo de Psicologia é um rascunho até a Denise mandar o texto dela
// (ver .claude/FEEDBACKS.md e o placeholder em About.tsx).
export const individualProfessionals: ProfessionalProcess[] = [
  {
    key: "nutricao",
    label: "Acompanhamento Nutricional",
    quote:
      "Mais do que uma dieta, um processo pensado exclusivamente para você e o seu objetivo.",
    includes: [
      "Planejamento alimentar individualizado",
      "Organização da rotina alimentar",
      "Ajustes periódicos conforme evolução",
      "Suporte contínuo para dúvidas",
    ],
    steps: [
      {
        title: "Anamnese",
        text: "Formulário inicial sobre rotina, histórico e objetivos.",
      },
      {
        title: "Avaliação física",
        text: "Quando aplicável, pra embasar a estratégia com dados reais.",
      },
      {
        title: "Estratégia",
        text: "Plano alimentar construído pra sua rotina, não o contrário.",
      },
      {
        title: "Ajustes",
        text: "Revisões periódicas conforme a resposta do seu corpo.",
      },
    ],
  },
  {
    key: "psicologia",
    label: "Acompanhamento Psicológico",
    quote: "Mudança sustentável também passa pela cabeça — não só pelo prato.",
    includes: [
      "Escuta acolhedora, sem julgamentos",
      "Ferramentas pra lidar com as frustrações do processo",
      "Fortalecimento da relação com o corpo e a comida",
      "Suporte contínuo entre sessões",
    ],
    steps: [
      {
        title: "Anamnese",
        text: "Formulário inicial pra entender sua história e objetivos.",
      },
      {
        title: "Call de alinhamento estratégico",
        text: "Conversa inicial pra alinhar expectativas com o restante da equipe, quando pertinente.",
      },
      {
        title: "Sessões",
        text: "Presenciais ou online, na frequência combinada.",
      },
      {
        title: "Acompanhamento",
        text: "Continuidade e ajustes conforme o processo avança.",
      },
    ],
  },
];
