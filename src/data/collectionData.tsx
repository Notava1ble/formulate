// GENERATED USING GEMINI 2.5 PRO

import {
  Atom,
  Beaker,
  Calculator,
  FlaskConical, // Good for Stoichiometry
  FunctionSquare, // Good for Calculus
  LucideIcon,
  Move, // Good for Mechanics
  Ruler, // Alternative for Geometry
  Sigma, // Good for Algebra
  Thermometer, // Good for Thermodynamics
  Zap, // Good for Electromagnetism
  Gauge, // Good for Kinetics/Equilibrium
  Waves, // Good for Atomic Structure / Waves
} from "lucide-react";

export interface CollectionType {
  id: number;
  name: string;
  subject: string;
  icon: LucideIcon;
  subCollection: Array<SubCollectionType>;
}

export interface SubCollectionType {
  id: number;
  name: string;
  subject: string; // Subject inherited from parent Collection
  icon: LucideIcon;
  notes: Array<NoteType>;
}

export interface NoteType {
  id: number;
  name: string;
  theory: string;
  formulas: Array<string>; // Formulas are now LaTeX strings
  symbols: Array<{
    symbol: string; // The symbol as used in the formula (or its readable equivalent)
    explanation: string;
  }>;
}

export type CollectionDataType = Array<CollectionType>;

