import { Atom, Beaker, Book, Calculator, Dna, LucideIcon } from "lucide-react";

export interface NoteType {
  id: number;
  name: string;
  content: string;
}

export interface CollectionType {
  id: number;
  name: string;
  subject: string;
  icon: LucideIcon;
  notes: Array<NoteType>;
}
type CollectionData = Array<CollectionType>;

export const collectionData: CollectionData = [
  {
    id: 1,
    name: "Mathematics",
    subject: "Mathematics",
    icon: Calculator, // Or potentially an imported icon component/definition
    notes: [
      {
        id: 1,
        name: "Basic Operations",
        content:
          "Fundamental concepts including addition, subtraction, multiplication, division, exponents, and roots.",
      },
      {
        id: 2,
        name: "Trigonometry",
        content:
          "Study of triangles, circles, angles, and relationships between sides and angles. Key formulas: sine, cosine, tangent.",
      },
      {
        id: 3,
        name: "Calculus Basics",
        content:
          "Introduction to limits, derivatives, and integrals. Rules for differentiation and integration.",
      },
      {
        id: 4,
        name: "Algebra Fundamentals",
        content:
          "Solving equations with variables, understanding polynomials, functions, and graphing.",
      },
    ],
  },
  {
    id: 2,
    name: "Physics",
    subject: "Physics",
    icon: Atom,
    notes: [
      {
        id: 1,
        name: "Classical Mechanics",
        content:
          "Newton's laws of motion: inertia, F=ma, and action-reaction. Concepts of force, mass, and acceleration.",
      },
      {
        id: 2,
        name: "Thermodynamics",
        content:
          "Principles of heat transfer (conduction, convection, radiation), temperature scales, and laws of thermodynamics.",
      },
      {
        id: 3,
        name: "Electromagnetism",
        content:
          "Study of electric charges, fields, currents, circuits (Ohm's Law), and magnetic fields.",
      },
      {
        id: 4,
        name: "Waves and Optics",
        content:
          "Properties of waves, including light and sound. Topics: reflection, refraction, diffraction, and interference.",
      },
    ],
  },
  {
    id: 3,
    name: "Chemistry",
    subject: "Chemistry",
    icon: Beaker,
    notes: [
      {
        id: 1,
        name: "Atomic Structure",
        content:
          "Structure of atoms (protons, neutrons, electrons), isotopes, electron configuration, and the periodic table trends.",
      },
      {
        id: 2,
        name: "Chemical Bonding",
        content:
          "Types of chemical bonds (ionic, covalent, metallic), Lewis structures, VSEPR theory, and molecular geometry.",
      },
      {
        id: 3,
        name: "Chemical Reactions",
        content:
          "Balancing chemical equations, stoichiometry calculations, limiting reactants, and percent yield.",
      },
      {
        id: 4,
        name: "Acids and Bases",
        content:
          "Properties of acids and bases, pH scale, buffers, and titration principles.",
      },
      {
        id: 5,
        name: "Organic Chemistry Basics",
        content:
          "Introduction to carbon-containing compounds, functional groups, nomenclature, and basic reactions.",
      },
    ],
  },
  {
    id: 4,
    name: "Biology",
    subject: "Biology",
    icon: Dna,
    notes: [
      {
        id: 1,
        name: "Cell Biology",
        content:
          "Structure and function of prokaryotic and eukaryotic cells, organelles, and cell membrane transport.",
      },
      {
        id: 2,
        name: "Genetics",
        content:
          "Principles of heredity, DNA structure and replication, gene expression (transcription, translation), and Mendelian genetics.",
      },
      {
        id: 3,
        name: "Evolution",
        content:
          "Theory of evolution by natural selection, evidence for evolution, speciation, and population genetics.",
      },
      {
        id: 4,
        name: "Ecology",
        content:
          "Interactions between organisms and their environment, ecosystems, population dynamics, and biomes.",
      },
      {
        id: 5,
        name: "Human Physiology",
        content:
          "Study of the structure and function of major organ systems in humans, including circulatory, respiratory, and nervous systems.",
      },
    ],
  },
  {
    id: 5,
    name: "History",
    subject: "History",
    icon: Book,
    notes: [
      {
        id: 1,
        name: "Ancient Civilizations",
        content:
          "Development of early human societies, river valley civilizations (Mesopotamia, Egypt, Indus Valley, China), and classical empires (Greece, Rome).",
      },
      {
        id: 2,
        name: "Medieval Period",
        content:
          "Fall of the Western Roman Empire, rise of Byzantium, feudalism in Europe, the Crusades, and the Mongol Empire.",
      },
      {
        id: 3,
        name: "Renaissance and Reformation",
        content:
          "Cultural rebirth in Europe, exploration and discovery, the Reformation, and the Scientific Revolution.",
      },
      {
        id: 4,
        name: "Age of Revolutions & WWI",
        content:
          "The American and French Revolutions, the Industrial Revolution, rise of nationalism, imperialism, and World War I.",
      },
      {
        id: 5,
        name: "Modern World History",
        content:
          "The interwar period, World War II, the Cold War, decolonization, and contemporary global issues.",
      },
    ],
  },
  {
    id: 6,
    name: "Biology",
    subject: "Biology",
    icon: Dna,
    notes: [
      {
        id: 1,
        name: "Cell Biology",
        content:
          "Structure and function of prokaryotic and eukaryotic cells, organelles, and cell membrane transport.",
      },
      {
        id: 2,
        name: "Genetics",
        content:
          "Principles of heredity, DNA structure and replication, gene expression (transcription, translation), and Mendelian genetics.",
      },
      {
        id: 3,
        name: "Evolution",
        content:
          "Theory of evolution by natural selection, evidence for evolution, speciation, and population genetics.",
      },
      {
        id: 4,
        name: "Ecology",
        content:
          "Interactions between organisms and their environment, ecosystems, population dynamics, and biomes.",
      },
      {
        id: 5,
        name: "Human Physiology",
        content:
          "Study of the structure and function of major organ systems in humans, including circulatory, respiratory, and nervous systems.",
      },
    ],
  },
  {
    id: 7,
    name: "History",
    subject: "History",
    icon: Book,
    notes: [
      {
        id: 1,
        name: "Ancient Civilizations",
        content:
          "Development of early human societies, river valley civilizations (Mesopotamia, Egypt, Indus Valley, China), and classical empires (Greece, Rome).",
      },
      {
        id: 2,
        name: "Medieval Period",
        content:
          "Fall of the Western Roman Empire, rise of Byzantium, feudalism in Europe, the Crusades, and the Mongol Empire.",
      },
      {
        id: 3,
        name: "Renaissance and Reformation",
        content:
          "Cultural rebirth in Europe, exploration and discovery, the Reformation, and the Scientific Revolution.",
      },
      {
        id: 4,
        name: "Age of Revolutions & WWI",
        content:
          "The American and French Revolutions, the Industrial Revolution, rise of nationalism, imperialism, and World War I.",
      },
      {
        id: 5,
        name: "Modern World History",
        content:
          "The interwar period, World War II, the Cold War, decolonization, and contemporary global issues.",
      },
    ],
  },
  {
    id: 8,
    name: "History",
    subject: "History",
    icon: Book,
    notes: [
      {
        id: 1,
        name: "Ancient Civilizations",
        content:
          "Development of early human societies, river valley civilizations (Mesopotamia, Egypt, Indus Valley, China), and classical empires (Greece, Rome).",
      },
      {
        id: 2,
        name: "Medieval Period",
        content:
          "Fall of the Western Roman Empire, rise of Byzantium, feudalism in Europe, the Crusades, and the Mongol Empire.",
      },
      {
        id: 3,
        name: "Renaissance and Reformation",
        content:
          "Cultural rebirth in Europe, exploration and discovery, the Reformation, and the Scientific Revolution.",
      },
      {
        id: 4,
        name: "Age of Revolutions & WWI",
        content:
          "The American and French Revolutions, the Industrial Revolution, rise of nationalism, imperialism, and World War I.",
      },
      {
        id: 5,
        name: "Modern World History",
        content:
          "The interwar period, World War II, the Cold War, decolonization, and contemporary global issues.",
      },
    ],
  },
];
