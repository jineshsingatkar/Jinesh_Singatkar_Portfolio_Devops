import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Server, 
  Cloud, 
  Database, 
  Settings, 
  GitBranch, 
  TrendingUp,
  Globe,
  Shield,
  Rocket,
  Boxes
} from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Linux Server Health Monitoring Script",
      description: "Created a comprehensive Bash script to monitor CPU, memory, disk usage, and running processes. Automated periodic health checks and alert logs using cron jobs.",
      icon: Server,
      iconColor: "text-blue-600 dark:text-blue-400",
      iconBg: "bg-blue-100 dark:bg-blue-900",
      technologies: ["Bash", "Linux", "Cron"],
      techColors: [
        "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
        "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
        "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"
      ],
      highlight: "80% improved observability",
      highlightIcon: TrendingUp
    },
    {
      title: "Static Website Hosting on AWS",
      description: "Hosted a static portfolio website using S3 and distributed via CloudFront. Configured SSL certificates (ACM), public access policies, and integrated GitHub Actions for automated deployment.",
      icon: Cloud,
      iconColor: "text-orange-600 dark:text-orange-400",
      iconBg: "bg-orange-100 dark:bg-orange-900",
      technologies: ["AWS S3", "CloudFront", "GitHub Actions"],
      techColors: [
        "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
        "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
        "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
      ],
      highlight: "Global CDN deployment",
      highlightIcon: Globe
    },
    {
      title: "LAMP Stack Deployment on EC2",
      description: "Set up a custom VPC for secure backend networking. Provisioned and configured EC2 instances with public/private subnets. Automated Apache, MySQL, and PHP installation using shell scripting.",
      icon: Database,
      iconColor: "text-purple-600 dark:text-purple-400",
      iconBg: "bg-purple-100 dark:bg-purple-900",
      technologies: ["EC2", "VPC", "Apache", "MySQL"],
      techColors: [
        "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
        "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
        "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
        "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"
      ],
      highlight: "Secure network architecture",
      highlightIcon: Shield
    },
    {
      title: "CI/CD Pipeline with GitHub Actions",
      description: "Developed a complete CI/CD pipeline for a Node.js application using GitHub Actions. Dockerized the application and pushed container images to DockerHub with automated deployment to EC2.",
      icon: Settings,
      iconColor: "text-green-600 dark:text-green-400",
      iconBg: "bg-green-100 dark:bg-green-900",
      technologies: ["GitHub Actions", "Docker", "Node.js"],
      techColors: [
        "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
        "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
        "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
      ],
      highlight: "Automated deployments",
      highlightIcon: Rocket
    },
    {
      title: "AWS Infrastructure Automation with Terraform",
      description: "Wrote comprehensive Terraform code to provision complete AWS infrastructure including VPC, subnets, EC2 instances, and security groups. Applied modular, reusable infrastructure as code using variable files and Git for version control.",
      icon: GitBranch,
      iconColor: "text-indigo-600 dark:text-indigo-400",
      iconBg: "bg-indigo-100 dark:bg-indigo-900",
      technologies: ["Terraform", "AWS", "IaC", "Git"],
      techColors: [
        "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200",
        "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
        "bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200",
        "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
      ],
      highlight: "Modular infrastructure design",
      highlightIcon: Boxes,
      isFullWidth: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Hands-on DevOps projects showcasing my technical expertise
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`hover:shadow-xl transition-shadow ${project.isFullWidth ? 'lg:col-span-2' : ''}`}
            >
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className={`p-3 ${project.iconBg} rounded-lg mr-4`}>
                    <project.icon className={`${project.iconColor} text-xl h-6 w-6`} />
                  </div>
                  <CardTitle className="text-xl text-slate-900 dark:text-white">
                    {project.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className={`px-3 py-1 text-sm ${project.techColors[techIndex]}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500 dark:text-slate-400 flex items-center">
                    <project.highlightIcon className="mr-1 h-4 w-4" />
                    {project.highlight}
                  </span>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
