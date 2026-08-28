export default function About() {
  return (
    <div className="py-20 max-w-3xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
      <div className="prose dark:prose-invert">
        <p className="text-lg text-muted-foreground leading-relaxed">
          I am Zuhaib Rashid, a Full Stack Developer based in Srinagar, Kashmir.
          I specialize in building modern, accessible, and high-performance web applications using React, Next.js, TypeScript, and Node.js.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">My Journey</h2>
        <p className="text-muted-foreground leading-relaxed">
          With a strong passion for continuous learning and a deep interest in modern web architecture, I have built several projects ranging from healthcare platforms to portfolio websites. My focus is always on delivering seamless user experiences combined with scalable backend services.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Skills & Technologies</h2>
        <ul className="list-disc pl-6 text-muted-foreground">
          <li><strong>Frontend:</strong> React.js, Next.js, TypeScript, TailwindCSS</li>
          <li><strong>Backend:</strong> Node.js, Express.js, MongoDB</li>
          <li><strong>Tools & Practices:</strong> Git, Accessibility, SEO, WebMCP</li>
        </ul>
      </div>
    </div>
  );
}
