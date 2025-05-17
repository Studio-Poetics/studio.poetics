"use client"

import type { ReactNode } from "react"
import { TinaEditProvider } from "tinacms/dist/edit-state"

export function TinaClientWrapper({ children }: { children: ReactNode }) {
  return <TinaEditProvider editMode={<EditMode />}>{children}</TinaEditProvider>
}

function EditMode() {
  return <div>Loading TinaCMS editor...</div>
}
