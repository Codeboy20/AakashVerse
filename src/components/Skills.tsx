import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming",
      skills: ["Python", "SQL", "Java", "C"],
    },
    {
      category: "AI & ML",
      skills: ["NLP", "LLMs", "Deep Learning", "PyTorch", "TensorFlow"],
    },
    {
      category: "Frameworks",
      skills: ["FastAPI", "Flask", "Django", "LangChain"],
    },
    {
      category: "Cloud Platforms",
      skills: ["Microsoft Azure", "AWS"],
    },
    {
      category: "Data & Visualization",
      skills: ["ETL", "Power BI", "Seaborn", "Matplotlib"],
    },
    {
      category: "DevOps & Tools",
      skills: ["Docker", "Git", "MLflow", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg">
            Tools & technologies I use to build intelligent systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((item, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {item.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-secondary rounded-full text-sm text-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
