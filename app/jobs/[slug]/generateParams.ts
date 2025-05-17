// Sample jobs data
const jobs = {
  "senior-designer": {
    title: "Senior Designer",
    location: "Bangalore, India",
    postedDate: "2023-09-15",
    isOpen: true,
    description: "We're looking for a senior designer to join our team and lead design projects...",
  },
  "design-researcher": {
    title: "Design Researcher",
    location: "Remote",
    postedDate: "2023-10-05",
    isOpen: true,
    description: "We're seeking a design researcher to conduct user research and inform our design process...",
  },
}

export function generateStaticParams() {
  return Object.keys(jobs).map((slug) => ({
    slug: slug,
  }))
}

export { jobs }
