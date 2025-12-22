export const fakeCourses = [
  {
    id: crypto.randomUUID(),
    title: "Introduction to React",
    tags: ["React", "JavaScript", "Frontend"],
    creator: "Ahmed Hassan",
    state: "ready",
    stats: { attending: 120, completed: 85 },
  },
  {
    id: crypto.randomUUID(),
    title: "Advanced CSS Techniques",
    tags: ["CSS", "Responsive Design", "Flexbox"],
    creator: "Sara Ali",
    state: "under-creation",
    stats: null,
  },
  {
    id: crypto.randomUUID(),
    title: "Node.js for Beginners",
    tags: ["Node.js", "Backend"],
    creator: "Mohamed Tarek",
    state: "draft",
    stats: null,
  },
];
