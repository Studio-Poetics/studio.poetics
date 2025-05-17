// Sample observations data
const observations = {
  "urban-patterns": {
    title: "Urban Patterns",
    date: "2023-08-15",
    content: "Observing the patterns that emerge in urban environments...",
    image: "/placeholder.svg?key=co66g",
  },
  "natural-textures": {
    title: "Natural Textures",
    date: "2023-09-22",
    content: "Exploring the rich textures found in natural environments...",
    image: "/placeholder.svg?key=0x62n",
  },
}

export function generateStaticParams() {
  return Object.keys(observations).map((slug) => ({
    slug: slug,
  }))
}

export { observations }
