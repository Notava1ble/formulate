import {
  BookOpen,
  Briefcase,
  Code,
  Dumbbell,
  GraduationCap,
  Home,
  Lightbulb,
  Plane,
  Utensils,
  Wheat,
} from "lucide-react";

import { CollectionData } from "./collectionData";

export const userCollectionData: CollectionData = [
  {
    icon: Lightbulb,
    id: 101,
    name: "Project Ideas",
    notes: [
      {
        content:
          "Develop a mobile app for local event discovery. Focus on community events and small gatherings often missed by larger platforms. Include features like user submissions and event ratings.",
        id: 1011,
        name: "Event Discovery App",
      },
      {
        content:
          "Create an online platform for skill swapping. Users can offer skills like gardening or web design in exchange for others like plumbing or language tutoring. Monetization could be through optional premium features.",
        id: 1012,
        name: "Skill Swap Platform",
      },
      {
        content:
          "Build a subscription box service for artisanal snacks from a specific region. Curate unique items and partner with local producers. Provide background information on each product.",
        id: 1013,
        name: "Artisanal Snack Box",
      },
    ],
    subject: "Brainstorming New Ventures",
  },
  {
    icon: Briefcase,
    id: 102,
    name: "Meeting Minutes",
    notes: [
      {
        content:
          "Discussed Q3 marketing strategy. Key action items include finalizing ad creatives by next Friday and allocating budget for social media campaigns. Follow-up meeting scheduled for next Tuesday.",
        id: 1021,
        name: "Q3 Marketing Sync",
      },
      {
        content:
          "Project Alpha kickoff meeting notes. Defined project scope, assigned initial tasks to team members, and set preliminary deadlines. John to circulate the project charter.",
        id: 1022,
        name: "Project Alpha Kickoff",
      },
    ],
    subject: "Work Related Meetings",
  },
  {
    icon: Plane,
    id: 103,
    name: "Travel Plans - Italy",
    notes: [
      {
        content:
          "Draft itinerary for the 10-day Italy trip. Includes Rome (3 days), Florence (3 days), and Venice (3 days), with one travel day. Need to book train tickets between cities.",
        id: 1031,
        name: "Itinerary Draft",
      },
      {
        content:
          "Research potential hotels in Florence near the city center. Looking for options with good reviews, breakfast included, and price under €150 per night. Check booking sites and travel blogs.",
        id: 1032,
        name: "Florence Hotel Research",
      },
      {
        content:
          "List of must-see attractions in Rome. Includes the Colosseum, Vatican City, Roman Forum, and Trevi Fountain. Check opening times and consider purchasing tickets in advance.",
        id: 1033,
        name: "Rome Sightseeing List",
      },
    ],
    subject: "Vacation Planning",
  },
  {
    icon: BookOpen,
    id: 104,
    name: "Book Summaries",
    notes: [
      {
        content:
          '"Sapiens" by Yuval Noah Harari traces the history of humankind from the Stone Age to the present. It explores how Homo sapiens came to dominate the planet through cognitive revolution, agriculture, and unification. Key themes include the power of shared myths and the potential future of humanity.',
        id: 1041,
        name: "Sapiens Summary",
      },
      {
        content:
          '"Atomic Habits" by James Clear provides a practical guide to building good habits and breaking bad ones. It emphasizes making small, incremental changes (atomic habits) that compound over time. The four laws of behavior change are: make it obvious, make it attractive, make it easy, make it satisfying.',
        id: 1042,
        name: "Atomic Habits Notes",
      },
    ],
    subject: "Reading List Notes",
  },
  {
    icon: Code,
    id: 105,
    name: "Web Development Snippets",
    notes: [
      {
        content:
          "CSS snippet for creating a simple responsive grid layout using Flexbox. Define a container with `display: flex` and `flex-wrap: wrap`. Set `flex-basis` on child elements to control their width.",
        id: 1051,
        name: "Flexbox Grid Layout",
      },
      {
        content:
          "JavaScript function to fetch data from an API using the `fetch` method. Includes basic error handling using `.catch()`. Remember to handle the response format (e.g., `.json()`).",
        id: 1052,
        name: "JS Fetch API Example",
      },
    ],
    subject: "Coding Resources",
  },
  {
    icon: Utensils,
    id: 106,
    name: "Recipe Ideas",
    notes: [
      {
        content:
          "Recipe for quick weeknight pasta with cherry tomatoes, garlic, basil, and olive oil. Sauté garlic, add halved tomatoes, cook until soft, then toss with cooked pasta and fresh basil. Simple, fast, and delicious.",
        id: 1061,
        name: "Quick Tomato Pasta",
      },
      {
        content:
          "Idea for homemade granola bars. Combine oats, nuts, seeds, dried fruit, honey/maple syrup, and a binder like nut butter. Press into a pan, bake, and cut into bars.",
        id: 1062,
        name: "Homemade Granola Bars",
      },
      {
        content:
          "Lentil soup recipe. Sauté onions, carrots, celery, add lentils, vegetable broth, and seasonings like cumin and coriander. Simmer until lentils are tender. Blend partially for a creamier texture if desired.",
        id: 1063,
        name: "Hearty Lentil Soup",
      },
    ],
    subject: "Cooking & Baking",
  },
  {
    icon: Dumbbell,
    id: 107,
    name: "Workout Routines",
    notes: [
      {
        content:
          "Full body workout routine for beginners. Includes squats (3 sets of 10), push-ups (3 sets to failure), lunges (3 sets of 10 per leg), and planks (3 sets hold for 30-60 seconds). Focus on proper form.",
        id: 1071,
        name: "Beginner Full Body",
      },
      {
        content:
          "Cardio workout ideas. Options include 30 minutes of jogging, cycling, or using an elliptical machine. Alternatively, try a HIIT routine with 45 seconds work and 15 seconds rest for exercises like jumping jacks, burpees, and high knees.",
        id: 1072,
        name: "Cardio Options",
      },
    ],
    subject: "Fitness & Exercise",
  },
  {
    icon: Home,
    id: 108,
    name: "Home Improvement",
    notes: [
      {
        content:
          "Plan for painting the living room. Need to choose a paint color (leaning towards a light grey). Required materials: paint, primer, rollers, brushes, painter's tape, drop cloths.",
        id: 1081,
        name: "Living Room Painting",
      },
      {
        content:
          "Research options for replacing the kitchen faucet. Look for durable materials like stainless steel or brass. Consider features like pull-down sprayer and water efficiency.",
        id: 1082,
        name: "Kitchen Faucet Replacement",
      },
    ],
    subject: "DIY Projects",
  },
  {
    icon: Wheat,
    id: 109,
    name: "Gardening Notes",
    notes: [
      {
        content:
          "Tomato planting tips for the season. Choose a sunny spot with well-drained soil. Use stakes or cages for support and water consistently, especially during dry periods.",
        id: 1091,
        name: "Tomato Planting Tips",
      },
      {
        content:
          "Information on companion planting for vegetable garden. Basil planted near tomatoes can deter pests. Marigolds can help repel nematodes and other insects.",
        id: 1092,
        name: "Companion Planting Ideas",
      },
      {
        content:
          "Starting herbs indoors before the last frost. Parsley, basil, and chives can be started in small pots on a sunny windowsill. Transplant outdoors once the weather warms up.",
        id: 1093,
        name: "Starting Herbs Indoors",
      },
    ],
    subject: "Gardening Tips",
  },
  {
    icon: GraduationCap,
    id: 110,
    name: "Online Course Notes",
    notes: [
      {
        content:
          "Notes from Python course module 1. Covered basic syntax, data types (integers, floats, strings, booleans), variables, and print function. Need to practice writing simple scripts.",
        id: 1101,
        name: "Python Basics - Module 1",
      },
      {
        content:
          "Key concepts from digital marketing course week 3. Focused on SEO principles, including keyword research, on-page optimization, and link building. Understand the importance of quality content.",
        id: 1102,
        name: "Digital Marketing - SEO",
      },
    ],
    subject: "Learning & Education",
  },
];
