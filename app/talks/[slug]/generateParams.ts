// Sample talks data
const talks = {
  "design-for-meaning": {
    title: "Design for Meaning",
    date: "2023-07-15",
    venue: "Design Conference, Berlin",
    description: "A talk exploring how designers can create more meaningful experiences through thoughtful design...",
    image: "/placeholder.svg?key=talk-1&height=800&width=1200&query=design conference speaker",
    videoUrl: "https://example.com/talks/design-for-meaning",
  },
  "future-of-materials": {
    title: "The Future of Materials",
    date: "2023-08-22",
    venue: "Material Innovation Forum, Singapore",
    description: "A presentation on emerging materials and their potential impact on design and sustainability...",
    image: "/placeholder.svg?key=talk-2&height=800&width=1200&query=materials innovation conference",
    videoUrl: "https://example.com/talks/future-of-materials",
  },
}

export function generateStaticParams() {
  return Object.keys(talks).map((slug) => ({
    slug: slug,
  }))
}

export { talks }
