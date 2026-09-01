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
    photo: "/denise-parada.jpeg",
    name: "Denise Rodrigues Parada",
    specialty: "Psicologia",
    text: "Pós-graduada em TCC e pós-graduanda em Terapia do Esquema. Vasto conhecimento teórico e prático em ecossistemas multidisciplinares e atuação em consultório.",
  },
];
