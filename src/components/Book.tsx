import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download } from "lucide-react";

const Book = () => {
  const chapters = [
    "Chapter 1: Understanding the AI Revolution",
    "Chapter 2: From Data to Decisions",
    "Chapter 3: The Power of Language Models",
    "Chapter 4: AI in Healthcare and Society",
    "Chapter 5: Building Ethical AI for the Future",
  ];

  return (
    <section id="book" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            My Book
          </h2>
        </div>

        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-border/50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  AI and The Future of Automation
                </h3>
                <p className="text-primary font-medium">
                  by Aakash Sehrawat
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                A comprehensive exploration of how artificial intelligence, machine learning, and automation are reshaping industries and redefining human potential. 
                This book breaks down complex AI systems into simple concepts and real-world use cases, helping readers understand how automation can transform businesses and lives.
              </p>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Contents:</h4>
                <ul className="space-y-2">
                  {chapters.map((chapter, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary">•</span>
                      {chapter}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  className="bg-gradient-primary hover:shadow-glow"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Read Online
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-64 h-80 bg-gradient-primary rounded-lg shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-center p-8">
                  <BookOpen className="h-16 w-16 text-primary-foreground mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-primary-foreground mb-2">
                    AI and The Future
                  </h4>
                  <p className="text-sm text-primary-foreground/80">
                    Aakash Sehrawat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Book;
