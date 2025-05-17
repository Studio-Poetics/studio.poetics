"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function JournalClient({ journalEntries }: { journalEntries: any[] }) {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <motion.h1
        className="text-4xl md:text-5xl font-normal mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Journal
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {journalEntries.map((entry, index) => (
          <motion.div
            key={entry._sys.filename}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <Link href={`/journal/${entry._sys.filename}`}>
              <div className="relative aspect-[4/3] mb-4 overflow-hidden">
                <Image
                  src={entry.coverImage || "/placeholder.svg"}
                  alt={entry.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <div className="text-xs text-[#fb4e4e] mb-2">{entry.category}</div>
                <h2 className="text-xl font-normal mb-2 group-hover:text-[#fb4e4e] transition-colors">{entry.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{entry.excerpt}</p>
                <div className="text-xs text-gray-500">
                  {new Date(entry.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
