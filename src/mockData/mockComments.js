export const mockComments = [
  {
    id: "c1",
    author: {
      name: "Anita Sharma",
      handle: "@anita_sh",
      avatar: "https://i.pravatar.cc/80?img=12"
    },
    text: "This video was super helpful! The way you explained the layout makes the concept much easier to follow.",
    postedAt: "2 hours ago",
    likes: 34,
    replies: [
      {
        id: "c1-r1",
        author: {
          name: "Rohit Gupta",
          handle: "@rohitg",
          avatar: "https://i.pravatar.cc/80?img=4"
        },
        text: "Totally agree. The Tailwind utility examples were especially useful.",
        postedAt: "1 hour ago",
        likes: 12,
        replies: [
          {
            id: "c1-r1-r1",
            author: {
              name: "Priya Patel",
              handle: "@priya.codes",
              avatar: "https://i.pravatar.cc/80?img=27"
            },
            text: "I used the same pattern in my project and it worked great.",
            postedAt: "45 minutes ago",
            likes: 5,
            replies: []
          }
        ]
      },
      {
        id: "c1-r2",
        author: {
          name: "Meera Jain",
          handle: "@meera_j",
          avatar: "https://i.pravatar.cc/80?img=18"
        },
        text: "Can anyone share how to adapt this for mobile-first responsive design?",
        postedAt: "45 minutes ago",
        likes: 8,
        replies: []
      }
    ]
  },
  {
    id: "c2",
    author: {
      name: "Vikram Khanna",
      handle: "@vikramk",
      avatar: "https://i.pravatar.cc/80?img=52"
    },
    text: "Nice breakdown! I liked the section on reusable components.",
    postedAt: "4 hours ago",
    likes: 21,
    replies: [
      {
        id: "c2-r1",
        author: {
          name: "Sunita Rao",
          handle: "@sunita",
          avatar: "https://i.pravatar.cc/80?img=32"
        },
        text: "The same. I am planning to refactor my sidebar using these ideas.",
        postedAt: "3 hours ago",
        likes: 9,
        replies: []
      }
    ]
  },
  {
    id: "c3",
    author: {
      name: "Nikhil Das",
      handle: "@nikhild",
      avatar: "https://i.pravatar.cc/80?img=10"
    },
    text: "Could you add a follow-up video on performance optimization with React and Tailwind?",
    postedAt: "Yesterday",
    likes: 18,
    replies: [
      {
        id: "c3-r1",
        author: {
          name: "Deepa Menon",
          handle: "@deepa_m",
          avatar: "https://i.pravatar.cc/80?img=7"
        },
        text: "That would be amazing! Especially lazy loading and memoization tips.",
        postedAt: "23 hours ago",
        likes: 11,
        replies: []
      }
    ]
  }
];
