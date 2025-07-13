import { Badge } from "@/components/ui/badge";
import { 
  SiPython, 
  SiJavascript, 
  SiAmazonaws, 
  SiDocker, 
  SiTerraform, 
  SiGithubactions,
  SiLinux,
  SiGit,
  SiApache,
  SiMysql,
  SiPhp
} from "react-icons/si";
import { Terminal, Database, Shield, Rocket, MonitorSpeaker, Users } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages & Scripting",
      skills: [
        { name: "Python", icon: SiPython, color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" },
        { name: "Bash", icon: Terminal, color: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200" },
        { name: "JavaScript", icon: SiJavascript, color: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200" },
        { name: "SQL", icon: Database, color: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200" },
      ]
    },
    {
      title: "Cloud & DevOps Tools",
      subtitle: "AWS Services",
      skills: [
        { name: "EC2", color: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200" },
        { name: "S3", color: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200" },
        { name: "VPC", color: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200" },
        { name: "IAM", color: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200" },
        { name: "CloudFront", color: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200" },
        { name: "ACM", color: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200" },
      ],
      automationTools: [
        { name: "GitHub Actions", icon: SiGithubactions, color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" },
        { name: "Docker", icon: SiDocker, color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" },
        { name: "Terraform", icon: SiTerraform, color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" },
        { name: "AWS CLI", color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" },
      ]
    },
    {
      title: "Infrastructure & Concepts",
      infrastructureSkills: [
        { name: "Linux", icon: SiLinux, color: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200" },
        { name: "Ubuntu", color: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200" },
        { name: "CentOS", color: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200" },
        { name: "Git", icon: SiGit, color: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200" },
        { name: "Shell Scripting", color: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200" },
      ],
      concepts: [
        { name: "CI/CD", icon: Rocket, color: "bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200" },
        { name: "IaC", color: "bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200" },
        { name: "Monitoring", icon: MonitorSpeaker, color: "bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200" },
        { name: "Agile", icon: Users, color: "bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Technologies and tools I work with
          </p>
        </div>
        
        <div className="grid gap-8">
          {/* Languages & Scripting */}
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
              Languages & Scripting
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillCategories[0].skills.map((skill) => (
                <Badge key={skill.name} variant="secondary" className={`px-4 py-2 ${skill.color}`}>
                  {skill.icon && <skill.icon className="mr-2 h-4 w-4" />}
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
              Cloud & DevOps Tools
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-slate-700 dark:text-slate-300 mb-3">AWS Services</h4>
                <div className="flex flex-wrap gap-2">
                  {skillCategories[1].skills.map((skill) => (
                    <Badge key={skill.name} variant="secondary" className={`px-3 py-1 text-sm ${skill.color}`}>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-slate-700 dark:text-slate-300 mb-3">Automation & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {skillCategories[1].automationTools.map((skill) => (
                    <Badge key={skill.name} variant="secondary" className={`px-3 py-1 text-sm ${skill.color}`}>
                      {skill.icon && <skill.icon className="mr-1 h-3 w-3" />}
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Infrastructure & Concepts */}
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
              Infrastructure & Concepts
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-slate-700 dark:text-slate-300 mb-3">Infrastructure</h4>
                <div className="flex flex-wrap gap-2">
                  {skillCategories[2].infrastructureSkills.map((skill) => (
                    <Badge key={skill.name} variant="secondary" className={`px-3 py-1 text-sm ${skill.color}`}>
                      {skill.icon && <skill.icon className="mr-1 h-3 w-3" />}
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-slate-700 dark:text-slate-300 mb-3">Concepts</h4>
                <div className="flex flex-wrap gap-2">
                  {skillCategories[2].concepts.map((skill) => (
                    <Badge key={skill.name} variant="secondary" className={`px-3 py-1 text-sm ${skill.color}`}>
                      {skill.icon && <skill.icon className="mr-1 h-3 w-3" />}
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
