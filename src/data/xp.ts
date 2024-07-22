export type Job = {
  company: string;
  roles: {
    name: string;
    start: Date;
    end?: Date;
  }[];
};

export const jobs = [
  {
    company: "Iboux",
    roles: [
      {
        name: "System Team Leader",
        start: new Date(2024, 6, 1),
      },
      {
        name: "System Integrations Specialist",
        start: new Date(2024, 2, 1),
        end: new Date(2024, 6, 1),
      },
    ],
  },

  {
    company: "Bocantino",
    roles: [
      {
        name: "Independent Web Developer",
        start: new Date(2023, 12, 1),
      },
    ],
  },

  {
    company: "Tribal Consulting",
    roles: [
      {
        name: "FullStack Programer",
        start: new Date(2023, 2, 1),
        end: new Date(2023, 9, 1),
      },
    ],
  },
] satisfies Job[];
