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
  BookOpen, // For general topics like Trigonometry, Organic Chem
  InfinityIcon, // For Series/Sequences or Limits
  Triangle, // More specific for Geometry/Trigonometry
  SunMedium, // Good for Optics
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
  subject: string;
  icon: LucideIcon;
  notes: Array<NoteType>;
}

export interface NoteType {
  id: number;
  name: string;
  theory: string;
  sections: Array<{
    sectionName: string;
    formulas: Array<string>;
  }>;
  symbols: Array<{
    symbol: string;
    explanation: string;
  }>;
}

export type CollectionDataType = Array<CollectionType>;

// ======================================================
//      POPULATED COLLECTION DATA (with Sections)
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
            name: "Linear Equations & Systems",
            theory:
              "Linear equations model relationships with constant rates of change. Systems of linear equations involve multiple such relationships, seeking common solutions.",
            sections: [
              {
                sectionName: "Forms of Linear Equations",
                formulas: [
                  "y = mx + b",
                  "Ax + By = C",
                  "y - y_1 = m(x - x_1)", // Point-slope form
                ],
              },
              {
                sectionName: "Slope and Distance",
                formulas: [
                  "m = \\frac{y_2 - y_1}{x_2 - x_1}",
                  "d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}", // Distance Formula
                ],
              },
              {
                sectionName: "Systems of Equations (Example: 2x2)",
                formulas: ["a_1x + b_1y = c_1", "a_2x + b_2y = c_2"],
              },
            ],
            symbols: [
              { symbol: "y", explanation: "Dependent variable" },
              { symbol: "m", explanation: "Slope" },
              { symbol: "x", explanation: "Independent variable" },
              { symbol: "b", explanation: "Y-intercept" },
              { symbol: "A, B", explanation: "Coefficients (Standard Form)" },
              { symbol: "C", explanation: "Constant (Standard Form)" },
              { symbol: "(x_1, y_1)", explanation: "Coordinates of a point" },
              {
                symbol: "(x_2, y_2)",
                explanation: "Coordinates of another point",
              },
              { symbol: "d", explanation: "Distance between two points" },
              {
                symbol: "a_1, b_1, c_1",
                explanation:
                  "Coefficients/constant for first equation in system",
              },
              {
                symbol: "a_2, b_2, c_2",
                explanation:
                  "Coefficients/constant for second equation in system",
              },
            ],
          },
          {
            id: 1012,
            name: "Quadratic Equations & Functions",
            theory:
              "Quadratic equations involve a variable raised to the second power. Their graphs are parabolas. The quadratic formula provides solutions (roots).",
            sections: [
              {
                sectionName: "Standard Form & Solutions",
                formulas: [
                  "ax^2 + bx + c = 0",
                  "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
                ],
              },
              {
                sectionName: "Properties & Vertex Form",
                formulas: [
                  "\\Delta = b^2 - 4ac",
                  "y = a(x-h)^2 + k", // Vertex Form
                  "x_{vertex} = -\\frac{b}{2a}", // x-coordinate of vertex
                ],
              },
            ],
            symbols: [
              { symbol: "x", explanation: "Variable" },
              {
                symbol: "y",
                explanation: "Dependent variable (in function form)",
              },
              { symbol: "a", explanation: "Coefficient of x² (a ≠ 0)" },
              { symbol: "b", explanation: "Coefficient of x" },
              { symbol: "c", explanation: "Constant term / y-intercept" },
              {
                symbol: "\\pm",
                explanation: "Indicates two possible solutions",
              },
              { symbol: "\\sqrt{}", explanation: "Square root function" },
              { symbol: "\\Delta", explanation: "Discriminant" },
              { symbol: "(h, k)", explanation: "Coordinates of the vertex" },
              {
                symbol: "x_{vertex}",
                explanation: "x-coordinate of the vertex",
              },
            ],
          },
          {
            id: 1013,
            name: "Logarithms & Exponential Functions",
            theory:
              "Logarithms are the inverse of exponential functions. They are used to solve equations where the variable is an exponent and to model various growth/decay phenomena.",
            sections: [
              {
                sectionName: "Definitions",
                formulas: [
                  "y = b^x \\Leftrightarrow x = \\log_b y",
                  "e = \\lim_{n \\to \\infty} (1 + \\frac{1}{n})^n \\approx 2.71828", // Definition of e
                  "\\ln x = \\log_e x", // Natural Logarithm
                ],
              },
              {
                sectionName: "Properties of Logarithms",
                formulas: [
                  "\\log_b (MN) = \\log_b M + \\log_b N",
                  "\\log_b (M/N) = \\log_b M - \\log_b N",
                  "\\log_b (M^p) = p \\log_b M",
                  "\\log_b 1 = 0",
                  "\\log_b b = 1",
                  "b^{\\log_b x} = x",
                  "\\log_b (b^x) = x",
                ],
              },
              {
                sectionName: "Change of Base",
                formulas: ["\\log_b M = \\frac{\\log_c M}{\\log_c b}"],
              },
            ],
            symbols: [
              {
                symbol: "y",
                explanation: "Result of exponentiation/argument of log",
              },
              { symbol: "b", explanation: "Base (b > 0, b ≠ 1)" },
              { symbol: "x", explanation: "Exponent / Logarithm value" },
              { symbol: "\\log_b", explanation: "Logarithm with base b" },
              { symbol: "\\ln", explanation: "Natural logarithm (base e)" },
              { symbol: "e", explanation: "Euler's number" },
              {
                symbol: "M, N",
                explanation: "Arguments of the logarithm (positive)",
              },
              { symbol: "p", explanation: "Exponent (power)" },
              {
                symbol: "c",
                explanation: "New base for change of base (c > 0, c ≠ 1)",
              },
              {
                symbol: "n",
                explanation: "Variable for limit definition of e",
              },
            ],
          },
          {
            id: 1014,
            name: "Polynomials",
            theory:
              "Polynomials are expressions consisting of variables and coefficients, involving only operations of addition, subtraction, multiplication, and non-negative integer exponents of variables.",
            sections: [
              {
                sectionName: "Basic Definitions",
                formulas: [
                  "P(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0",
                ],
              },
              {
                sectionName: "Remainder & Factor Theorems",
                formulas: [
                  "P(x) = (x-c)Q(x) + R", // Remainder Theorem
                  "P(c) = 0 \\Leftrightarrow (x-c) \\text{ is a factor of } P(x)", // Factor Theorem
                ],
              },
            ],
            symbols: [
              { symbol: "P(x)", explanation: "Polynomial in x" },
              {
                symbol: "a_n, ..., a_0",
                explanation: "Coefficients of the polynomial",
              },
              {
                symbol: "n",
                explanation: "Degree of the polynomial (non-negative integer)",
              },
              { symbol: "x", explanation: "Variable" },
              {
                symbol: "c",
                explanation: "A constant (root or value for evaluation)",
              },
              { symbol: "Q(x)", explanation: "Quotient polynomial" },
              { symbol: "R", explanation: "Remainder (constant)" },
            ],
          },
        ],
      },
      // --- Trigonometry ---
      {
        id: 104, // New SubCollection ID
        name: "Trigonometry",
        subject: "Mathematics",
        icon: Triangle,
        notes: [
          {
            id: 1041,
            name: "Basic Ratios & Unit Circle",
            theory:
              "Trigonometry studies relationships between side lengths and angles of triangles. The unit circle provides a way to define trigonometric functions for all real numbers.",
            sections: [
              {
                sectionName: "Right Triangle Ratios (SOH CAH TOA)",
                formulas: [
                  "\\sin \\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}}",
                  "\\cos \\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}}",
                  "\\tan \\theta = \\frac{\\text{opposite}}{\\text{adjacent}}",
                ],
              },
              {
                sectionName: "Reciprocal Identities",
                formulas: [
                  "\\csc \\theta = \\frac{1}{\\sin \\theta}",
                  "\\sec \\theta = \\frac{1}{\\cos \\theta}",
                  "\\cot \\theta = \\frac{1}{\\tan \\theta}",
                ],
              },
              {
                sectionName: "Unit Circle Definitions",
                formulas: [
                  "x = \\cos \\theta",
                  "y = \\sin \\theta",
                  "(x,y) \\text{ on unit circle } x^2+y^2=1",
                ],
              },
            ],
            symbols: [
              { symbol: "\\theta", explanation: "Angle measure" },
              { symbol: "\\sin", explanation: "Sine function" },
              { symbol: "\\cos", explanation: "Cosine function" },
              { symbol: "\\tan", explanation: "Tangent function" },
              { symbol: "\\csc", explanation: "Cosecant function" },
              { symbol: "\\sec", explanation: "Secant function" },
              { symbol: "\\cot", explanation: "Cotangent function" },
              {
                symbol: "opposite",
                explanation: "Length of side opposite to angle θ",
              },
              {
                symbol: "adjacent",
                explanation: "Length of side adjacent to angle θ",
              },
              { symbol: "hypotenuse", explanation: "Length of hypotenuse" },
              { symbol: "x, y", explanation: "Coordinates on the unit circle" },
            ],
          },
          {
            id: 1042,
            name: "Trigonometric Identities",
            theory:
              "Identities are equations that are true for all values of the variables for which both sides are defined. Pythagorean identities are fundamental.",
            sections: [
              {
                sectionName: "Pythagorean Identities",
                formulas: [
                  "\\sin^2 \\theta + \\cos^2 \\theta = 1",
                  "1 + \\tan^2 \\theta = \\sec^2 \\theta",
                  "1 + \\cot^2 \\theta = \\csc^2 \\theta",
                ],
              },
              {
                sectionName: "Sum and Difference Formulas (Examples)",
                formulas: [
                  "\\sin(A \\pm B) = \\sin A \\cos B \\pm \\cos A \\sin B",
                  "\\cos(A \\pm B) = \\cos A \\cos B \\mp \\sin A \\sin B",
                ],
              },
              {
                sectionName: "Double Angle Formulas (Examples)",
                formulas: [
                  "\\sin(2\\theta) = 2 \\sin \\theta \\cos \\theta",
                  "\\cos(2\\theta) = \\cos^2 \\theta - \\sin^2 \\theta",
                ],
              },
            ],
            symbols: [
              { symbol: "\\theta", explanation: "Angle measure" },
              { symbol: "A, B", explanation: "Angle measures" },
              { symbol: "\\sin", explanation: "Sine function" },
              { symbol: "\\cos", explanation: "Cosine function" },
              { symbol: "\\tan", explanation: "Tangent function" },
              { symbol: "\\csc", explanation: "Cosecant function" },
              { symbol: "\\sec", explanation: "Secant function" },
              { symbol: "\\cot", explanation: "Cotangent function" },
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
              "The derivative measures the instantaneous rate of change of a function or the slope of the tangent line to its graph.",
            sections: [
              {
                sectionName: "Definition & Basic Rules",
                formulas: [
                  "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
                  "\\frac{d}{dx} [c] = 0", // Derivative of a constant
                  "\\frac{d}{dx} [x^n] = nx^{n-1}",
                  "\\frac{d}{dx} [cf(x)] = c f'(x)", // Constant multiple rule
                  "\\frac{d}{dx} [f(x) \\pm g(x)] = f'(x) \\pm g'(x)", // Sum/Difference rule
                ],
              },
              {
                sectionName: "Product, Quotient, Chain Rules",
                formulas: [
                  "\\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)",
                  "\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right] = \\frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}",
                  "\\frac{d}{dx}[f(g(x))] = f'(g(x)) g'(x)",
                ],
              },
              {
                sectionName: "Common Derivatives",
                formulas: [
                  "\\frac{d}{dx} [e^x] = e^x",
                  "\\frac{d}{dx} [\\ln x] = \\frac{1}{x}",
                  "\\frac{d}{dx} [\\sin x] = \\cos x",
                  "\\frac{d}{dx} [\\cos x] = -\\sin x",
                  "\\frac{d}{dx} [\\tan x] = \\sec^2 x",
                ],
              },
            ],
            symbols: [
              {
                symbol: "f'(x), g'(x)",
                explanation: "Derivative of f(x), g(x) w.r.t. x",
              },
              { symbol: "\\frac{d}{dx}", explanation: "Derivative operator" },
              {
                symbol: "\\lim_{h \\to 0}",
                explanation: "Limit as h approaches 0",
              },
              { symbol: "h", explanation: "A small change in x" },
              { symbol: "x", explanation: "Independent variable" },
              { symbol: "c", explanation: "Constant" },
              { symbol: "n", explanation: "Constant exponent" },
              { symbol: "f(x), g(x)", explanation: "Functions of x" },
              { symbol: "e^x", explanation: "Exponential function base e" },
              { symbol: "\\ln x", explanation: "Natural logarithm" },
              {
                symbol: "\\sin x, \\cos x, \\tan x",
                explanation: "Trigonometric functions",
              },
              { symbol: "\\sec x", explanation: "Secant function" },
            ],
          },
          {
            id: 1022,
            name: "Integrals",
            theory:
              "Integration is the process of finding an antiderivative (indefinite integral) or calculating the accumulated effect, such as area under a curve (definite integral).",
            sections: [
              {
                sectionName: "Definition & Basic Rules",
                formulas: [
                  "\\int f(x) dx = F(x) + C \\quad (\\text{where } F'(x)=f(x))",
                  "\\int x^n dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)",
                  "\\int k f(x) dx = k \\int f(x) dx", // Constant multiple
                  "\\int [f(x) \\pm g(x)] dx = \\int f(x) dx \\pm \\int g(x) dx", // Sum/Difference
                ],
              },
              {
                sectionName: "Fundamental Theorem of Calculus",
                formulas: [
                  "\\frac{d}{dx} \\int_a^x f(t) dt = f(x)", // Part 1
                  "\\int_a^b f(x) dx = F(b) - F(a)", // Part 2
                ],
              },
              {
                sectionName: "Common Integrals & Techniques",
                formulas: [
                  "\\int \\frac{1}{x} dx = \\ln|x| + C",
                  "\\int e^x dx = e^x + C",
                  "\\int \\sin x dx = -\\cos x + C",
                  "\\int \\cos x dx = \\sin x + C",
                  "\\int u dv = uv - \\int v du", // Integration by Parts
                ],
              },
            ],
            symbols: [
              { symbol: "\\int", explanation: "Indefinite integral symbol" },
              {
                symbol: "\\int_a^b",
                explanation: "Definite integral from a to b",
              },
              { symbol: "f(x), g(x)", explanation: "Integrand functions" },
              { symbol: "F(x)", explanation: "Antiderivative of f(x)" },
              { symbol: "x, t", explanation: "Variable of integration" },
              {
                symbol: "dx, dt",
                explanation: "Indicates integration w.r.t. variable",
              },
              { symbol: "k", explanation: "Constant" },
              { symbol: "n", explanation: "Constant exponent" },
              { symbol: "C", explanation: "Constant of integration" },
              { symbol: "a, b", explanation: "Limits of integration" },
              {
                symbol: "\\ln|x|",
                explanation: "Natural log of absolute value of x",
              },
              { symbol: "e^x", explanation: "Exponential function base e" },
              {
                symbol: "\\sin x, \\cos x",
                explanation: "Trigonometric functions",
              },
              {
                symbol: "u, v",
                explanation: "Functions for integration by parts",
              },
              {
                symbol: "du, dv",
                explanation: "Differentials for integration by parts",
              },
            ],
          },
          {
            id: 1023,
            name: "Limits & L'Hôpital's Rule",
            theory:
              "Limits describe the value a function approaches as the input approaches some value. L'Hôpital's Rule helps evaluate limits of indeterminate forms.",
            sections: [
              {
                sectionName: "Basic Limit Properties",
                formulas: [
                  "\\lim_{x \\to c} [f(x) + g(x)] = \\lim_{x \\to c} f(x) + \\lim_{x \\to c} g(x)",
                  "\\lim_{x \\to c} [f(x)g(x)] = [\\lim_{x \\to c} f(x)][\\lim_{x \\to c} g(x)]",
                  "\\lim_{x \\to c} k = k",
                  "\\lim_{x \\to c} x = c",
                ],
              },
              {
                sectionName: "L'Hôpital's Rule (Indeterminate Forms)",
                formulas: [
                  "\\text{If } \\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\frac{0}{0} \\text{ or } \\frac{\\pm\\infty}{\\pm\\infty}, \\text{ then}",
                  "\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\lim_{x \\to c} \\frac{f'(x)}{g'(x)}",
                ],
              },
            ],
            symbols: [
              {
                symbol: "\\lim_{x \\to c}",
                explanation: "Limit as x approaches c",
              },
              { symbol: "f(x), g(x)", explanation: "Functions of x" },
              {
                symbol: "f'(x), g'(x)",
                explanation: "Derivatives of f(x) and g(x)",
              },
              { symbol: "k", explanation: "A constant" },
              { symbol: "c", explanation: "The value x approaches" },
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
            name: "Triangles",
            theory:
              "Triangles are fundamental polygons with three sides and three angles. Properties vary by type (scalene, isosceles, equilateral, right-angled).",
            sections: [
              {
                sectionName: "Area & Perimeter",
                formulas: [
                  "A = \\frac{1}{2} b h",
                  "P = s_1 + s_2 + s_3", // Perimeter
                  "A = \\sqrt{s(s-a)(s-b)(s-c)} \\quad (\\text{Heron's Formula, } s = P/2)",
                ],
              },
              {
                sectionName: "Pythagorean Theorem (Right Triangles)",
                formulas: ["a^2 + b^2 = c^2"],
              },
            ],
            symbols: [
              { symbol: "A", explanation: "Area" },
              { symbol: "P", explanation: "Perimeter" },
              { symbol: "b", explanation: "Base length" },
              { symbol: "h", explanation: "Height (perpendicular to base)" },
              { symbol: "s_1, s_2, s_3", explanation: "Lengths of sides" },
              {
                symbol: "a, b",
                explanation:
                  "Lengths of the legs (right triangle) or any two sides for Heron's",
              },
              {
                symbol: "c",
                explanation:
                  "Length of the hypotenuse (right triangle) or third side for Heron's",
              },
              {
                symbol: "s",
                explanation: "Semi-perimeter for Heron's formula",
              },
            ],
          },
          {
            id: 1032,
            name: "Circles",
            theory:
              "A circle is a set of all points equidistant from a central point (the center). Its properties are defined by its radius.",
            sections: [
              {
                sectionName: "Area & Circumference",
                formulas: ["A = \\pi r^2", "C = 2 \\pi r", "C = \\pi d"],
              },
              {
                sectionName: "Arcs & Sectors",
                formulas: [
                  "L = r \\theta \\quad (\\theta \\text{ in radians})", // Arc Length
                  "A_{sector} = \\frac{1}{2} r^2 \\theta \\quad (\\theta \\text{ in radians})", // Area of Sector
                ],
              },
            ],
            symbols: [
              { symbol: "A", explanation: "Area" },
              { symbol: "C", explanation: "Circumference" },
              { symbol: "\\pi", explanation: "Pi (approx 3.14159)" },
              { symbol: "r", explanation: "Radius" },
              { symbol: "d", explanation: "Diameter (d=2r)" },
              { symbol: "L", explanation: "Arc length" },
              { symbol: "\\theta", explanation: "Central angle in radians" },
              {
                symbol: "A_{sector}",
                explanation: "Area of a circular sector",
              },
            ],
          },
          {
            id: 1033,
            name: "Basic 3D Shapes",
            theory:
              "Formulas for volume and surface area of common three-dimensional objects.",
            sections: [
              {
                sectionName: "Sphere",
                formulas: ["V = \\frac{4}{3} \\pi r^3", "A = 4 \\pi r^2"],
              },
              {
                sectionName: "Cylinder",
                formulas: [
                  "V = \\pi r^2 h",
                  "A_{lateral} = 2 \\pi r h",
                  "A_{total} = 2 \\pi r h + 2 \\pi r^2",
                ],
              },
              {
                sectionName: "Cone",
                formulas: [
                  "V = \\frac{1}{3} \\pi r^2 h",
                  "A_{lateral} = \\pi r l \\quad (l = \\sqrt{r^2+h^2})",
                  "A_{total} = \\pi r l + \\pi r^2",
                ],
              },
              {
                sectionName: "Rectangular Prism (Cuboid)",
                formulas: ["V = lwh", "A = 2(lw + lh + wh)"],
              },
            ],
            symbols: [
              { symbol: "V", explanation: "Volume" },
              {
                symbol: "A, A_{lateral}, A_{total}",
                explanation: "Surface Area (total, lateral)",
              },
              { symbol: "\\pi", explanation: "Pi (approx 3.14159)" },
              { symbol: "r", explanation: "Radius" },
              { symbol: "h", explanation: "Height" },
              {
                symbol: "l",
                explanation: "Slant height (for cone) or length (for prism)",
              },
              { symbol: "w", explanation: "Width (for prism)" },
            ],
          },
        ],
      },
      // --- Series and Sequences ---
      {
        id: 105,
        name: "Series & Sequences",
        subject: "Mathematics",
        icon: InfinityIcon,
        notes: [
          {
            id: 1051,
            name: "Arithmetic & Geometric Sequences",
            theory:
              "A sequence is an ordered list of numbers. Arithmetic sequences have a common difference; geometric sequences have a common ratio.",
            sections: [
              {
                sectionName: "Arithmetic Sequence",
                formulas: [
                  "a_n = a_1 + (n-1)d", // nth term
                  "S_n = \\frac{n}{2}(a_1 + a_n)", // Sum of first n terms
                  "S_n = \\frac{n}{2}(2a_1 + (n-1)d)", // Sum of first n terms
                ],
              },
              {
                sectionName: "Geometric Sequence",
                formulas: [
                  "a_n = a_1 r^{n-1}", // nth term
                  "S_n = a_1 \\frac{1-r^n}{1-r} \\quad (r \\neq 1)", // Sum of first n terms
                  "S_\\infty = \\frac{a_1}{1-r} \\quad (|r| < 1)", // Sum of infinite series
                ],
              },
            ],
            symbols: [
              { symbol: "a_n", explanation: "The nth term of the sequence" },
              { symbol: "a_1", explanation: "The first term of the sequence" },
              {
                symbol: "n",
                explanation: "Term number (position in sequence)",
              },
              { symbol: "d", explanation: "Common difference (arithmetic)" },
              { symbol: "r", explanation: "Common ratio (geometric)" },
              { symbol: "S_n", explanation: "Sum of the first n terms" },
              {
                symbol: "S_\\infty",
                explanation: "Sum of an infinite geometric series",
              },
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
              "Newton's laws govern motion and interaction of objects. Forces cause changes in motion (acceleration).",
            sections: [
              {
                sectionName: "Newton's Laws of Motion",
                formulas: [
                  "\\text{1st Law: Object in motion stays in motion unless acted upon by a net force.}",
                  "\\vec{F}_{net} = m \\vec{a} \\quad \\text{ or } \\quad \\sum \\vec{F} = m \\vec{a}", // 2nd Law
                  "\\vec{F}_{AB} = -\\vec{F}_{BA}", // 3rd Law (Action-Reaction)
                ],
              },
              {
                sectionName: "Common Forces",
                formulas: [
                  "F_g = w = mg", // Weight (Gravity near surface)
                  "f_s \\le \\mu_s N", // Static Friction
                  "f_k = \\mu_k N", // Kinetic Friction
                  "F_s = -kx", // Spring Force (Hooke's Law)
                ],
              },
              {
                sectionName: "Work & Power",
                formulas: [
                  "W = \\vec{F} \\cdot \\vec{d} = F d \\cos \\theta", // Work by constant force
                  "P_{avg} = \\frac{W}{\\Delta t}", // Average Power
                  "P = \\vec{F} \\cdot \\vec{v} = Fv \\cos\\phi", // Instantaneous Power
                ],
              },
            ],
            symbols: [
              {
                symbol: "\\vec{F}_{net}, \\sum \\vec{F}",
                explanation: "Net Force (vector sum)",
              },
              { symbol: "m", explanation: "Mass" },
              { symbol: "\\vec{a}", explanation: "Acceleration (vector)" },
              { symbol: "\\vec{F}_{AB}", explanation: "Force by A on B" },
              { symbol: "F_g, w", explanation: "Force of Gravity (Weight)" },
              { symbol: "g", explanation: "Acceleration due to gravity" },
              {
                symbol: "f_s, f_k",
                explanation: "Static, Kinetic friction force",
              },
              {
                symbol: "\\mu_s, \\mu_k",
                explanation: "Coefficients of static, kinetic friction",
              },
              { symbol: "N", explanation: "Normal force" },
              { symbol: "F_s", explanation: "Spring force" },
              { symbol: "k", explanation: "Spring constant" },
              {
                symbol: "x",
                explanation: "Displacement from equilibrium (spring)",
              },
              { symbol: "W", explanation: "Work done" },
              { symbol: "\\vec{d}", explanation: "Displacement vector" },
              {
                symbol: "\\theta",
                explanation: "Angle between force and displacement for work",
              },
              { symbol: "P, P_{avg}", explanation: "Power, Average power" },
              { symbol: "\\Delta t", explanation: "Time interval" },
              { symbol: "\\vec{v}", explanation: "Velocity vector" },
              {
                symbol: "\\phi",
                explanation: "Angle between force and velocity for power",
              },
            ],
          },
          {
            id: 2012,
            name: "Kinematics",
            theory:
              "Kinematics describes motion (position, velocity, acceleration) without considering the forces causing it.",
            sections: [
              {
                sectionName: "Definitions (Average)",
                formulas: [
                  "\\vec{v}_{avg} = \\frac{\\Delta \\vec{x}}{\\Delta t}",
                  "\\vec{a}_{avg} = \\frac{\\Delta \\vec{v}}{\\Delta t}",
                ],
              },
              {
                sectionName: "Constant Acceleration (1D)",
                formulas: [
                  "v_f = v_i + at",
                  "\\Delta x = v_i t + \\frac{1}{2} a t^2",
                  "v_f^2 = v_i^2 + 2 a \\Delta x",
                  "\\Delta x = \\frac{1}{2}(v_i + v_f)t",
                ],
              },
              {
                sectionName: "Projectile Motion (2D, no air resistance)",
                formulas: [
                  "x(t) = v_{ix} t",
                  "y(t) = v_{iy} t - \\frac{1}{2} g t^2",
                  "v_x(t) = v_{ix}",
                  "v_y(t) = v_{iy} - gt",
                ],
              },
            ],
            symbols: [
              {
                symbol: "\\vec{v}_{avg}, \\vec{a}_{avg}",
                explanation: "Average velocity, acceleration",
              },
              {
                symbol: "\\Delta \\vec{x}, \\Delta \\vec{v}",
                explanation: "Change in position (displacement), velocity",
              },
              { symbol: "\\Delta t, t", explanation: "Time interval" },
              {
                symbol: "v_f, v_i",
                explanation: "Final, Initial velocity (scalar or component)",
              },
              { symbol: "a", explanation: "Constant acceleration" },
              {
                symbol: "\\Delta x",
                explanation: "Displacement (scalar or component)",
              },
              {
                symbol: "x(t), y(t)",
                explanation: "Position components at time t",
              },
              {
                symbol: "v_{ix}, v_{iy}",
                explanation: "Initial velocity components in x and y",
              },
              {
                symbol: "v_x(t), v_y(t)",
                explanation: "Velocity components at time t",
              },
              {
                symbol: "g",
                explanation:
                  "Acceleration due to gravity (magnitude, ~9.8 m/s²)",
              },
            ],
          },
          {
            id: 2013,
            name: "Energy & Work-Energy Theorem",
            theory:
              "Energy is the capacity to do work. The Work-Energy Theorem states that the net work done on an object equals its change in kinetic energy.",
            sections: [
              {
                sectionName: "Types of Mechanical Energy",
                formulas: [
                  "K = \\frac{1}{2} m v^2", // Kinetic Energy
                  "U_g = mgh", // Gravitational Potential Energy
                  "U_s = \\frac{1}{2} kx^2", // Elastic Potential Energy (Spring)
                ],
              },
              {
                sectionName: "Work-Energy & Conservation",
                formulas: [
                  "W_{net} = \\Delta K = K_f - K_i",
                  "W_{nc} = \\Delta E_{mech} = (K_f + U_f) - (K_i + U_i)", // Work by non-conservative forces
                  "E_{mech, i} = E_{mech, f} \\quad (\\text{if only conservative forces do work})",
                ],
              },
            ],
            symbols: [
              { symbol: "K", explanation: "Kinetic Energy" },
              { symbol: "m", explanation: "Mass" },
              { symbol: "v", explanation: "Speed" },
              {
                symbol: "U_g, U_s",
                explanation: "Gravitational, Elastic Potential Energy",
              },
              { symbol: "g", explanation: "Acceleration due to gravity" },
              { symbol: "h", explanation: "Height" },
              { symbol: "k", explanation: "Spring constant" },
              {
                symbol: "x",
                explanation: "Displacement from equilibrium (spring)",
              },
              { symbol: "W_{net}", explanation: "Net work done" },
              { symbol: "\\Delta K", explanation: "Change in Kinetic Energy" },
              {
                symbol: "K_f, K_i",
                explanation: "Final, Initial Kinetic Energy",
              },
              {
                symbol: "W_{nc}",
                explanation: "Work done by non-conservative forces",
              },
              {
                symbol: "\\Delta E_{mech}",
                explanation: "Change in Mechanical Energy",
              },
              {
                symbol: "E_{mech}",
                explanation: "Total Mechanical Energy (K+U)",
              },
              {
                symbol: "U_f, U_i",
                explanation: "Final, Initial Potential Energy",
              },
            ],
          },
          {
            id: 2014,
            name: "Momentum & Collisions",
            theory:
              "Linear momentum is a measure of mass in motion. In the absence of external forces, the total momentum of a system is conserved, particularly useful in analyzing collisions.",
            sections: [
              {
                sectionName: "Linear Momentum & Impulse",
                formulas: [
                  "\\vec{p} = m\\vec{v}",
                  "\\vec{J} = \\Delta \\vec{p} = \\vec{F}_{avg} \\Delta t = \\int \\vec{F}(t) dt", // Impulse-Momentum Theorem
                ],
              },
              {
                sectionName: "Conservation of Momentum",
                formulas: [
                  "\\sum \\vec{p}_i = \\sum \\vec{p}_f \\quad (\\text{if } \\vec{F}_{net,ext} = 0)",
                  "m_1 \\vec{v}_{1i} + m_2 \\vec{v}_{2i} = m_1 \\vec{v}_{1f} + m_2 \\vec{v}_{2f}", // For two-body collision
                ],
              },
              {
                sectionName: "Types of Collisions",
                formulas: [
                  "\\text{Elastic: Kinetic energy is conserved } (\\sum K_i = \\sum K_f)",
                  "\\text{Inelastic: Kinetic energy is not conserved}",
                ],
              },
            ],
            symbols: [
              { symbol: "\\vec{p}", explanation: "Linear momentum (vector)" },
              { symbol: "m", explanation: "Mass" },
              { symbol: "\\vec{v}", explanation: "Velocity (vector)" },
              { symbol: "\\vec{J}", explanation: "Impulse (vector)" },
              { symbol: "\\Delta \\vec{p}", explanation: "Change in momentum" },
              { symbol: "\\vec{F}_{avg}", explanation: "Average force" },
              {
                symbol: "\\vec{F}(t)",
                explanation: "Force as a function of time",
              },
              { symbol: "\\Delta t", explanation: "Time interval" },
              {
                symbol: "\\sum \\vec{p}_i, \\sum \\vec{p}_f",
                explanation: "Total initial, final momentum",
              },
              {
                symbol: "\\vec{F}_{net,ext}",
                explanation: "Net external force",
              },
              { symbol: "m_1, m_2", explanation: "Masses of objects 1 and 2" },
              {
                symbol: "\\vec{v}_{1i}, \\vec{v}_{2i}",
                explanation: "Initial velocities of objects 1 and 2",
              },
              {
                symbol: "\\vec{v}_{1f}, \\vec{v}_{2f}",
                explanation: "Final velocities of objects 1 and 2",
              },
              {
                symbol: "\\sum K_i, \\sum K_f",
                explanation: "Total initial, final kinetic energy",
              },
            ],
          },
          {
            id: 2015,
            name: "Rotational Motion (Basics)",
            theory:
              "Describes the motion of objects rotating around an axis. Analogous to linear motion, with concepts like angular velocity, angular acceleration, torque, and moment of inertia.",
            sections: [
              {
                sectionName: "Angular Kinematics",
                formulas: [
                  "\\omega = \\frac{d\\theta}{dt}", // Angular velocity
                  "\\alpha = \\frac{d\\omega}{dt}", // Angular acceleration
                  "\\theta_f = \\theta_i + \\omega_i t + \\frac{1}{2} \\alpha t^2 quad (\\text{const } \\alpha)",
                  "\\omega_f = \\omega_i + \\alpha t quad (\\text{const } \\alpha)",
                  "\\omega_f^2 = \\omega_i^2 + 2\\alpha \\Delta \\theta quad (\\text{const } \\alpha)",
                ],
              },
              {
                sectionName: "Torque & Moment of Inertia",
                formulas: [
                  "\\vec{\\tau} = \\vec{r} \\times \\vec{F} \\quad (\\tau = rF \\sin\\phi)", // Torque
                  "\\sum \\tau = I \\alpha", // Newton's 2nd Law for rotation
                  "I = \\sum m_i r_i^2 quad (\\text{discrete masses})", // Moment of Inertia
                  "K_{rot} = \\frac{1}{2} I \\omega^2", // Rotational Kinetic Energy
                ],
              },
            ],
            symbols: [
              { symbol: "\\theta", explanation: "Angular position (radians)" },
              { symbol: "\\omega", explanation: "Angular velocity (rad/s)" },
              {
                symbol: "\\alpha",
                explanation: "Angular acceleration (rad/s²)",
              },
              { symbol: "t", explanation: "Time" },
              {
                symbol: "\\theta_i, \\theta_f",
                explanation: "Initial, final angular position",
              },
              {
                symbol: "\\omega_i, \\omega_f",
                explanation: "Initial, final angular velocity",
              },
              {
                symbol: "\\Delta \\theta",
                explanation: "Angular displacement",
              },
              { symbol: "\\vec{\\tau}", explanation: "Torque (vector)" },
              {
                symbol: "\\vec{r}",
                explanation:
                  "Position vector from axis to force application point",
              },
              { symbol: "\\vec{F}", explanation: "Force vector" },
              {
                symbol: "\\phi",
                explanation: "Angle between r and F for torque",
              },
              {
                symbol: "I",
                explanation: "Moment of Inertia (rotational inertia)",
              },
              { symbol: "m_i", explanation: "Mass of individual particle" },
              {
                symbol: "r_i",
                explanation: "Distance of particle from axis of rotation",
              },
              { symbol: "K_{rot}", explanation: "Rotational Kinetic Energy" },
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
            name: "Temperature, Heat & Ideal Gases",
            theory:
              "Temperature measures average kinetic energy. Heat is energy transfer due to temperature difference. Ideal Gas Law models behavior of gases.",
            sections: [
              {
                sectionName: "Temperature Scales & Thermal Expansion",
                formulas: [
                  "T_K = T_C + 273.15", // Celsius to Kelvin
                  "T_F = \\frac{9}{5} T_C + 32", // Celsius to Fahrenheit
                  "\\Delta L = \\alpha L_0 \\Delta T", // Linear Expansion
                  "\\Delta V = \\beta V_0 \\Delta T", // Volume Expansion
                ],
              },
              {
                sectionName: "Ideal Gas Law & Kinetic Theory",
                formulas: [
                  "PV = nRT",
                  "PV = N k_B T",
                  "K_{avg} = \\frac{3}{2} k_B T quad (\\text{per molecule, monoatomic ideal gas})",
                  "v_{rms} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3k_B T}{m_0}}", // Root-mean-square speed
                ],
              },
            ],
            symbols: [
              { symbol: "P", explanation: "Absolute Pressure" },
              { symbol: "V, V_0", explanation: "Volume, Initial volume" },
              { symbol: "n", explanation: "Amount of substance (moles)" },
              { symbol: "R", explanation: "Ideal Gas Constant" },
              {
                symbol: "T, T_K, T_C, T_F",
                explanation:
                  "Absolute Temperature (Kelvin), Celsius, Fahrenheit",
              },
              { symbol: "\\Delta T", explanation: "Change in temperature" },
              { symbol: "N", explanation: "Number of particles" },
              { symbol: "k_B", explanation: "Boltzmann constant" },
              {
                symbol: "K_{avg}",
                explanation:
                  "Average translational kinetic energy per molecule",
              },
              {
                symbol: "\\Delta L, L_0",
                explanation: "Change in length, Initial length",
              },
              {
                symbol: "\\alpha",
                explanation: "Coefficient of linear expansion",
              },
              {
                symbol: "\\beta",
                explanation:
                  "Coefficient of volume expansion (approx 3α for solids)",
              },
              {
                symbol: "v_{rms}",
                explanation: "Root-mean-square speed of gas molecules",
              },
              { symbol: "M", explanation: "Molar mass of the gas (kg/mol)" },
              { symbol: "m_0", explanation: "Mass of one molecule (kg)" },
            ],
          },
          {
            id: 2022,
            name: "Laws of Thermodynamics & Heat Transfer",
            theory:
              "Fundamental laws describing energy conservation (1st Law) and the direction of spontaneous processes/entropy (2nd Law). Heat transfer occurs via conduction, convection, radiation.",
            sections: [
              {
                sectionName: "First Law & Thermodynamic Processes",
                formulas: [
                  "\\Delta U = Q - W", // First Law
                  "W = \\int P dV", // Work done by system
                  "Q = mc\\Delta T", // Specific Heat
                  "Q = mL", // Latent Heat (phase change)
                ],
              },
              {
                sectionName: "Second Law & Entropy",
                formulas: [
                  "\\Delta S = \\int \\frac{dQ_{rev}}{T}", // Entropy change (reversible process)
                  "\\Delta S_{universe} \\ge 0", // Entropy of universe always increases or stays same
                  "e = \\frac{W_{net}}{Q_H} = 1 - \\frac{Q_C}{Q_H}", // Thermal efficiency of heat engine
                  "e_{Carnot} = 1 - \\frac{T_C}{T_H}", // Carnot (max) efficiency
                ],
              },
              {
                sectionName: "Heat Transfer Mechanisms",
                formulas: [
                  "\\frac{dQ}{dt} = P_{cond} = k A \\frac{T_H - T_C}{L}", // Conduction
                  "P_{rad} = \\sigma \\epsilon A T^4", // Radiation (Stefan-Boltzmann Law)
                ],
              },
            ],
            symbols: [
              { symbol: "\\Delta U", explanation: "Change in Internal Energy" },
              {
                symbol: "Q, Q_H, Q_C",
                explanation:
                  "Heat added, Heat from hot reservoir, Heat to cold reservoir",
              },
              {
                symbol: "W, W_{net}",
                explanation: "Work done by system, Net work",
              },
              { symbol: "P", explanation: "Pressure (for work)" },
              { symbol: "dV", explanation: "Infinitesimal change in volume" },
              { symbol: "m", explanation: "Mass" },
              { symbol: "c", explanation: "Specific heat capacity" },
              {
                symbol: "\\Delta T",
                explanation: "Change in Temperature (for specific heat)",
              },
              {
                symbol: "L",
                explanation: "Latent heat (fusion or vaporization)",
              },
              {
                symbol: "\\Delta S, \\Delta S_{universe}",
                explanation: "Change in Entropy (system, universe)",
              },
              {
                symbol: "dQ_{rev}",
                explanation: "Heat added in a reversible process",
              },
              {
                symbol: "T, T_H, T_C",
                explanation: "Absolute Temperature, Temp of Hot/Cold reservoir",
              },
              {
                symbol: "e, e_{Carnot}",
                explanation: "Efficiency, Carnot efficiency",
              },
              {
                symbol: "P_{cond}, P_{rad}",
                explanation: "Power of conduction, radiation",
              },
              { symbol: "k", explanation: "Thermal conductivity (conduction)" },
              {
                symbol: "A",
                explanation:
                  "Cross-sectional area (conduction), Surface area (radiation)",
              },
              {
                symbol: "L",
                explanation: "Thickness of material (conduction)",
              },
              { symbol: "\\sigma", explanation: "Stefan-Boltzmann constant" },
              { symbol: "\\epsilon", explanation: "Emissivity (radiation)" },
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
            name: "Electric Circuits",
            theory:
              "Analysis of circuits involving voltage sources, resistors, capacitors. Ohm's Law and Kirchhoff's Rules are fundamental.",
            sections: [
              {
                sectionName: "Ohm's Law & Power",
                formulas: ["V = IR", "P = IV = I^2 R = \\frac{V^2}{R}"],
              },
              {
                sectionName: "Resistors & Capacitors in Circuits",
                formulas: [
                  "R_{series} = R_1 + R_2 + \\dots",
                  "\\frac{1}{R_{parallel}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\dots",
                  "C = \\frac{Q}{V}", // Capacitance definition
                  "\\frac{1}{C_{series}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\dots",
                  "C_{parallel} = C_1 + C_2 + \\dots",
                  "U_C = \\frac{1}{2}QV = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C}", // Energy in Capacitor
                ],
              },
              {
                sectionName: "Kirchhoff's Rules",
                formulas: [
                  "\\sum I_{in} = \\sum I_{out} \\quad (\\text{Junction Rule})",
                  "\\sum \\Delta V = 0 \\quad (\\text{Loop Rule})",
                ],
              },
            ],
            symbols: [
              {
                symbol: "V, \\Delta V",
                explanation: "Voltage (Potential Difference)",
              },
              { symbol: "I", explanation: "Current" },
              {
                symbol: "R, R_1, R_2",
                explanation: "Resistance, Individual resistances",
              },
              { symbol: "P", explanation: "Power" },
              {
                symbol: "R_{series}, R_{parallel}",
                explanation: "Equivalent resistance (series, parallel)",
              },
              {
                symbol: "C, C_1, C_2",
                explanation: "Capacitance, Individual capacitances",
              },
              { symbol: "Q", explanation: "Charge (on capacitor)" },
              {
                symbol: "C_{series}, C_{parallel}",
                explanation: "Equivalent capacitance (series, parallel)",
              },
              {
                symbol: "U_C",
                explanation: "Potential energy stored in capacitor",
              },
              {
                symbol: "\\sum I_{in}, \\sum I_{out}",
                explanation: "Sum of currents into/out of a junction",
              },
              {
                symbol: "\\sum \\Delta V",
                explanation: "Sum of voltage changes around a closed loop",
              },
            ],
          },
          {
            id: 2032,
            name: "Electrostatics & Magnetism",
            theory:
              "Electrostatics deals with stationary charges and their fields. Magnetism deals with magnetic fields and forces, often related to moving charges or currents.",
            sections: [
              {
                sectionName: "Electric Forces & Fields",
                formulas: [
                  "F_e = k \\frac{|q_1 q_2|}{r^2}", // Coulomb's Law
                  "\\vec{E} = \\frac{\\vec{F}_e}{q_0}",
                  "E = k \\frac{|q|}{r^2} \\quad (\\text{Point charge})",
                  "V = k \\frac{q}{r} \\quad (\\text{Point charge potential})",
                  "\\Delta V = - \\int \\vec{E} \\cdot d\\vec{l}", // Potential difference
                  "U_e = qV = k \\frac{q_1 q_2}{r}", // Electric Potential Energy
                ],
              },
              {
                sectionName: "Magnetic Fields & Forces",
                formulas: [
                  "\\vec{F}_B = q (\\vec{v} \\times \\vec{B}) \\quad (F_B = qvB\\sin\\theta)", // Force on moving charge
                  "\\vec{F}_B = I (\\vec{L} \\times \\vec{B}) \\quad (F_B = ILB\\sin\\theta)", // Force on current-carrying wire
                  "B = \\frac{\\mu_0 I}{2\\pi r} \\quad (\\text{Long straight wire})",
                  "B = \\frac{\\mu_0 N I}{L} \\quad (\\text{Solenoid, ideal})",
                ],
              },
              {
                sectionName: "Electromagnetic Induction",
                formulas: [
                  "\\Phi_B = \\int \\vec{B} \\cdot d\\vec{A} = BA\\cos\\theta", // Magnetic Flux
                  "\\mathcal{E} = -N \\frac{d\\Phi_B}{dt}", // Faraday's Law of Induction
                ],
              },
            ],
            symbols: [
              {
                symbol: "F_e, F_B",
                explanation: "Electrostatic Force, Magnetic Force",
              },
              { symbol: "k", explanation: "Coulomb's constant (1/(4πε₀))" },
              {
                symbol: "q, q_0, q_1, q_2",
                explanation: "Electric Charge, Test charge",
              },
              { symbol: "r", explanation: "Distance" },
              {
                symbol: "\\vec{E}, E",
                explanation: "Electric Field (vector, magnitude)",
              },
              {
                symbol: "V, \\Delta V",
                explanation: "Electric Potential, Potential Difference",
              },
              { symbol: "U_e", explanation: "Electric Potential Energy" },
              {
                symbol: "d\\vec{l}",
                explanation: "Infinitesimal displacement vector",
              },
              { symbol: "\\vec{v}", explanation: "Velocity of charge" },
              {
                symbol: "\\vec{B}, B",
                explanation: "Magnetic Field (vector, magnitude)",
              },
              {
                symbol: "\\theta",
                explanation:
                  "Angle (e.g. between v and B, or L and B, or B and A normal)",
              },
              { symbol: "I", explanation: "Current" },
              {
                symbol: "\\vec{L}",
                explanation: "Length vector of wire in direction of current",
              },
              { symbol: "\\mu_0", explanation: "Permeability of free space" },
              { symbol: "N", explanation: "Number of turns/loops" },
              { symbol: "L", explanation: "Length of solenoid" },
              { symbol: "\\Phi_B", explanation: "Magnetic Flux" },
              { symbol: "d\\vec{A}", explanation: "Infinitesimal area vector" },
              {
                symbol: "\\mathcal{E}",
                explanation: "Induced Electromotive Force (EMF)",
              },
              { symbol: "dt", explanation: "Infinitesimal change in time" },
            ],
          },
        ],
      },
      // --- Optics & Waves ---
      {
        id: 204,
        name: "Optics & Waves",
        subject: "Physics",
        icon: SunMedium,
        notes: [
          {
            id: 2041,
            name: "Wave Properties & Sound",
            theory:
              "Waves transport energy without transporting matter. Sound is a mechanical wave. Key properties include wavelength, frequency, speed, and amplitude.",
            sections: [
              {
                sectionName: "Basic Wave Relations",
                formulas: [
                  "v = f \\lambda",
                  "T = \\frac{1}{f}", // Period and frequency
                  "y(x,t) = A \\sin(kx - \\omega t + \\phi)", // Sinusoidal wave equation
                ],
              },
              {
                sectionName: "Sound Waves",
                formulas: [
                  "v_{sound} = \\sqrt{\\frac{B}{\\rho}} \\quad (\\text{in fluid})",
                  "v_{sound} = \\sqrt{\\frac{Y}{\\rho}} \\quad (\\text{in solid rod})",
                  "\\beta (dB) = 10 \\log_{10} \\left(\\frac{I}{I_0}\\right)", // Sound Intensity Level
                  "f_o = f_s \\left( \\frac{v \\pm v_o}{v \\mp v_s} \\right)", // Doppler Effect (sound)
                ],
              },
            ],
            symbols: [
              {
                symbol: "v, v_{sound}",
                explanation: "Wave speed, Speed of sound",
              },
              {
                symbol: "f, f_s, f_o",
                explanation: "Frequency, Source frequency, Observer frequency",
              },
              { symbol: "\\lambda", explanation: "Wavelength" },
              { symbol: "T", explanation: "Period" },
              { symbol: "y(x,t)", explanation: "Displacement of wave" },
              { symbol: "A", explanation: "Amplitude" },
              { symbol: "k", explanation: "Wave number (2π/λ)" },
              { symbol: "\\omega", explanation: "Angular frequency (2πf)" },
              { symbol: "\\phi", explanation: "Phase constant" },
              { symbol: "B", explanation: "Bulk modulus" },
              { symbol: "Y", explanation: "Young's modulus" },
              { symbol: "\\rho", explanation: "Density of medium" },
              {
                symbol: "\\beta",
                explanation: "Sound intensity level in decibels (dB)",
              },
              { symbol: "I", explanation: "Sound intensity (W/m²)" },
              {
                symbol: "I_0",
                explanation:
                  "Reference intensity (threshold of hearing, 10⁻¹² W/m²)",
              },
              {
                symbol: "v_o, v_s",
                explanation: "Speed of observer, speed of source (Doppler)",
              },
            ],
          },
          {
            id: 2042,
            name: "Geometrical Optics (Reflection & Refraction)",
            theory:
              "Light can be modeled as rays. Reflection occurs when light bounces off a surface. Refraction is the bending of light as it passes from one medium to another.",
            sections: [
              {
                sectionName: "Reflection & Refraction Laws",
                formulas: [
                  "\\theta_i = \\theta_r", // Law of Reflection
                  "n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2", // Snell's Law of Refraction
                  "n = \\frac{c}{v}", // Index of Refraction
                ],
              },
              {
                sectionName: "Lenses & Mirrors",
                formulas: [
                  "\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}", // Thin Lens / Mirror Equation
                  "M = -\\frac{d_i}{d_o} = \\frac{h_i}{h_o}", // Magnification
                  "f = R/2 \\quad (\\text{Spherical mirror})",
                ],
              },
            ],
            symbols: [
              {
                symbol: "\\theta_i, \\theta_r",
                explanation: "Angle of incidence, Angle of reflection",
              },
              {
                symbol: "n, n_1, n_2",
                explanation: "Index of refraction (medium, medium 1, medium 2)",
              },
              {
                symbol: "\\theta_1, \\theta_2",
                explanation:
                  "Angle of incidence, Angle of refraction (Snell's)",
              },
              { symbol: "c", explanation: "Speed of light in vacuum" },
              { symbol: "v", explanation: "Speed of light in medium" },
              { symbol: "f", explanation: "Focal length" },
              { symbol: "d_o", explanation: "Object distance" },
              { symbol: "d_i", explanation: "Image distance" },
              { symbol: "M", explanation: "Magnification" },
              {
                symbol: "h_o, h_i",
                explanation: "Object height, Image height",
              },
              { symbol: "R", explanation: "Radius of curvature (mirror)" },
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
        name: "Stoichiometry & Solutions",
        subject: "Chemistry",
        icon: FlaskConical,
        notes: [
          {
            id: 3011,
            name: "Mole Concept & Composition",
            theory:
              "The mole relates mass to the number of particles. Stoichiometry uses mole ratios from balanced equations to calculate amounts in reactions.",
            sections: [
              {
                sectionName: "Mole Definitions & Conversions",
                formulas: [
                  "n = \\frac{N}{N_A}",
                  "n = \\frac{m}{M}",
                  "\\text{Density } (\\rho) = \\frac{m}{V}",
                ],
              },
              {
                sectionName: "Percent Composition & Empirical Formulas",
                formulas: [
                  "\\% \\text{ Element} = \\frac{\\text{mass of element in compound}}{\\text{molar mass of compound}} \\times 100\\%",
                  "\\text{Empirical Formula: Simplest whole-number ratio of atoms}",
                  "\\text{Molecular Formula} = (\\text{Empirical Formula})_x",
                ],
              },
            ],
            symbols: [
              { symbol: "n", explanation: "Amount of substance (moles)" },
              { symbol: "N", explanation: "Number of particles" },
              {
                symbol: "N_A",
                explanation: "Avogadro's number (6.022 x 10²³ mol⁻¹)",
              },
              { symbol: "m", explanation: "Mass (grams)" },
              { symbol: "M", explanation: "Molar Mass (g/mol)" },
              { symbol: "\\rho", explanation: "Density" },
              { symbol: "V", explanation: "Volume" },
              {
                symbol: "x",
                explanation: "Integer multiple for molecular formula",
              },
            ],
          },
          {
            id: 3012,
            name: "Solution Concentrations & Dilution",
            theory:
              "Concentration describes solute amount in solvent/solution. Molarity is common. Dilution reduces concentration by adding solvent.",
            sections: [
              {
                sectionName: "Concentration Units",
                formulas: [
                  "C (\\text{Molarity}) = \\frac{n_{solute}}{V_{solution} (L)}",
                  "m (\\text{Molality}) = \\frac{n_{solute}}{mass_{solvent} (kg)}",
                  "\\% \\text{ by mass} = \\frac{mass_{solute}}{mass_{solution}} \\times 100\\%",
                ],
              },
              {
                sectionName: "Dilution & Titration (Basic)",
                formulas: [
                  "M_1 V_1 = M_2 V_2", // Dilution
                  "n_a M_a V_a = n_b M_b V_b \\quad (\\text{Titration, acid-base example})",
                ],
              },
            ],
            symbols: [
              { symbol: "C", explanation: "Molarity (mol/L or M)" },
              { symbol: "m", explanation: "Molality (mol/kg)" },
              { symbol: "n_{solute}", explanation: "Moles of solute" },
              {
                symbol: "V_{solution}",
                explanation: "Volume of solution (Liters)",
              },
              { symbol: "mass_{solvent}", explanation: "Mass of solvent (kg)" },
              {
                symbol: "mass_{solute}, mass_{solution}",
                explanation: "Mass of solute, solution",
              },
              {
                symbol: "M_1, V_1",
                explanation: "Initial Molarity and Volume",
              },
              { symbol: "M_2, V_2", explanation: "Final Molarity and Volume" },
              {
                symbol: "M_a, V_a, n_a",
                explanation: "Molarity, Volume, Stoichiometric factor of acid",
              },
              {
                symbol: "M_b, V_b, n_b",
                explanation: "Molarity, Volume, Stoichiometric factor of base",
              },
            ],
          },
          {
            id: 3013,
            name: "Chemical Reactions & Balancing",
            theory:
              "Chemical reactions involve rearrangement of atoms. Balanced equations ensure mass conservation. Reactions are classified by patterns (e.g., combination, decomposition).",
            sections: [
              {
                sectionName: "Balancing Chemical Equations",
                formulas: [
                  "\\text{Law of Conservation of Mass: Atoms are neither created nor destroyed.}",
                  "aA + bB \\rightarrow cC + dD \\quad (\\text{Balanced})",
                ],
              },
              {
                sectionName: "Common Reaction Types",
                formulas: [
                  "\\text{Combination: } A + B \\rightarrow AB",
                  "\\text{Decomposition: } AB \\rightarrow A + B",
                  "\\text{Single Replacement: } A + BC \\rightarrow AC + B",
                  "\\text{Double Replacement: } AB + CD \\rightarrow AD + CB",
                  "\\text{Combustion (hydrocarbon): } C_xH_y + O_2 \\rightarrow CO_2 + H_2O",
                ],
              },
              {
                sectionName: "Limiting Reactant & Percent Yield",
                formulas: [
                  "\\text{Limiting Reactant: Reactant completely consumed, determines product amount.}",
                  "\\% \\text{ Yield} = \\frac{\\text{Actual Yield}}{\\text{Theoretical Yield}} \\times 100\\%",
                ],
              },
            ],
            symbols: [
              {
                symbol: "A, B, C, D",
                explanation: "Chemical species (reactants/products)",
              },
              {
                symbol: "a, b, c, d",
                explanation: "Stoichiometric coefficients",
              },
              { symbol: "C_xH_y", explanation: "General hydrocarbon" },
            ],
          },
        ],
      },
      // --- Atomic Structure & Quantum Chemistry ---
      {
        id: 302,
        name: "Atomic Structure & Quantum",
        subject: "Chemistry",
        icon: Waves,
        notes: [
          {
            id: 3021,
            name: "Models, Photons & Energy Levels",
            theory:
              "Atomic models evolved to describe electron behavior. Electrons occupy quantized energy levels; transitions involve photons.",
            sections: [
              {
                sectionName: "Early Models & Subatomic Particles",
                formulas: [
                  "A = Z + N_n", // Mass Number (A), Atomic Number (Z), Neutron Number (N_n)
                ],
              },
              {
                sectionName: "Bohr Model & Photon Energy",
                formulas: [
                  "E_n = -\\frac{R_H Z^2}{n^2} \\quad (\\text{Hydrogen-like atoms})",
                  "\\Delta E = E_{photon} = hf = h\\frac{c}{\\lambda}",
                  "\\frac{1}{\\lambda} = R_H Z^2 \\left( \\frac{1}{n_f^2} - \\frac{1}{n_i^2} \\right) \\quad (\\text{Rydberg formula})",
                ],
              },
            ],
            symbols: [
              { symbol: "E_n", explanation: "Energy of electron in level n" },
              { symbol: "R_H", explanation: "Rydberg constant" },
              { symbol: "Z", explanation: "Atomic number (nuclear charge)" },
              { symbol: "A", explanation: "Mass number" },
              { symbol: "N_n", explanation: "Number of neutrons" },
              {
                symbol: "n, n_i, n_f",
                explanation: "Principal quantum number (initial, final)",
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
            name: "Wave-Particle Duality & Uncertainty",
            theory:
              "Matter exhibits wave-like properties (de Broglie). Heisenberg's Uncertainty Principle limits simultaneous precision of certain conjugate variables.",
            sections: [
              {
                sectionName: "de Broglie Wavelength",
                formulas: ["\\lambda = \\frac{h}{p} = \\frac{h}{mv}"],
              },
              {
                sectionName: "Heisenberg Uncertainty Principle",
                formulas: [
                  "\\Delta x \\Delta p \\ge \\frac{\\hbar}{2} \\quad (\\hbar = h/2\\pi)",
                  "\\Delta E \\Delta t \\ge \\frac{\\hbar}{2}",
                ],
              },
            ],
            symbols: [
              { symbol: "\\lambda", explanation: "de Broglie wavelength" },
              { symbol: "h", explanation: "Planck's constant" },
              {
                symbol: "\\hbar",
                explanation: "Reduced Planck's constant (h/2π)",
              },
              { symbol: "p", explanation: "Momentum" },
              { symbol: "m", explanation: "Mass of particle" },
              { symbol: "v", explanation: "Velocity of particle" },
              { symbol: "\\Delta x", explanation: "Uncertainty in position" },
              { symbol: "\\Delta p", explanation: "Uncertainty in momentum" },
              { symbol: "\\Delta E", explanation: "Uncertainty in energy" },
              { symbol: "\\Delta t", explanation: "Uncertainty in time" },
            ],
          },
          {
            id: 3023,
            name: "Quantum Numbers & Electron Configurations",
            theory:
              "Quantum numbers (n, l, m_l, m_s) describe the state of an electron in an atom. Electron configurations show the distribution of electrons in atomic orbitals.",
            sections: [
              {
                sectionName: "Quantum Numbers",
                formulas: [
                  "n = 1, 2, 3, \\dots \\quad (\\text{Principal QN, shell})",
                  "l = 0, 1, \\dots, n-1 \\quad (\\text{Angular Momentum QN, subshell: s,p,d,f})",
                  "m_l = -l, \\dots, 0, \\dots, +l \\quad (\\text{Magnetic QN, orbital orientation})",
                  "m_s = +\\frac{1}{2}, -\\frac{1}{2} \\quad (\\text{Spin QN})",
                ],
              },
              {
                sectionName: "Electron Configuration Principles",
                formulas: [
                  "\\text{Aufbau Principle: Fill lowest energy orbitals first.}",
                  "\\text{Pauli Exclusion Principle: Max 2 electrons per orbital, opposite spins.}",
                  "\\text{Hund's Rule: Maximize unpaired spins in degenerate orbitals.}",
                ],
              },
            ],
            symbols: [
              { symbol: "n", explanation: "Principal Quantum Number" },
              {
                symbol: "l",
                explanation: "Angular Momentum (Azimuthal) Quantum Number",
              },
              { symbol: "m_l", explanation: "Magnetic Quantum Number" },
              { symbol: "m_s", explanation: "Spin Quantum Number" },
            ],
          },
        ],
      },
      // --- Chemical Kinetics & Equilibrium ---
      {
        id: 303,
        name: "Kinetics & Equilibrium",
        subject: "Chemistry",
        icon: Gauge,
        notes: [
          {
            id: 3031,
            name: "Reaction Rates & Rate Laws",
            theory:
              "Kinetics studies reaction speeds. Rate laws relate rate to reactant concentrations. Arrhenius equation shows temperature dependence.",
            sections: [
              {
                sectionName: "Rate Definition & Rate Law",
                formulas: [
                  "\\text{Rate} = -\\frac{1}{a}\\frac{d[A]}{dt} = k[A]^x[B]^y", // For aA -> products
                  "\\text{Overall Order} = x+y",
                ],
              },
              {
                sectionName: "Integrated Rate Laws (Examples)",
                formulas: [
                  "\\ln[A]_t - \\ln[A]_0 = -kt \\quad (\\text{First Order})",
                  "\\frac{1}{[A]_t} - \\frac{1}{[A]_0} = kt \\quad (\\text{Second Order, for A})",
                  "t_{1/2} = \\frac{\\ln 2}{k} \\quad (\\text{Half-life, First Order})",
                ],
              },
              {
                sectionName: "Arrhenius Equation",
                formulas: [
                  "k = A e^{-E_a / (RT)}",
                  "\\ln k = \\ln A - \\frac{E_a}{RT}", // Linear form
                ],
              },
            ],
            symbols: [
              { symbol: "Rate", explanation: "Reaction rate" },
              { symbol: "k", explanation: "Rate constant" },
              { symbol: "[A], [B]", explanation: "Concentrations of A, B" },
              {
                symbol: "[A]_t, [A]_0",
                explanation: "Concentration of A at time t, initial",
              },
              { symbol: "x, y", explanation: "Reaction orders w.r.t. A, B" },
              {
                symbol: "a",
                explanation: "Stoichiometric coefficient of reactant A",
              },
              { symbol: "dt", explanation: "Infinitesimal change in time" },
              {
                symbol: "d[A]",
                explanation: "Infinitesimal change in concentration of A",
              },
              { symbol: "t_{1/2}", explanation: "Half-life" },
              {
                symbol: "A",
                explanation:
                  "Arrhenius pre-exponential factor (frequency factor)",
              },
              { symbol: "e", explanation: "Base of natural logarithm" },
              { symbol: "E_a", explanation: "Activation Energy" },
              {
                symbol: "R",
                explanation: "Ideal Gas Constant (e.g., 8.314 J/mol·K)",
              },
              { symbol: "T", explanation: "Absolute Temperature (Kelvin)" },
            ],
          },
          {
            id: 3032,
            name: "Chemical Equilibrium & K",
            theory:
              "Equilibrium is a dynamic state where forward/reverse reaction rates are equal. The equilibrium constant K quantifies relative amounts of products/reactants.",
            sections: [
              {
                sectionName: "Equilibrium Constant Expressions",
                formulas: [
                  "aA + bB \\rightleftharpoons cC + dD",
                  "K_c = \\frac{[C]^c [D]^d}{[A]^a [B]^b}",
                  "K_p = \\frac{(P_C)^c (P_D)^d}{(P_A)^a (P_B)^b}",
                  "K_p = K_c (RT)^{\\Delta n_{gas}}",
                ],
              },
              {
                sectionName: "Reaction Quotient & Le Chatelier's",
                formulas: [
                  "Q_c = \\frac{[C]_0^c [D]_0^d}{[A]_0^a [B]_0^b} \\quad (\\text{at non-equilibrium conditions})",
                  "Q < K: \\text{Shifts right (products)}",
                  "Q > K: \\text{Shifts left (reactants)}",
                  "Q = K: \\text{At equilibrium}",
                  "\\text{Le Chatelier's Principle: System counteracts stress (conc, P, T).}",
                ],
              },
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
                symbol: "K_c, K_p",
                explanation: "Equilibrium constant (concentration, pressure)",
              },
              {
                symbol: "[X], [X]_0",
                explanation:
                  "Equilibrium concentration, Initial concentration of X",
              },
              {
                symbol: "P_X",
                explanation: "Equilibrium partial pressure of X",
              },
              { symbol: "R", explanation: "Ideal Gas Constant" },
              { symbol: "T", explanation: "Absolute Temperature (Kelvin)" },
              {
                symbol: "\\Delta n_{gas}",
                explanation: "Change in moles of gas (products - reactants)",
              },
              {
                symbol: "Q, Q_c",
                explanation: "Reaction Quotient (concentration based)",
              },
            ],
          },
          {
            id: 3033,
            name: "Acid-Base Equilibria",
            theory:
              "Acids and bases involve H⁺ or OH⁻ ions, or electron pair donation/acceptance. pH measures acidity. Weak acids/bases establish equilibria.",
            sections: [
              {
                sectionName: "Definitions & pH Scale",
                formulas: [
                  "\\text{Arrhenius: Acid produces H⁺, Base produces OH⁻ (in H₂O)}",
                  "\\text{Brønsted-Lowry: Acid donates H⁺, Base accepts H⁺}",
                  "pH = -\\log_{10}[H_3O^+]",
                  "pOH = -\\log_{10}[OH^-]",
                  "pH + pOH = 14.00 \\quad (\\text{at } 25^\\circ C)",
                  "K_w = [H_3O^+][OH^-] = 1.0 \\times 10^{-14} \\quad (\\text{at } 25^\\circ C)",
                ],
              },
              {
                sectionName: "Weak Acids & Bases",
                formulas: [
                  "HA + H_2O \\rightleftharpoons H_3O^+ + A^- \\quad K_a = \\frac{[H_3O^+][A^-]}{[HA]}",
                  "B + H_2O \\rightleftharpoons BH^+ + OH^- \\quad K_b = \\frac{[BH^+][OH^-]}{[B]}",
                  "K_a K_b = K_w \\quad (\\text{for conjugate acid-base pair})",
                  "\\% \\text{ Ionization} = \\frac{[H_3O^+]_{eq}}{[HA]_{initial}} \\times 100\\%",
                ],
              },
              {
                sectionName: "Buffers",
                formulas: [
                  "\\text{Buffer: Weak acid + conjugate base (or weak base + conjugate acid)}",
                  "pH = pK_a + \\log_{10}\\frac{[A^-]}{[HA]} \\quad (\\text{Henderson-Hasselbalch})",
                ],
              },
            ],
            symbols: [
              { symbol: "H⁺, H_3O⁺", explanation: "Proton, Hydronium ion" },
              { symbol: "OH⁻", explanation: "Hydroxide ion" },
              {
                symbol: "pH, pOH",
                explanation: "Measure of acidity, basicity",
              },
              { symbol: "K_w", explanation: "Ion product constant for water" },
              { symbol: "HA", explanation: "Generic weak acid" },
              { symbol: "A⁻", explanation: "Conjugate base of HA" },
              { symbol: "B", explanation: "Generic weak base" },
              { symbol: "BH⁺", explanation: "Conjugate acid of B" },
              {
                symbol: "K_a, K_b",
                explanation:
                  "Acid dissociation constant, Base dissociation constant",
              },
              { symbol: "pK_a", explanation: "-log₁₀(K_a)" },
              {
                symbol: "[X]",
                explanation: "Molar concentration of species X",
              },
            ],
          },
        ],
      },
      // --- Chemical Thermodynamics ---
      {
        id: 304,
        name: "Chemical Thermodynamics",
        subject: "Chemistry",
        icon: Thermometer, // Can reuse or use TestTubeDiagonal
        notes: [
          {
            id: 3041,
            name: "Enthalpy, Entropy, Gibbs Free Energy",
            theory:
              "Thermodynamics predicts spontaneity of reactions and energy changes. Enthalpy (ΔH) is heat change at constant pressure. Entropy (ΔS) measures disorder. Gibbs Free Energy (ΔG) combines these to predict spontaneity.",
            sections: [
              {
                sectionName: "Enthalpy (ΔH)",
                formulas: [
                  "\\Delta H_{rxn}^\\circ = \\sum n \\Delta H_f^\\circ (\\text{products}) - \\sum m \\Delta H_f^\\circ (\\text{reactants})", // Hess's Law form
                  "\\Delta H > 0 \\text{ (Endothermic, heat absorbed)}",
                  "\\Delta H < 0 \\text{ (Exothermic, heat released)}",
                ],
              },
              {
                sectionName: "Entropy (ΔS)",
                formulas: [
                  "\\Delta S_{rxn}^\\circ = \\sum n S^\\circ (\\text{products}) - \\sum m S^\\circ (\\text{reactants})",
                  "\\Delta S > 0 \\text{ (Increased disorder)}",
                  "\\Delta S < 0 \\text{ (Decreased disorder)}",
                ],
              },
              {
                sectionName: "Gibbs Free Energy (ΔG)",
                formulas: [
                  "\\Delta G = \\Delta H - T\\Delta S",
                  "\\Delta G_{rxn}^\\circ = \\sum n \\Delta G_f^\\circ (\\text{products}) - \\sum m \\Delta G_f^\\circ (\\text{reactants})",
                  "\\Delta G < 0 \\text{ (Spontaneous at given T, P)}",
                  "\\Delta G > 0 \\text{ (Non-spontaneous at given T, P)}",
                  "\\Delta G = 0 \\text{ (At equilibrium)}",
                  "\\Delta G^\\circ = -RT \\ln K_{eq}",
                ],
              },
            ],
            symbols: [
              {
                symbol: "\\Delta H, \\Delta H_{rxn}^\\circ",
                explanation:
                  "Enthalpy change, Standard enthalpy change of reaction",
              },
              {
                symbol: "\\Delta H_f^\\circ",
                explanation: "Standard enthalpy of formation",
              },
              {
                symbol: "\\Delta S, \\Delta S_{rxn}^\\circ",
                explanation:
                  "Entropy change, Standard entropy change of reaction",
              },
              { symbol: "S^\\circ", explanation: "Standard molar entropy" },
              {
                symbol: "\\Delta G, \\Delta G_{rxn}^\\circ",
                explanation:
                  "Gibbs Free Energy change, Standard Gibbs Free Energy change of reaction",
              },
              {
                symbol: "\\Delta G_f^\\circ",
                explanation: "Standard Gibbs Free Energy of formation",
              },
              {
                symbol: "n, m",
                explanation:
                  "Stoichiometric coefficients (products, reactants)",
              },
              { symbol: "T", explanation: "Absolute Temperature (Kelvin)" },
              { symbol: "R", explanation: "Ideal Gas Constant (energy units)" },
              { symbol: "K_{eq}", explanation: "Equilibrium constant" },
              { symbol: "\\sum", explanation: "Summation symbol" },
              {
                symbol: "\\circ",
                explanation: "Standard state conditions (1 atm, 298 K usually)",
              },
            ],
          },
        ],
      },
      // --- Organic Chemistry Basics ---
      {
        id: 305,
        name: "Organic Chemistry Basics",
        subject: "Chemistry",
        icon: BookOpen, // Or a more specific molecule icon if available
        notes: [
          {
            id: 3051,
            name: "Introduction & Functional Groups",
            theory:
              "Organic chemistry is the study of carbon-containing compounds. Functional groups are specific groups of atoms within molecules that are responsible for the characteristic chemical reactions of those molecules.",
            sections: [
              {
                sectionName: "Hydrocarbons",
                formulas: [
                  "\\text{Alkanes (C}_n\\text{H}_{2n+2}\\text{): Single C-C bonds (e.g., Methane CH}_4\\text{, Ethane C}_2\\text{H}_6\\text{)}",
                  "\\text{Alkenes (C}_n\\text{H}_{2n}\\text{): At least one C=C double bond (e.g., Ethene C}_2\\text{H}_4\\text{)}",
                  "\\text{Alkynes (C}_n\\text{H}_{2n-2}\\text{): At least one C≡C triple bond (e.g., Ethyne C}_2\\text{H}_2\\text{)}",
                  "\\text{Aromatics: Cyclic, conjugated (e.g., Benzene C}_6\\text{H}_6\\text{)}",
                ],
              },
              {
                sectionName: "Common Functional Groups",
                formulas: [
                  "\\text{Alcohol: R-OH}",
                  "\\text{Ether: R-O-R'}",
                  "\\text{Aldehyde: R-CHO}",
                  "\\text{Ketone: R-CO-R'}",
                  "\\text{Carboxylic Acid: R-COOH}",
                  "\\text{Ester: R-COO-R'}",
                  "\\text{Amine: R-NH}_2\\text{, R-NHR', R-NR'R''}",
                  "\\text{Amide: R-CONH}_2\\text{, R-CONHR', R-CONR'R''}",
                ],
              },
            ],
            symbols: [
              {
                symbol: "C_n H_{...}",
                explanation: "General formula for hydrocarbon class",
              },
              {
                symbol: "R, R', R''",
                explanation:
                  "Represents an alkyl or aryl group (carbon-based fragment)",
              },
              { symbol: "-OH", explanation: "Hydroxyl group (alcohol)" },
              { symbol: "-O-", explanation: "Ether linkage" },
              {
                symbol: "-CHO",
                explanation: "Aldehyde group (carbonyl at end of chain)",
              },
              {
                symbol: "-CO-",
                explanation: "Ketone group (carbonyl within chain)",
              },
              {
                symbol: "-COOH",
                explanation: "Carboxyl group (carboxylic acid)",
              },
              { symbol: "-COO-", explanation: "Ester group" },
              {
                symbol: "-NH_2, -NHR, -NRR'",
                explanation: "Amine group (primary, secondary, tertiary)",
              },
              { symbol: "-CONH_2, ...", explanation: "Amide group" },
            ],
          },
        ],
      },
    ],
  },
];
