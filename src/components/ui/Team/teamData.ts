export type TeamMember = {
  initials: string;
  photo?: string;
  name: string;
  specialty: string;
  text: string;
  pending?: boolean;
};

// Adicionar novos profissionais aqui conforme a equipe crescer
export const team: TeamMember[] = [
  {
    initials: "HR",
    photo: "/heitor-parada.jpeg",
    name: "Heitor Rodrigues Parada",
    specialty: "Nutrição",
    text: "Estratégia nutricional individualizada, com foco em performance e estética.",
  },
  {
    initials: "DP",
    name: "Denise Rodrigues Parada",
    specialty: "Psicologia",
    text: "[ Texto de apresentação a definir — em breve ]",
    pending: true,
  },
];
