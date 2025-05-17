"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { TinaMarkdown } from "tinacms/dist/rich-text"

export default function JournalEntryClient({ entry }: { entry: any }) {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Link href="/journal" className="inline-flex items-center gap-2 mb-8 hover:underline">
          <ArrowLeft size={16} /> Back to Journal
        </Link>
      </motion.div>

      <article>
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-xs text-[#fb4e4e] mb-2">{entry.category}</div>
          <h1 className="text-4xl md:text-5xl font-normal mb-4">{entry.title}</h1>
          <div className="h-1 w-16 bg-[#fb4e4e] mb-4"></div>
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">
              {new Date(entry.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {entry.coverImage && (
            <div className="relative aspect-[16/9] mb-8">
              <Image src={entry.coverImage || "/placeholder.svg"} alt={entry.title} fill className="object-cover" />
            </div>
          )}
        </motion.div>

        <motion.div
          className="prose prose-lg max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <TinaMarkdown content={entry.body} />
        </motion.div>
      </article>
    </div>
  )
}
