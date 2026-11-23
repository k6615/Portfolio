/**
 * Portfolio Data Configuration
 * Centralized, easily editable source of truth for Karan's portfolio website.
 */

export const portfolioData = {
  personal: {
    name: "Karan",
    role: "Computer Science Student | Aspiring Software Developer",
    headline: "Building My Skills, One Project at a Time.",
    description:
      "I am a Computer Science student passionate about programming, software development, and problem-solving. I work with C, Java, and Python and enjoy developing practical projects while continuously improving my technical skills.",
    location: "Farah, Mathura, Uttar Pradesh, India",
    email: "karandhangar026@gmail.com",
    phone: "9690818095",
    githubUrl: "https://github.com/k6615",
    linkedinUrl: "https://www.linkedin.com/in/karan-dhangar-4a07673a5", // Easily editable
    resumeUrl: "resume.pdf",
    avatarUrl: "assets/Image.jpeg?v=2",
    availabilityBadge: "Open to Internships & Entry-Level Roles",
  },

  skills: {
    // Only confirmed programming languages: Java, C, Python (no invented percentages)
    languages: [
      {
        id: "java",
        name: "Java",
        category: "Programming Language",
        description: "Core Java, Object-Oriented Programming, and practical software design patterns.",
        badge: "Primary Language",
        icon: "java",
      },
      {
        id: "c",
        name: "C",
        category: "Programming Language",
        description: "Fundamental procedural programming, memory handling, and algorithmic basics.",
        badge: "Core Foundation",
        icon: "c",
      },
      {
        id: "python",
        name: "Python",
        category: "Programming Language",
        description: "Scripting, dynamic data manipulation, problem-solving, and clean syntax.",
        badge: "Versatile",
        icon: "python",
      },
    ],

    // Relevant core concepts
    concepts: [
      {
        id: "oop",
        name: "Object-Oriented Programming",
        category: "Core Concept",
        description: "Encapsulation, Inheritance, Polymorphism, and Abstraction implemented in real-world application structures.",
        badge: "Core Architecture",
        icon: "oop",
      },
      {
        id: "problem-solving",
        name: "Problem Solving",
        category: "Core Concept",
        description: "Logical analysis, computational thinking, debugging, and building optimized solutions.",
        badge: "Analytical Skill",
        icon: "problem-solving",
      },
      {
        id: "dsa",
        name: "Data Structures and Algorithms",
        category: "Core Concept",
        description: "Actively studying arrays, linked lists, searching, sorting, and algorithmic efficiency.",
        badge: "Currently Learning",
        isLearning: true,
        icon: "dsa",
      },
    ],
  },

  projects: [
    {
      id: "employee-payroll-system",
      title: "Employee Payroll System",
      technology: "Java",
      category: "Software Development",
      description:
        "An Employee Payroll System developed using Java, demonstrating Object-Oriented Programming concepts and employee payroll management functionality.",
      githubUrl: "https://github.com/k6615/Employee-Payroll-System-Java",
      highlights: [
        "Implements core OOP concepts: encapsulation of employee records, inheritance, and modular methods",
        "Calculates payroll, bonuses, and deductions with clean business logic",
        "Structured Java architecture designed for maintainability and scalability",
      ],
      tags: ["Java", "OOP", "Payroll Management", "Software Development"],
    },
  ],

  certifications: [
    {
      id: "java-cert",
      title: "Java Certificate",
      issuer: "HackerRank",
      isIssuerEditable: false,
      credentialUrl: "https://www.hackerrank.com/certificates/",
      imageUrl: "",
      description: "Verified assessment demonstrating Java programming syntax, OOP logic, and coding problem-solving.",
      status: "Verified",
    },
    {
      id: "python-cert",
      title: "Python Certificate",
      issuer: "HackerRank",
      isIssuerEditable: false,
      credentialUrl: "https://www.hackerrank.com/certificates/",
      imageUrl: "",
      description: "Verified assessment demonstrating fundamental Python programming skills and data manipulation.",
      status: "Verified",
    },
    {
      id: "genai-cert",
      title: "Introduction to Generative AI Studio",
      issuer: "Google Cloud / Coursera (Click to edit)", // Kept editable, not invented
      isIssuerEditable: true,
      credentialUrl: "",
      imageUrl: "",
      description: "Foundational learning covering Generative AI studio tooling, prompt exploration, and AI workflows.",
      status: "Editable Credential",
    },
  ],
};

// Also expose as a global variable on window for browser-only runtime
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = portfolioData;
}
