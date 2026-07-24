export const mockChatNames = [
  "Mahesh Pat",
  "Anita Sharma",
  "Rohit Gupta",
  "Priya Patel",
  "Meera Jain",
  "Vikram Khanna",
  "Nikhil Das",
  "Deepa Menon",
];

export const mockChatMessages = [
  "New message on live chat...",
  "This is a great stream!",
  "Loving the React tips.",
  "Can you explain that part again?",
  "Awesome content, thanks for sharing!",
  "Where did you learn Tailwind?",
  "The live chat is so helpful.",
  "I tried this and it worked perfectly.",
];

export const randomChatItem = (items) =>
  items[Math.floor(Math.random() * items.length)];
