import { Button } from "@/components/ui/button";
import { Mail, Download, Linkedin, Github, Code } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="mb-6">
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Jinesh</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                Enthusiastic DevOps Engineer specializing in AWS, Docker, Terraform, and CI/CD automation. 
                Passionate about building scalable cloud infrastructure and streamlining deployment processes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button onClick={scrollToContact} className="bg-blue-600 hover:bg-blue-700">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
                <Button variant="outline" className="border-slate-300 dark:border-slate-700">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="rounded-lg shadow-md">
                  <Linkedin className="h-5 w-5 text-blue-600" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-lg shadow-md">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-lg shadow-md">
                  <Code className="h-5 w-5 text-orange-600" />
                </Button>
              </div>
            </div>
          </div>
          <div className="animate-float">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
                alt="Professional headshot" 
                className="w-80 h-80 rounded-full mx-auto shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center animate-pulse">
                <i className="fas fa-cloud text-white text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
