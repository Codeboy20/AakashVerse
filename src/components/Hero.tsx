import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero" style={{ boxShadow: 'inset 0 0 100px rgba(0,0,0,0.5)' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ boxShadow: '0 0 100px rgba(255,255,255,0.1)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s", boxShadow: '0 0 100px rgba(255,255,255,0.1)' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-slide-3d">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
              Aakash Sehrawat
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              AI Engineer | Backend Developer | LangChain | Azure | FastAPI | Python
            </p>
          </div>

          <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Building intelligent systems that think, learn, and scale.
          </p>

          <div className="prose prose-invert max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <p className="text-muted-foreground">
              I'm Aakash Sehrawat, an AI & Software Engineer passionate about turning complex ideas into scalable, data-driven systems.
              I specialize in <span className="text-primary font-semibold">FastAPI, LangChain, Azure, and Deep Learning</span>, building real-world solutions that combine automation, AI, and seamless user experience.
              From developing LLM-powered assistants that understand enterprise data to crafting AI-driven healthcare platforms, 
              I'm focused on making technology more human, efficient, and impactful.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center pt-4 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              asChild
            >
              <a href="#projects">
                🚀 Explore Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <a href="#contact">
                💬 Contact Me
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              asChild
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                📄 View Resume
              </a>
            </Button>
          </div>

          <div className="flex gap-6 justify-center pt-8 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <a 
              href="https://github.com/Aakash091-dark" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/akashhrsehrawat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:aakashhssehrawat@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
