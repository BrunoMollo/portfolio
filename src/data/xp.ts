export type Job = {
  slug: string;
  company: string;
  roles: {
    name: string;
    start: Date;
    end?: Date;
  }[];
};

// Remember that the month index starts with zero

export const jobs = [
  {
    company: "Iboux",
    slug: "iboux",
    roles: [
      {
        name: "System Team Leader",
        start: new Date(2024, 6, 1),
      },
      {
        name: "System Integrations Specialist",
        start: new Date(2024, 1, 1),
        end: new Date(2024, 6, 1),
      },
    ],
  },

  {
    company: "Bocantino",
    slug: "bocantino",
    roles: [
      {
        name: "Independent Web Developer",
        start: new Date(2023, 11, 1),
      },
    ],
  },

  {
    company: "Tribal Consulting",
    slug: "tribal",
    roles: [
      {
        name: "FullStack Programer",
        start: new Date(2023, 1, 1),
        end: new Date(2023, 8, 1),
      },
    ],
  },
] satisfies Job[];
