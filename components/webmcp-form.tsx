"use client"

import { useFormStatus } from "react-dom"

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button type="submit" disabled={pending} aria-disabled={pending}>
      {pending ? "Searching..." : "Search"}
    </button>
  )
}

export function WebMCPForm() {
  return (
    <form 
      style={{ display: 'none' }} 
      data-tool="site_search" 
      data-tool-description="Search the site" 
      action="/search" 
      method="GET" 
      aria-hidden="true"
    >
      <input 
        type="text" 
        name="q" 
        aria-label="Search query" 
        required 
        minLength={3} 
        maxLength={100} 
      />
      <SubmitButton />
    </form>
  )
}
