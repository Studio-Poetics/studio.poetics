import { client } from "@/tina/__generated__/client"
import { useTina } from "tinacms/dist/react"
import JournalEntryClient from "@/components/journal-entry-client"

export default async function JournalEntryPage({ params }: { params: { slug: string } }) {
  // Fetch the journal entry from TinaCMS
  const journalResponse = await client.queries.journal({ relativePath: `${params.slug}.mdx` })
  const journalData = useTina(journalResponse)

  return <JournalEntryClient entry={journalData.data.journal} />
}

export async function generateStaticParams() {
  const journalResponse = await client.queries.journalConnection()
  const journal = await journalResponse.data.journalConnection.edges

  return journal.map((edge) => ({
    slug: edge.node._sys.filename,
  }))
}
