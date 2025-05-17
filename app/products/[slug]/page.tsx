// Sample products data with related products
const products = {
  "ceramic-vessel-3": {
    title: "Ceramic Vessel No. 3",
    price: "8,500",
    description: "Hand-crafted ceramic vessel with subtle texture variations.",
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
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
    ],
    relatedProducts: ["paper-light-shade", "linen-wall-hanging", "glass-carafe"],
    relatedProductsData: {
      "paper-light-shade": {
        title: "Paper Light Shade",
        price: "5,200",
        image: "/placeholder.svg?height=800&width=800",
      },
      "linen-wall-hanging": {
        title: "Linen Wall Hanging",
        price: "7,800",
        image: "/placeholder.svg?height=800&width=800",
      },
      "glass-carafe": {
        title: "Glass Carafe",
        price: "4,800",
        image: "/placeholder.svg?height=800&width=800",
      },
    },
  },
  "paper-light-shade": {
    title: "Paper Light Shade",
    price: "5,200",
    description: "Handmade paper light shade with folded geometric pattern.",
    longDescription:
      "Our paper light shade is the culmination of extensive experimentation with folding techniques and light diffusion. The geometric pattern creates a play of light and shadow that transforms any space. Each shade is meticulously hand-folded from high-quality, acid-free paper.",
    details: [
      "Dimensions: 40cm diameter x 30cm height",
      "Material: Acid-free paper",
      "Color: Natural white",
      "Includes: Ceiling fixture and 2m cord",
      "Handmade in our Bangalore studio",
    ],
    images: [
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
    ],
    relatedProducts: ["ceramic-vessel-3", "wooden-tray-set", "glass-carafe"],
    relatedProductsData: {
      "ceramic-vessel-3": {
        title: "Ceramic Vessel No. 3",
        price: "8,500",
        image: "/placeholder.svg?height=800&width=800",
      },
      "wooden-tray-set": {
        title: "Wooden Tray Set",
        price: "6,200",
        image: "/placeholder.svg?height=800&width=800",
      },
      "glass-carafe": {
        title: "Glass Carafe",
        price: "4,800",
        image: "/placeholder.svg?height=800&width=800",
      },
    },
  },
  "linen-wall-hanging": {
    title: "Linen Wall Hanging",
    price: "7,800",
    description: "Handwoven linen wall hanging with natural dyes.",
    longDescription:
      "Our handwoven linen wall hanging is created using traditional techniques and natural dyes. Each piece features subtle variations in texture and color that make it truly unique. The minimalist design allows the beauty of the natural materials to shine through.",
    details: [
      "Dimensions: 120cm x 80cm",
      "Material: Handwoven linen",
      "Color: Natural dyes",
      "Includes: Wooden hanging rod",
      "Handmade in our Bangalore studio",
    ],
    images: [
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
    ],
    relatedProducts: ["ceramic-vessel-3", "paper-light-shade", "wooden-tray-set"],
    relatedProductsData: {
      "ceramic-vessel-3": {
        title: "Ceramic Vessel No. 3",
        price: "8,500",
        image: "/placeholder.svg?height=800&width=800",
      },
      "paper-light-shade": {
        title: "Paper Light Shade",
        price: "5,200",
        image: "/placeholder.svg?height=800&width=800",
      },
      "wooden-tray-set": {
        title: "Wooden Tray Set",
        price: "6,200",
        image: "/placeholder.svg?height=800&width=800",
      },
    },
  },
  "wooden-tray-set": {
    title: "Wooden Tray Set",
    price: "6,200",
    description: "Set of three handcrafted wooden trays.",
    longDescription:
      "Our wooden tray set includes three handcrafted trays in different sizes, perfect for serving or display. Each tray is made from sustainably sourced wood and finished with natural oils to enhance the grain and protect the surface.",
    details: [
      "Dimensions: Small (20x30cm), Medium (30x40cm), Large (40x50cm)",
      "Material: Sustainably sourced wood",
      "Color: Natural wood finish",
      "Care: Wipe clean with damp cloth, oil occasionally",
      "Handmade in our Bangalore studio",
    ],
    images: [
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
    ],
    relatedProducts: ["ceramic-vessel-3", "glass-carafe", "linen-wall-hanging"],
    relatedProductsData: {
      "ceramic-vessel-3": {
        title: "Ceramic Vessel No. 3",
        price: "8,500",
        image: "/placeholder.svg?height=800&width=800",
      },
      "glass-carafe": {
        title: "Glass Carafe",
        price: "4,800",
        image: "/placeholder.svg?height=800&width=800",
      },
      "linen-wall-hanging": {
        title: "Linen Wall Hanging",
        price: "7,800",
        image: "/placeholder.svg?height=800&width=800",
      },
    },
  },
  "glass-carafe": {
    title: "Glass Carafe",
    price: "4,800",
    description: "Handblown glass carafe for water or wine.",
    longDescription:
      "Our handblown glass carafe is perfect for serving water or wine. Each piece is crafted by skilled artisans and features subtle variations that make it unique. The simple, elegant form is designed to be both beautiful and functional.",
    details: [
      "Dimensions: 25cm height, 10cm diameter",
      "Material: Handblown glass",
      "Color: Clear with slight blue tint",
      "Care: Dishwasher safe",
      "Handmade in our Bangalore studio",
    ],
    images: [
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
    ],
    relatedProducts: ["ceramic-vessel-3", "wooden-tray-set", "paper-light-shade"],
    relatedProductsData: {
      "ceramic-vessel-3": {
        title: "Ceramic Vessel No. 3",
        price: "8,500",
        image: "/placeholder.svg?height=800&width=800",
      },
      "wooden-tray-set": {
        title: "Wooden Tray Set",
        price: "6,200",
        image: "/placeholder.svg?height=800&width=800",
      },
      "paper-light-shade": {
        title: "Paper Light Shade",
        price: "5,200",
        image: "/placeholder.svg?height=800&width=800",
      },
    },
  },
}

export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug: slug,
  }))
}

import ProductDetailClient from "./client-page"

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products]

  if (!product) {
    return <div>Product not found</div>
  }

  return <ProductDetailClient product={product} slug={params.slug} />
}
