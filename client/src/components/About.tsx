export default function About() {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { category: "Design", items: ["Figma", "UI/UX Design", "Prototyping", "Design Systems"] },
    { category: "Tools", items: ["Git", "Webpack", "Vite", "Framer Motion"] },
    { category: "Other", items: ["Web Performance", "Accessibility", "SEO", "Responsive Design"] },
  ];

  return (
    <section id="about" className="section-spacing bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16">
          <div className="accent-line mb-4" />
          <h2 className="text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            I'm a passionate designer and developer with over 5 years of experience creating
            digital products that users love. My approach combines strategic thinking with
            meticulous execution to deliver exceptional results.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Bio */}
          <div className="space-y-6">
            <h3 className="text-foreground">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Starting as a self-taught developer, I've evolved into a full-stack designer and
              developer. I believe in creating experiences that are not just beautiful, but also
              functional and accessible to everyone.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not designing or coding, you'll find me exploring new design trends,
              contributing to open-source projects, or sharing knowledge with the community.
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            <h3 className="text-foreground">Highlights</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span className="text-muted-foreground">Led design systems for 10+ enterprise clients</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span className="text-muted-foreground">Mentored 20+ junior designers and developers</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span className="text-muted-foreground">Published articles on design and development</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span className="text-muted-foreground">Spoke at international tech conferences</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="space-y-4">
              <h4 className="font-semibold text-foreground">{skillGroup.category}</h4>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
