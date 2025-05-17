// Sample exhibitions data
const exhibitions = {
  "material-matters": {
    title: "Material Matters",
    startDate: "2023-06-15",
    endDate: "2023-08-30",
    location: "Design Museum, London",
    description: "An exhibition exploring the relationship between materials and meaning in design...",
    image: "/placeholder.svg?key=2rpuk",
  },
  "poetics-of-space": {
    title: "Poetics of Space",
    startDate: "2023-09-10",
    endDate: "2023-11-20",
    location: "Gallery of Modern Art, Mumbai",
    description: "An immersive exhibition examining how space shapes our experience and perception...",
    image: "/placeholder.svg?key=3k48b",
  },
}

export function generateStaticParams() {
  return Object.keys(exhibitions).map((slug) => ({
    slug: slug,
  }))
}

export { exhibitions }
