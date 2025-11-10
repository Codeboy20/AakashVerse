import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    "AZ-900: Microsoft Azure Fundamentals",
    "AI-900: Microsoft Azure AI Fundamentals",
    "DP-900: Microsoft Azure Data Fundamentals",
    "SC-900: Microsoft Security, Compliance, Identity Fundamentals",
    "AZ-104: Azure Administrator Associate",
    "Cisco Data Analytics Certification",
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-4 animate-fade-in-up">
          <p className="text-muted-foreground text-lg font-light tracking-wide">
            Presenting Aakash Sehrawat as
          </p>
        </div>
        <div className="text-center mb-12 animate-slide-3d">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.3)' }}>
            Learner
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional credentials validating my expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-flip-3d"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transform: 'perspective(1000px)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5), 0 5px 15px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-gradient-primary flex-shrink-0">
                  <Award className="h-6 w-6 text-primary-foreground" />
                </div>
                <p className="text-foreground font-medium">
                  {cert}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
