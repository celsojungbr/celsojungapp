
import type { Book } from '../types';

export const mockBooks: Book[] = [
  {
    id: 1,
    title: "The Alchemy of Purpose",
    author: "Celso Jung",
    coverImage: "https://picsum.photos/id/10/800/1200",
    shortDescription: "Discover the path to personal transformation through spirituality and innovation.",
    longDescription: "The Alchemy of Purpose is a profound journey into the heart of what it means to live a meaningful life. Celso Jung masterfully blends ancient wisdom with modern insights on innovation, guiding readers to unlock their true potential and transform their reality. This book is not just a read; it's an experience that will challenge you to look within and find the gold hidden in your soul.",
    amazonLink: "https://www.amazon.com",
    awards: ["Mind & Spirit Book of the Year 2023", "Innovation in Literature Award"],
    mediaMentions: [
        { source: "The New York Times", link: "#" },
        { source: "Wired Magazine", link: "#" },
    ],
    content: `Chapter 1... This is the first page of the book. It introduces the main concepts... \n\nPage 2: Delving deeper into the subject... \n\nPage 3: An interesting anecdote... \n\nPage 4: The plot thickens... \n\nPage 5: A moment of revelation... \n\nPage 6: Exploring the consequences... \n\nPage 7: A new character is introduced... \n\nPage 8: The stakes are raised... \n\nPage 9: A difficult choice... \n\nPage 10: The chapter's turning point... \n\nPage 11: This content is for logged-in users only. Please purchase the book or subscribe to continue reading.`
  },
  {
    id: 2,
    title: "Innovate Your Soul",
    author: "Celso Jung",
    coverImage: "https://picsum.photos/id/24/800/1200",
    shortDescription: "A practical guide to applying the principles of innovation to your spiritual life.",
    longDescription: "What if you could disrupt your own life for the better? 'Innovate Your Soul' provides a unique framework for personal growth, applying battle-tested principles from the world of tech startups to the journey of self-discovery. Celso Jung offers practical exercises, insightful stories, and a clear roadmap to becoming the architect of your own spiritual evolution.",
    amazonLink: "https://www.amazon.com",
    awards: ["Best Self-Help Book 2022"],
    mediaMentions: [
        { source: "Forbes", link: "#" },
        { source: "TechCrunch", link: "#" },
    ],
    content: `Chapter 1... Welcome to 'Innovate Your Soul'. Let's begin the journey... \n\nPage 2: The core principles... \n\nPage 3: First exercise... \n\nPage 4: Case study... \n\nPage 5: Reflecting on progress... \n\nPage 6: Challenges and pitfalls... \n\nPage 7: Overcoming obstacles... \n\nPage 8: Advanced techniques... \n\nPage 9: Integration into daily life... \n\nPage 10: Preparing for the next level... \n\nPage 11: This content is for logged-in users only. Please purchase the book or subscribe to continue reading.`
  },
  {
    id: 3,
    title: "Digital Enlightenment",
    author: "Celso Jung",
    coverImage: "https://picsum.photos/id/42/800/1200",
    shortDescription: "Finding balance and purpose in an age of digital distraction.",
    longDescription: "In 'Digital Enlightenment,' Celso Jung tackles one of the most pressing issues of our time: how to maintain our inner peace and focus in a world saturated with technology. This book offers a compelling vision for a future where technology and spirituality are not at odds but are integrated to create a more conscious and connected human experience. Learn to use digital tools as instruments for enlightenment rather than sources of distraction.",
    amazonLink: "https://www.amazon.com",
    awards: [],
    mediaMentions: [
        { source: "The Guardian", link: "#" }
    ],
    content: `Introduction... In an era of constant connectivity... \n\nPage 2: The problem of digital noise... \n\nPage 3: The concept of digital mindfulness... \n\nPage 4: Practical steps... \n\nPage 5: A new perspective... \n\nPage 6: Building healthy habits... \n\nPage 7: Technology for good... \n\nPage 8: Case studies of digital harmony... \n\nPage 9: The future of consciousness... \n\nPage 10: Your personal action plan... \n\nPage 11: This content is for logged-in users only. Please purchase the book or subscribe to continue reading.`
  }
];
