export type TeamMember = {
  initials: string;
  photo?: string;
  name: string;
  specialty: string;
  text: string;
};

// Adicionar novos profissionais aqui conforme a equipe crescer
export const team: TeamMember[] = [
  {
    initials: "HR",
    photo: "/heitor-parada.jpeg",
    name: "Heitor Rodrigues Parada",
    specialty: "Nutrição Esportiva",
    text: "Estratégia nutricional individualizada, com foco em performance e estética.",
  },
];
