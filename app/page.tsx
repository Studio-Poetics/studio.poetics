"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { client } from "@/tina/__generated__/client"
import { useTina } from "tinacms/dist/react"
import HomeClient from "@/components/home-client"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

export default async function Home() {
  // Fetch settings from TinaCMS
  const settingsResponse = await client.queries.settings({ relativePath: "main.json" })
  const settings = useTina(settingsResponse)

  // Fetch journal entries
  const journalResponse = await client.queries.journalConnection()
  const journal = useTina(journalResponse)
  const journalEntries = journal.data.journalConnection.edges.map((edge) => edge.node)

  // Fetch experiments
  const experimentsResponse = await client.queries.experimentConnection()
  const experiments = useTina(experimentsResponse)
  const caseStudies = experiments.data.experimentConnection.edges.map((edge) => edge.node)

  // Pass the data to the client component
  return (
    <HomeClient homeSettings={settings.data.settings.home} journalEntries={journalEntries} caseStudies={caseStudies} />
  )
}
