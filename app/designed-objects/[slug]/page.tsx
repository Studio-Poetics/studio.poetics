import ObjectDetailPage from "./client-page"

// This would typically come from a database or CMS
const designedObjects = {
  "ceramic-vessel-3": {
    title: "Ceramic Vessel No. 3",
    category: "ceramic",
    description:
      "This hand-crafted ceramic vessel is the result of our material exploration into subtle texture variations. Each piece is unique, with slight variations in texture and finish that catch and reflect light in different ways throughout the day. The minimalist form allows the material qualities to take center stage.",
    longDescription:
      "This hand-crafted ceramic vessel is the result of our material exploration into subtle texture variations. Each piece is unique, with slight variations in texture and finish that catch and reflect light in different ways throughout the day. The minimalist form allows the material qualities to take center stage.",
    details: [
      "Dimensions: 25cm x 15cm x 15cm",
      "Material: Stoneware clay with matte glaze",
      "Color: Off-white",
      "Care: Wipe clean with a damp cloth",
      "Handmade in our Bangalore studio",
    ],
    images: [
      "/placeholder.svg?key=do05n",
      "/placeholder.svg?key=6ot6a",
      "/placeholder.svg?key=wfq4m",
      "/placeholder.svg?key=lg543",
    ],
    relatedProducts: ["paper-light-shade", "linen-wall-hanging", "glass-carafe"],
  },
  "paper-light-shade": {
    title: "Paper Light Shade",
    category: "lighting",
    description: "A delicate paper light shade that creates a warm, ambient glow.",
    longDescription:
      "A delicate paper light shade that creates a warm, ambient glow. Handcrafted from sustainable materials.",
    details: [
      "Dimensions: 30cm diameter",
      "Material: Handmade paper",
      "Color: Natural white",
      "Care: Dust gently with a soft cloth",
      "Handmade in our Bangalore studio",
    ],
    images: ["/placeholder.svg?key=uxz35", "/placeholder.svg?key=x00s9"],
    relatedProducts: ["ceramic-vessel-3", "linen-wall-hanging", "glass-carafe"],
  },
  "linen-wall-hanging": {
    title: "Linen Wall Hanging",
    category: "textile",
    description: "A handwoven linen wall hanging with natural dyes and textures.",
    longDescription:
      "A handwoven linen wall hanging with natural dyes and textures. Each piece tells a story through its unique patterns.",
    details: [
      "Dimensions: 100cm x 150cm",
      "Material: Handwoven linen",
      "Color: Natural dyes",
      "Care: Spot clean only",
      "Handmade in our Bangalore studio",
    ],
    images: ["/placeholder.svg?key=ogsfr", "/placeholder.svg?key=espd3"],
    relatedProducts: ["ceramic-vessel-3", "paper-light-shade", "wooden-tray-set"],
  },
  "wooden-tray-set": {
    title: "Wooden Tray Set",
    category: "wood",
    description: "A set of handcrafted wooden trays in various sizes.",
    longDescription:
      "A set of handcrafted wooden trays in various sizes. Made from sustainable local wood with natural finishes.",
    details: [
      "Dimensions: Small (20x30cm), Medium (30x40cm), Large (40x50cm)",
      "Material: Sustainable local wood",
      "Color: Natural wood finish",
      "Care: Wipe clean with damp cloth, oil occasionally",
      "Handmade in our Bangalore studio",
    ],
    images: ["/placeholder.svg?key=7a02b", "/placeholder.svg?key=i162w"],
    relatedProducts: ["ceramic-vessel-3", "glass-carafe", "linen-wall-hanging"],
  },
  "glass-carafe": {
    title: "Glass Carafe",
    category: "glass",
    description: "A handblown glass carafe for water or wine.",
    longDescription:
      "A handblown glass carafe for water or wine. Each piece is unique with subtle variations in the glass.",
    details: [
      "Dimensions: 25cm height, 10cm diameter",
      "Material: Handblown glass",
      "Color: Clear with slight blue tint",
      "Care: Dishwasher safe",
      "Handmade in our Bangalore studio",
    ],
    images: [
      "/placeholder.svg?key=5pdyr",
      "/placeholder.svg?key=glass-2&height=800&width=800&query=glass carafe detail",
    ],
    relatedProducts: ["ceramic-vessel-3", "wooden-tray-set", "paper-light-shade"],
  },
}

export function generateStaticParams() {
  return Object.keys(designedObjects).map((slug) => ({
    slug: slug,
  }))
}

export default function Page({ params }: { params: { slug: string } }) {
  return <ObjectDetailPage params={params} designedObjects={designedObjects} />
}
