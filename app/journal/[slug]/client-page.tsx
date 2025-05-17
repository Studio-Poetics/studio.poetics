"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface JournalEntry {
  title: string
  date: string
  author: string
  category: string
  image: string
  content: string[]
}

export default function JournalEntryClient({ entry }: { entry: JournalEntry }) {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
      <Link href="/journal" className="inline-flex items-center gap-2 mb-8 hover:underline">
        <ArrowLeft size={16} /> Back to Journal
      </Link>

      <article>
        <div className="mb-8">
          <div className="text-xs text-[hsl(var(--accent))] mb-2">{entry.category}</div>
          <h1 className="text-4xl md:text-5xl font-normal mb-4">{entry.title}</h1>
          <div className="accent-bar"></div>
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">{entry.date}</p>
            <p className="text-sm text-gray-600">By {entry.author}</p>
          </div>
        </div>

        <div className="relative aspect-[16/9] mb-8">
          <Image src={entry.image || "/placeholder.svg"} alt={entry.title} fill className="object-cover" />
        </div>

        <div className="prose prose-lg max-w-none">
          {entry.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  )
}