// ======================================================
//      POPULATED COLLECTION DATA (with LaTeX Formulas)
// ======================================================
export const collectionData: CollectionDataType = [
  // -------------------- MATHEMATICS --------------------
  {
    id: 1,
    name: "Mathematics",
    subject: "Mathematics",
    icon: Calculator,
    subCollection: [
      // --- Algebra ---
      {
        id: 101,
        name: "Algebra",
        subject: "Mathematics",
        icon: Sigma,
        notes: [
          {
            id: 1011,
            name: "Linear Equations",
            theory:
              "Represent relationships between variables that form a straight line when plotted. Key forms include slope-intercept and standard form. The slope represents the rate of change.",
            formulas: [
              "y = mx + b",
              "Ax + By = C",
              "m = \\frac{y_2 - y_1}{x_2 - x_1}", // LaTeX slope formula
            ],
            symbols: [
              { symbol: "y", explanation: "Dependent variable" },
              { symbol: "m", explanation: "Slope" },
              { symbol: "x", explanation: "Independent variable" },
              { symbol: "b", explanation: "Y-intercept" },
              { symbol: "A, B", explanation: "Coefficients (Standard Form)" },
              { symbol: "C", explanation: "Constant (Standard Form)" },
              { symbol: "(x₁, y₁)", explanation: "Coordinates of first point" },
              {
                symbol: "(x₂, y₂)",
                explanation: "Coordinates of second point",
              },
            ],
          },
          {
            id: 1012,
            name: "Quadratic Equations",
            theory:
              "Equations of the form ax² + bx + c = 0. The quadratic formula solves for x. The discriminant (Δ) determines the nature of the roots (solutions).",
            formulas: [
              "ax^2 + bx + c = 0",
              "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}", // LaTeX Quadratic Formula
              "\\Delta = b^2 - 4ac", // LaTeX Discriminant
            ],
            symbols: [
              { symbol: "x", explanation: "Variable (solution)" },
              { symbol: "a", explanation: "Coefficient of x² (a ≠ 0)" },
              { symbol: "b", explanation: "Coefficient of x" },
              { symbol: "c", explanation: "Constant term" },
              {
                symbol: "\\pm",
                explanation: "Indicates two possible solutions",
              },
              { symbol: "\\sqrt{}", explanation: "Square root function" },
              { symbol: "\\Delta", explanation: "Discriminant" },
            ],
          },
          {
            id: 1013,
            name: "Logarithms",
            theory:
              "The logarithm is the inverse operation to exponentiation. The logarithm of a number y with respect to base b is the exponent to which b must be raised to produce y.",
            formulas: [
              "y = b^x \\Leftrightarrow x = \\log_b y", // Log definition
              "\\log_b (MN) = \\log_b M + \\log_b N", // Product Rule
              "\\log_b (M/N) = \\log_b M - \\log_b N", // Quotient Rule
              "\\log_b (M^p) = p \\log_b M", // Power Rule
              "\\log_b M = \\frac{\\log_c M}{\\log_c b}", // Change of Base
            ],
            symbols: [
              { symbol: "y", explanation: "Result of exponentiation" },
              {
                symbol: "b",
                explanation: "Base of the logarithm/exponent (b > 0, b ≠ 1)",
              },
              { symbol: "x", explanation: "Exponent / Logarithm value" },
              { symbol: "\\log_b", explanation: "Logarithm with base b" },
              {
                symbol: "M, N",
                explanation: "Arguments of the logarithm (positive numbers)",
              },
              { symbol: "p", explanation: "Exponent" },
              {
                symbol: "c",
                explanation:
                  "New base for change of base formula (c > 0, c ≠ 1)",
              },
            ],
          },
        ],
      },
      // --- Calculus ---
      {
        id: 102,
        name: "Calculus",
        subject: "Mathematics",
        icon: FunctionSquare,
        notes: [
          {
            id: 1021,
            name: "Derivatives",
            theory:
              "The derivative measures the instantaneous rate of change of a function. Rules exist for common function types.",
            formulas: [
              "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}", // Limit definition
              "\\frac{d}{dx} [x^n] = nx^{n-1}", // Power Rule
              "\\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)", // Product Rule
              "\\frac{d}{dx}[\\frac{f(x)}{g(x)}] = \\frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}", // Quotient Rule
              "\\frac{d}{dx}[f(g(x))] = f'(g(x)) g'(x)", // Chain Rule
            ],
            symbols: [
              {
                symbol: "f'(x)",
                explanation: "Derivative of f with respect to x",
              },
              { symbol: "\\frac{d}{dx}", explanation: "Derivative operator" },
              {
                symbol: "\\lim_{h \\to 0}",
                explanation: "Limit as h approaches 0",
              },
              { symbol: "h", explanation: "A small change in x" },
              { symbol: "x", explanation: "Variable" },
              { symbol: "n", explanation: "Constant exponent" },
              { symbol: "f(x), g(x)", explanation: "Functions of x" },
              {
                symbol: "f'(x), g'(x)",
                explanation: "Derivatives of f(x), g(x)",
              },
            ],
          },
          {
            id: 1022,
            name: "Integrals",
            theory:
              "Integration finds the antiderivative of a function, often interpreted as the area under a curve. The Fundamental Theorem connects differentiation and integration.",
            formulas: [
              "\\int x^n dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)", // Power Rule
              "\\int \\frac{1}{x} dx = \\ln|x| + C", // Integral of 1/x
              "\\int e^x dx = e^x + C", // Integral of e^x
              "\\int_a^b f(x) dx = F(b) - F(a) \\quad (\\text{where } F'(x)=f(x))", // Fundamental Theorem Pt 2
            ],
            symbols: [
              { symbol: "\\int", explanation: "Indefinite integral symbol" },
              {
                symbol: "\\int_a^b",
                explanation: "Definite integral from a to b",
              },
              { symbol: "x", explanation: "Variable of integration" },
              { symbol: "dx", explanation: "Indicates integration w.r.t. x" },
              { symbol: "n", explanation: "Constant exponent" },
              { symbol: "C", explanation: "Constant of integration" },
              {
                symbol: "\\ln|x|",
                explanation: "Natural logarithm of absolute value of x",
              },
              {
                symbol: "e",
                explanation: "Euler's number (base of natural log)",
              },
              { symbol: "a, b", explanation: "Limits of integration" },
              { symbol: "f(x)", explanation: "Integrand function" },
              { symbol: "F(x)", explanation: "Antiderivative of f(x)" },
            ],
          },
        ],
      },
      // --- Geometry ---
      {
        id: 103,
        name: "Geometry",
        subject: "Mathematics",
        icon: Ruler,
        notes: [
          {
            id: 1031,
            name: "Triangles & Pythagoras",
            theory:
              "Properties of triangles. The Pythagorean theorem relates the sides of a right-angled triangle.",
            formulas: [
              "A = \\frac{1}{2} b h", // Area of Triangle
              "a^2 + b^2 = c^2", // Pythagorean Theorem
            ],
            symbols: [
              { symbol: "A", explanation: "Area" },
              { symbol: "b", explanation: "Base length" },
              { symbol: "h", explanation: "Height (perpendicular to base)" },
              {
                symbol: "a, b",
                explanation: "Lengths of the legs (right triangle)",
              },
              {
                symbol: "c",
                explanation: "Length of the hypotenuse (right triangle)",
              },
            ],
          },
          {
            id: 1032,
            name: "Circles",
            theory: "Properties of circles defined by their radius.",
            formulas: [
              "A = \\pi r^2", // Area
              "C = 2 \\pi r", // Circumference
            ],
            symbols: [
              { symbol: "A", explanation: "Area" },
              { symbol: "C", explanation: "Circumference" },
              { symbol: "\\pi", explanation: "Pi (approx. 3.14159)" },
              { symbol: "r", explanation: "Radius" },
            ],
          },
          {
            id: 1033,
            name: "Spheres",
            theory: "Properties of spheres defined by their radius.",
            formulas: [
              "V = \\frac{4}{3} \\pi r^3", // Volume
              "A = 4 \\pi r^2", // Surface Area
            ],
            symbols: [
              { symbol: "V", explanation: "Volume" },
              { symbol: "A", explanation: "Surface Area" },
              { symbol: "\\pi", explanation: "Pi (approx. 3.14159)" },
              { symbol: "r", explanation: "Radius" },
            ],
          },
        ],
      },
    ],
  },

  // -------------------- PHYSICS --------------------
  {
    id: 2,
    name: "Physics",
    subject: "Physics",
    icon: Atom,
    subCollection: [
      // --- Mechanics ---
      {
        id: 201,
        name: "Mechanics",
        subject: "Physics",
        icon: Move,
        notes: [
          {
            id: 2011,
            name: "Newton's Laws & Forces",
            theory:
              "Newton's laws describe motion and forces. The second law relates net force, mass, and acceleration. Work is done when a force causes displacement.",
            formulas: [
              "\\vec{F}_{net} = m \\vec{a}", // Newton's Second Law (Vector)
              "W = F d \\cos \\theta", // Work done by a constant force
              "F_g = mg", // Force of Gravity near Earth
            ],
            symbols: [
              { symbol: "\\vec{F}_{net}", explanation: "Net Force (vector)" },
              { symbol: "m", explanation: "Mass" },
              { symbol: "\\vec{a}", explanation: "Acceleration (vector)" },
              { symbol: "W", explanation: "Work done" },
              { symbol: "F", explanation: "Magnitude of Force" },
              { symbol: "d", explanation: "Magnitude of Displacement" },
              {
                symbol: "\\theta",
                explanation: "Angle between Force and Displacement vectors",
              },
              { symbol: "F_g", explanation: "Force due to gravity (Weight)" },
              {
                symbol: "g",
                explanation: "Acceleration due to gravity (approx. 9.8 m/s²)",
              },
            ],
          },
          {
            id: 2012,
            name: "Kinematics (Constant Acceleration)",
            theory:
              "Describes motion without considering its causes. These equations apply when acceleration is constant.",
            formulas: [
              "v = v_0 + at",
              "\\Delta x = v_0 t + \\frac{1}{2} a t^2",
              "v^2 = v_0^2 + 2 a \\Delta x",
              "\\vec{v} = \\frac{\\Delta \\vec{x}}{\\Delta t}", // Average velocity (vector)
              "\\vec{a} = \\frac{\\Delta \\vec{v}}{\\Delta t}", // Average acceleration (vector)
            ],
            symbols: [
              { symbol: "v", explanation: "Final velocity" },
              { symbol: "v_0", explanation: "Initial velocity" },
              { symbol: "a", explanation: "Constant acceleration" },
              { symbol: "t", explanation: "Time interval" },
              { symbol: "\\Delta x", explanation: "Displacement" },
              { symbol: "\\vec{v}", explanation: "Velocity vector" },
              { symbol: "\\vec{x}", explanation: "Position vector" },
              {
                symbol: "\\Delta \\vec{x}",
                explanation: "Displacement vector",
              },
              { symbol: "\\Delta t", explanation: "Time interval" },
              { symbol: "\\vec{a}", explanation: "Acceleration vector" },
              {
                symbol: "\\Delta \\vec{v}",
                explanation: "Change in velocity vector",
              },
            ],
          },
          {
            id: 2013,
            name: "Energy",
            theory:
              "Energy is the capacity to do work. Kinetic energy is energy of motion, potential energy is stored energy (e.g., due to position in a gravitational field). Conservation of energy is a fundamental principle.",
            formulas: [
              "K = \\frac{1}{2} m v^2", // Kinetic Energy
              "U_g = mgh", // Gravitational Potential Energy (near Earth)
              "E_{mech} = K + U", // Mechanical Energy
              "W_{net} = \\Delta K", // Work-Energy Theorem
            ],
            symbols: [
              { symbol: "K", explanation: "Kinetic Energy" },
              { symbol: "m", explanation: "Mass" },
              { symbol: "v", explanation: "Speed (magnitude of velocity)" },
              { symbol: "U_g", explanation: "Gravitational Potential Energy" },
              { symbol: "g", explanation: "Acceleration due to gravity" },
              {
                symbol: "h",
                explanation: "Height relative to a reference point",
              },
              { symbol: "E_{mech}", explanation: "Total Mechanical Energy" },
              { symbol: "U", explanation: "Potential Energy (general)" },
              { symbol: "W_{net}", explanation: "Net work done on an object" },
              { symbol: "\\Delta K", explanation: "Change in Kinetic Energy" },
            ],
          },
        ],
      },
      // --- Thermodynamics ---
      {
        id: 202,
        name: "Thermodynamics",
        subject: "Physics",
        icon: Thermometer,
        notes: [
          {
            id: 2021,
            name: "Ideal Gas Law & Temperature",
            theory:
              "Relates macroscopic properties of ideal gases. Temperature is related to the average kinetic energy of particles.",
            formulas: [
              "PV = nRT", // Ideal Gas Law
              "PV = N k_B T", // Ideal Gas Law (Boltzmann constant form)
              "K_{avg} = \\frac{3}{2} k_B T", // Average translational KE per molecule
            ],
            symbols: [
              { symbol: "P", explanation: "Absolute Pressure" },
              { symbol: "V", explanation: "Volume" },
              { symbol: "n", explanation: "Amount of substance (moles)" },
              { symbol: "R", explanation: "Ideal Gas Constant" },
              { symbol: "T", explanation: "Absolute Temperature (Kelvin)" },
              { symbol: "N", explanation: "Number of particles (molecules)" },
              { symbol: "k_B", explanation: "Boltzmann constant" },
              {
                symbol: "K_{avg}",
                explanation: "Average translational kinetic energy",
              },
            ],
          },
          {
            id: 2022,
            name: "Laws of Thermodynamics",
            theory:
              "Fundamental laws governing energy transfer and transformations. The First Law is conservation of energy. The Second Law deals with entropy and the direction of processes.",
            formulas: [
              "\\Delta U = Q - W", // First Law
              "W = P \\Delta V", // Work done by gas (constant pressure)
              "Q = mc\\Delta T", // Heat transfer (specific heat)
              "\\Delta S \\ge \\int \\frac{dQ}{T}", // Second Law (Clausius inequality)
            ],
            symbols: [
              { symbol: "\\Delta U", explanation: "Change in Internal Energy" },
              { symbol: "Q", explanation: "Heat added to the system" },
              { symbol: "W", explanation: "Work done by the system" },
              { symbol: "P", explanation: "Pressure" },
              { symbol: "\\Delta V", explanation: "Change in Volume" },
              { symbol: "m", explanation: "Mass" },
              { symbol: "c", explanation: "Specific heat capacity" },
              { symbol: "\\Delta T", explanation: "Change in Temperature" },
              { symbol: "\\Delta S", explanation: "Change in Entropy" },
              { symbol: "T", explanation: "Absolute Temperature (Kelvin)" },
              { symbol: "\\int", explanation: "Integral symbol" },
              { symbol: "dQ", explanation: "Infinitesimal heat transfer" },
            ],
          },
        ],
      },
      // --- Electromagnetism ---
      {
        id: 203,
        name: "Electromagnetism",
        subject: "Physics",
        icon: Zap,
        notes: [
          {
            id: 2031,
            name: "Circuits & Ohm's Law",
            theory:
              "Ohm's law relates voltage, current, and resistance in many conductors. Power is the rate of energy dissipation.",
            formulas: [
              "V = IR", // Ohm's Law
              "P = IV = I^2 R = \\frac{V^2}{R}", // Electric Power
              "R_{eq} = R_1 + R_2 + ...", // Resistors in Series
              "\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + ...", // Resistors in Parallel
            ],
            symbols: [
              { symbol: "V", explanation: "Voltage (Potential Difference)" },
              { symbol: "I", explanation: "Current" },
              { symbol: "R", explanation: "Resistance" },
              { symbol: "P", explanation: "Power" },
              { symbol: "R_{eq}", explanation: "Equivalent Resistance" },
              { symbol: "R_1, R_2,...", explanation: "Individual Resistances" },
            ],
          },
          {
            id: 2032,
            name: "Electrostatics",
            theory:
              "Deals with stationary electric charges, the forces between them (Coulomb's Law), and the fields they create.",
            formulas: [
              "F_e = k \\frac{|q_1 q_2|}{r^2}", // Coulomb's Law (Magnitude)
              "\\vec{E} = \\frac{\\vec{F}_e}{q_0}", // Electric Field definition
              "E = k \\frac{|q|}{r^2}", // Electric Field (Point Charge Magnitude)
              "V = k \\frac{q}{r}", // Electric Potential (Point Charge)
            ],
            symbols: [
              { symbol: "F_e", explanation: "Electrostatic Force" },
              { symbol: "k", explanation: "Coulomb's constant" },
              { symbol: "q, q_1, q_2", explanation: "Electric Charges" },
              { symbol: "r", explanation: "Distance between charges" },
              { symbol: "\\vec{E}", explanation: "Electric Field (vector)" },
              { symbol: "q_0", explanation: "Test charge" },
              { symbol: "E", explanation: "Magnitude of Electric Field" },
              { symbol: "V", explanation: "Electric Potential" },
            ],
          },
        ],
      },
    ],
  },

  // -------------------- CHEMISTRY --------------------
  {
    id: 3,
    name: "Chemistry",
    subject: "Chemistry",
    icon: Beaker,
    subCollection: [
      // --- Stoichiometry ---
      {
        id: 301,
        name: "Stoichiometry",
        subject: "Chemistry",
        icon: FlaskConical,
        notes: [
          {
            id: 3011,
            name: "Mole Concept",
            theory:
              "The mole links the macroscopic scale (grams) to the microscopic scale (atoms/molecules) using Avogadro's number and molar mass.",
            formulas: [
              "n = \\frac{N}{N_A}", // Moles from number of particles
              "n = \\frac{m}{M}", // Moles from mass
            ],
            symbols: [
              { symbol: "n", explanation: "Amount of substance (moles)" },
              {
                symbol: "N",
                explanation: "Number of particles (atoms, molecules, ions)",
              },
              {
                symbol: "N_A",
                explanation: "Avogadro's number (6.022 x 10²³ mol⁻¹)",
              },
              { symbol: "m", explanation: "Mass (grams)" },
              { symbol: "M", explanation: "Molar Mass (g/mol)" },
            ],
          },
          {
            id: 3012,
            name: "Solutions & Molarity",
            theory:
              "Concentration describes the amount of solute dissolved in a solvent or solution. Molarity is moles of solute per liter of solution.",
            formulas: [
              "Molarity (C) = \\frac{n_{solute}}{V_{solution}}", // Molarity definition
              "M_1 V_1 = M_2 V_2", // Dilution equation
            ],
            symbols: [
              {
                symbol: "C",
                explanation: "Molarity (Concentration, mol/L or M)",
              },
              { symbol: "n_{solute}", explanation: "Moles of solute" },
              {
                symbol: "V_{solution}",
                explanation: "Volume of solution (Liters)",
              },
              {
                symbol: "M_1, V_1",
                explanation: "Initial Molarity and Volume",
              },
              { symbol: "M_2, V_2", explanation: "Final Molarity and Volume" },
            ],
          },
        ],
      },
      // --- Atomic Structure ---
      {
        id: 302,
        name: "Atomic Structure & Quantum",
        subject: "Chemistry",
        icon: Waves, // Changed icon
        notes: [
          {
            id: 3021,
            name: "Energy Levels & Photons",
            theory:
              "Electrons exist in quantized energy levels. Energy is absorbed or emitted as photons when electrons transition between levels. Light has wave-particle duality.",
            formulas: [
              "E_n = -\\frac{R_H}{n^2} \\quad \\text{(Hydrogen atom)}", // Bohr Model Energy
              "\\Delta E = E_{photon} = hf = h\\frac{c}{\\lambda}", // Photon energy & transitions
            ],
            symbols: [
              { symbol: "E_n", explanation: "Energy of electron in level n" },
              { symbol: "R_H", explanation: "Rydberg constant (energy units)" },
              {
                symbol: "n",
                explanation: "Principal quantum number (1, 2, 3...)",
              },
              { symbol: "\\Delta E", explanation: "Change in energy" },
              { symbol: "E_{photon}", explanation: "Energy of a photon" },
              { symbol: "h", explanation: "Planck's constant" },
              { symbol: "f", explanation: "Frequency of light" },
              { symbol: "c", explanation: "Speed of light" },
              { symbol: "\\lambda", explanation: "Wavelength of light" },
            ],
          },
          {
            id: 3022,
            name: "Wave-Particle Duality (Matter)",
            theory:
              "de Broglie proposed that particles like electrons also exhibit wave-like behavior, with a wavelength inversely proportional to their momentum.",
            formulas: [
              "\\lambda = \\frac{h}{p}", // de Broglie wavelength
              "p = mv", // Momentum (non-relativistic)
            ],
            symbols: [
              { symbol: "\\lambda", explanation: "de Broglie wavelength" },
              { symbol: "h", explanation: "Planck's constant" },
              { symbol: "p", explanation: "Momentum" },
              { symbol: "m", explanation: "Mass of the particle" },
              { symbol: "v", explanation: "Velocity of the particle" },
            ],
          },
        ],
      },
      // --- Kinetics & Equilibrium ---
      {
        id: 303,
        name: "Kinetics & Equilibrium",
        subject: "Chemistry",
        icon: Gauge, // New icon
        notes: [
          {
            id: 3031,
            name: "Reaction Rates",
            theory:
              "Chemical kinetics studies the rates of chemical reactions. The rate law expresses the rate as a function of reactant concentrations and a rate constant.",
            formulas: [
              "\\text{Rate} = k[A]^m[B]^n", // General Rate Law
              "k = A e^{-E_a / (RT)}", // Arrhenius Equation
            ],
            symbols: [
              { symbol: "Rate", explanation: "Reaction rate (e.g., M/s)" },
              {
                symbol: "k",
                explanation: "Rate constant (temperature dependent)",
              },
              {
                symbol: "[A], [B]",
                explanation: "Concentrations of reactants A, B",
              },
              {
                symbol: "m, n",
                explanation: "Reaction orders (determined experimentally)",
              },
              { symbol: "A", explanation: "Arrhenius pre-exponential factor" },
              { symbol: "e", explanation: "Base of the natural logarithm" },
              { symbol: "E_a", explanation: "Activation Energy" },
              {
                symbol: "R",
                explanation:
                  "Ideal Gas Constant (energy units, e.g., 8.314 J/mol·K)",
              },
              { symbol: "T", explanation: "Absolute Temperature (Kelvin)" },
            ],
          },
          {
            id: 3032,
            name: "Chemical Equilibrium",
            theory:
              "Describes the state where the rates of forward and reverse reactions are equal. The equilibrium constant (K) relates the concentrations of products and reactants at equilibrium.",
            formulas: [
              "aA + bB \\rightleftharpoons cC + dD", // General Equilibrium Reaction
              "K_c = \\frac{[C]^c [D]^d}{[A]^a [B]^b}", // Equilibrium Constant (Concentration)
              "K_p = \\frac{(P_C)^c (P_D)^d}{(P_A)^a (P_B)^b}", // Equilibrium Constant (Pressure)
              "\\Delta G^\\circ = -RT \\ln K", // Gibbs Free Energy and K
            ],
            symbols: [
              { symbol: "A, B", explanation: "Reactants" },
              { symbol: "C, D", explanation: "Products" },
              {
                symbol: "a, b, c, d",
                explanation: "Stoichiometric coefficients",
              },
              {
                symbol: "\\rightleftharpoons",
                explanation: "Equilibrium arrow",
              },
              {
                symbol: "K_c",
                explanation: "Equilibrium constant (concentration units)",
              },
              {
                symbol: "[A], [B], [C], [D]",
                explanation: "Equilibrium concentrations",
              },
              {
                symbol: "K_p",
                explanation: "Equilibrium constant (pressure units)",
              },
              {
                symbol: "P_A, P_B, P_C, P_D",
                explanation: "Equilibrium partial pressures",
              },
              {
                symbol: "\\Delta G^\\circ",
                explanation: "Standard Gibbs Free Energy change",
              },
              { symbol: "R", explanation: "Ideal Gas Constant (energy units)" },
              { symbol: "T", explanation: "Absolute Temperature (Kelvin)" },
              {
                symbol: "\\ln K",
                explanation: "Natural logarithm of the equilibrium constant",
              },
            ],
          },
        ],
      },
    ],
  },
];
