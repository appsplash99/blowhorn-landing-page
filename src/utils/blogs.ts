interface Blog {
  imageSrc: string;
  name: string;
  type: string;
  description: string;
}

export const BLOGS_PRIMARY: Blog[] = [
  {
    type: "Resources",
    name: "Refreshing Designs",
    imageSrc: "https://cdn.devdojo.com/images/may2021/quench-satisfying.jpg",
    description:
      "Quench satisfying designs to help you stir up emotion and tell a story.",
  },
  {
    type: "Lifestyle",
    name: "Healthier Lifestyle",
    imageSrc: "https://cdn.devdojo.com/images/may2021/orange.jpg",
    description:
      "Living a healthier lifestyle will help with your productivity and your mind-set.",
  },
  {
    type: "Entertainment",
    name: "Gaming Evolution",
    imageSrc: "https://cdn.devdojo.com/images/may2021/gbc.jpg",
    description:
      "Learn about the evolution of gaming and how it started a revolution.",
  },
];

export const BLOGS_SECONDARY: Blog[] = [
  {
    type: "Inspiration",
    name: "Best Workstations of the Year",
    imageSrc: "https://cdn.devdojo.com/images/may2021/workstation.jpg",
    description:
      "Check out these inspiring workstations to get ideas on how to level-up your workstation.",
  },
  {
    type: "Food",
    name: "Eating for Productivity",
    imageSrc: "https://cdn.devdojo.com/images/may2021/snacks.jpg",
    description:
      "Learn how to be more disciplined in your diet and how you can eat to maximize productivity.",
  },
  {
    type: "Resources",
    name: "A Design Mind-set",
    imageSrc: "https://cdn.devdojo.com/images/may2021/book-design.jpg",
    description:
      "What does it mean to have a design mind-set? Learn how to improve your eye for design.",
  },
];
