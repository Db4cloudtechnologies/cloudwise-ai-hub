import { Brain, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-primary py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="flex justify-center items-center gap-2 mb-8">
            <Brain className="w-12 h-12 text-secondary animate-float" />
            <Cloud className="w-12 h-12 text-secondary animate-float" style={{ animationDelay: "1s" }} />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl animate-fade-down">
            Innovate with AI & Cloud Solutions
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Transform your business with cutting-edge AI and cloud services. 
            Expert consulting to drive your digital transformation forward.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg transform transition-all duration-300 hover:scale-105">
              Get Started
            </Button>
            <Button 
              variant="link" 
              className="text-white transition-all duration-300 hover:translate-x-2"
            >
              Learn More →
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary/20 animate-fade-in" />
    </div>
  );
};