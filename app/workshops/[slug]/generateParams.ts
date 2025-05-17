// Sample workshops data
const workshops = {
  "material-exploration": {
    title: "Material Exploration Workshop",
    date: "2023-10-15",
    location: "Bangalore Design Center",
    description: "A hands-on workshop exploring various materials and their properties...",
    image: "/placeholder.svg?key=kul7f",
  },
  "design-thinking": {
    title: "Design Thinking Masterclass",
    date: "2023-11-22",
    location: "Mumbai Creative Hub",
    description: "Learn the principles of design thinking and how to apply them to solve complex problems...",
    image: "/design-thinking-workshop.png",
  },
}

export function generateStaticParams() {
  return Object.keys(workshops).map((slug) => ({
    slug: slug,
  }))
}

export { workshops }
