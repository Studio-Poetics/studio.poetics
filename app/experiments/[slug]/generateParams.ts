// Sample experiments data
const experiments = {
  "india-blockchain-week": {
    title: "India Blockchain Week",
    description: "Our exploration of blockchain technology and its applications in design.",
    content:
      "During India Blockchain Week, we explored how blockchain technology can be used to create more transparent and equitable design processes...",
    image: "/placeholder.svg?key=experiment-1&height=800&width=1200&query=blockchain technology visualization",
  },
  "material-research": {
    title: "Material Research Project",
    description: "Exploring new sustainable materials for product design.",
    content:
      "Our material research project focuses on finding and testing new sustainable materials that can be used in product design...",
    image: "/placeholder.svg?key=experiment-2&height=800&width=1200&query=sustainable material samples",
  },
}

export function generateStaticParams() {
  return Object.keys(experiments).map((slug) => ({
    slug: slug,
  }))
}

export { experiments }
