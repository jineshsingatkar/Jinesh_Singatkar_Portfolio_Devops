import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award, Plus, ExternalLink, Cloud } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Sinhgad Institute of Management, Pune",
      duration: "2022 – 2024",
      score: "CGPA: 8.09 (74.21%)",
      icon: GraduationCap,
      iconColor: "text-blue-600 dark:text-blue-400",
      iconBg: "bg-blue-100 dark:bg-blue-900"
    },
    {
      degree: "B.Sc. in Computer Science",
      institution: "ACS College Navapur",
      duration: "2019 – 2022",
      score: "Percentage: 86.85%",
      icon: GraduationCap,
      iconColor: "text-green-600 dark:text-green-400",
      iconBg: "bg-green-100 dark:bg-green-900"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Academic background and professional certifications
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-slate-50 dark:bg-slate-800">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className={`p-3 ${edu.iconBg} rounded-lg mr-4`}>
                        <edu.icon className={`${edu.iconColor} text-xl h-6 w-6`} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {edu.degree}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300">
                          {edu.institution}
                        </p>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">
                          {edu.duration} | {edu.score}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
              Certifications
            </h3>
            <div className="space-y-6">
              {/* AWS Certification */}
              <Card className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-800">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg mr-4">
                      <Cloud className="text-orange-600 dark:text-orange-400 text-xl h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                        AWS Certified Cloud Practitioner
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 mb-3">
                        Amazon Web Services
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200">
                          <Award className="mr-1 h-3 w-3" />
                          Active
                        </Badge>
                        <button className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-medium flex items-center">
                          View Certificate
                          <ExternalLink className="ml-1 h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Placeholder for additional certifications */}
              <Card className="bg-slate-50 dark:bg-slate-800 border-2 border-dashed border-slate-300 dark:border-slate-700">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Plus className="mx-auto text-slate-400 text-2xl mb-3 h-8 w-8" />
                    <p className="text-slate-500 dark:text-slate-400">
                      Additional certifications coming soon
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
