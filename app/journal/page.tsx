import { client } from "@/tina/__generated__/client"
import { useTina } from "tinacms/dist/react"
import JournalClient from "@/components/journal-client"

export default async function JournalPage() {
  // Fetch journal entries from TinaCMS
  const journalResponse = await client.queries.journalConnection()
  const journal = useTina(journalResponse)
  const journalEntries = journal.data.journalConnection.edges.map((edge) => edge.node)

  return <JournalClient journalEntries={journalEntries} />
}
