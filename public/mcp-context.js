if (typeof document !== 'undefined') {
  document.modelContext = {
    tools: [{ name: "navigate", description: "Navigate the portfolio site." }]
  };
}
if (typeof navigator !== 'undefined') {
  navigator.modelContext = {
    tools: [{ name: "navigate", description: "Navigate the portfolio site." }]
  };
}
