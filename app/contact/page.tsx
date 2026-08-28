export default function Contact() {
  return (
    <div className="py-20 max-w-3xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
      <p className="text-lg text-muted-foreground leading-relaxed">
        I'm always open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to drop me a message.
      </p>
      
      <div className="bg-card border rounded-lg p-6 mt-8">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <ul className="space-y-4">
          <li>
            <strong>Email:</strong> <a href="mailto:zuhaibrashid01@gmail.com" className="text-primary hover:underline">hello@zuhaibrashid.com</a>
          </li>
          <li>
            <strong>Twitter:</strong> <a href="https://x.com/xuhaib_x9" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@xuhaib_x9</a>
          </li>
          <li>
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/zuhaib-rashid-661345318/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Zuhaib Rashid</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
