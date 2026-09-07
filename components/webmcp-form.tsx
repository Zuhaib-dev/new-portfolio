"use client"

import { useState } from "react"

export function WebMCPForm() {
  const [pending, setPending] = useState(false)

  return (
    <form 
      style={{ display: 'none' }} 
      data-tool="site_search" 
      data-tool-description="Search the site" 
      action="/search" 
      method="GET" 
      aria-hidden="true"
      onSubmit={async (e) => {
        setPending(true)
        // allow native submission
      }}
    >
      <input 
        type="text" 
        name="q" 
        aria-label="Search query" 
        required 
        minLength={3} 
        maxLength={100} 
      />
      <button type="submit" disabled={pending} aria-disabled={pending}>
        {pending ? "Searching..." : "Search"}
      </button>
    </form>
  )
}
