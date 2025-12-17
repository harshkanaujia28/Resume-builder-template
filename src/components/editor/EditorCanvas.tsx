import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, GripVertical, Camera } from "lucide-react";

interface ResumeData {
  profile: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    website: string;
    image: string;
  };
  summary: string;
  experience: Array<{
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  education: Array<{
    id: string;
    school: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
  }>;
  skills: string[];
}

interface EditorCanvasProps {
  activeSection: string;
  resumeData: ResumeData;
  onUpdateData: (data: ResumeData) => void;
}

const EditorCanvas = ({ activeSection, resumeData, onUpdateData }: EditorCanvasProps) => {
  const updateProfile = (field: string, value: string) => {
    onUpdateData({
      ...resumeData,
      profile: { ...resumeData.profile, [field]: value },
    });
  };

  const updateSummary = (value: string) => {
    onUpdateData({ ...resumeData, summary: value });
  };

  const addExperience = () => {
    onUpdateData({
      ...resumeData,
      experience: [
        ...resumeData.experience,
        {
          id: Date.now().toString(),
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    });
  };

  const updateExperience = (id: string, field: string, value: string) => {
    onUpdateData({
      ...resumeData,
      experience: resumeData.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    });
  };

  const removeExperience = (id: string) => {
    onUpdateData({
      ...resumeData,
      experience: resumeData.experience.filter((exp) => exp.id !== id),
    });
  };

  const addEducation = () => {
    onUpdateData({
      ...resumeData,
      education: [
        ...resumeData.education,
        {
          id: Date.now().toString(),
          school: "",
          degree: "",
          field: "",
          startDate: "",
          endDate: "",
        },
      ],
    });
  };

  const updateEducation = (id: string, field: string, value: string) => {
    onUpdateData({
      ...resumeData,
      education: resumeData.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    });
  };

  const removeEducation = (id: string) => {
    onUpdateData({
      ...resumeData,
      education: resumeData.education.filter((edu) => edu.id !== id),
    });
  };

  const renderProfileSection = () => (
    <div className="space-y-6">
      {/* Profile image */}
      <div className="flex items-center gap-6">
        <div className="relative">
          <div className="w-24 h-24 rounded-2xl bg-muted flex items-center justify-center overflow-hidden">
            {resumeData.profile.image ? (
              <img
                src={resumeData.profile.image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <Camera className="w-8 h-8 text-muted-foreground" />
            )}
          </div>
          <Button
            variant="gradient"
            size="icon"
            className="absolute -bottom-2 -right-2 w-8 h-8"
          >
            <Camera className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground mb-1">Profile Photo</h3>
          <p className="text-sm text-muted-foreground">
            Upload a professional photo for your resume
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Full Name</label>
          <Input
            placeholder="John Doe"
            value={resumeData.profile.name}
            onChange={(e) => updateProfile("name", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Job Title</label>
          <Input
            placeholder="Senior Software Engineer"
            value={resumeData.profile.title}
            onChange={(e) => updateProfile("title", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Email</label>
          <Input
            type="email"
            placeholder="john@example.com"
            value={resumeData.profile.email}
            onChange={(e) => updateProfile("email", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Phone</label>
          <Input
            placeholder="+1 (555) 123-4567"
            value={resumeData.profile.phone}
            onChange={(e) => updateProfile("phone", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Location</label>
          <Input
            placeholder="San Francisco, CA"
            value={resumeData.profile.location}
            onChange={(e) => updateProfile("location", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Website</label>
          <Input
            placeholder="https://johndoe.com"
            value={resumeData.profile.website}
            onChange={(e) => updateProfile("website", e.target.value)}
          />
        </div>
      </div>
    </div>
  );

  const renderSummarySection = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Professional Summary</label>
        <Textarea
          placeholder="Write a brief summary of your professional background, key achievements, and career goals..."
          value={resumeData.summary}
          onChange={(e) => updateSummary(e.target.value)}
          rows={6}
          className="resize-none"
        />
      </div>
      <Button variant="outline" size="sm" className="gap-2">
        <span className="text-gradient font-semibold">✨ AI Suggest</span>
      </Button>
    </div>
  );

  const renderExperienceSection = () => (
    <div className="space-y-6">
      {resumeData.experience.map((exp, index) => (
        <div
          key={exp.id}
          className="p-6 rounded-2xl bg-muted/50 border border-border/50 space-y-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GripVertical className="w-4 h-4 text-muted-foreground cursor-grab" />
              <span className="font-semibold text-foreground">Experience {index + 1}</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeExperience(exp.id)}
              className="text-destructive hover:bg-destructive/10"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Company</label>
              <Input
                placeholder="Google"
                value={exp.company}
                onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Position</label>
              <Input
                placeholder="Software Engineer"
                value={exp.position}
                onChange={(e) => updateExperience(exp.id, "position", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Start Date</label>
              <Input
                placeholder="Jan 2020"
                value={exp.startDate}
                onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">End Date</label>
              <Input
                placeholder="Present"
                value={exp.endDate}
                onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Description</label>
            <Textarea
              placeholder="Describe your responsibilities and achievements..."
              value={exp.description}
              onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
              rows={4}
              className="resize-none"
            />
          </div>
        </div>
      ))}
      <Button variant="outline" onClick={addExperience} className="w-full gap-2">
        <Plus className="w-4 h-4" />
        Add Experience
      </Button>
    </div>
  );

  const renderEducationSection = () => (
    <div className="space-y-6">
      {resumeData.education.map((edu, index) => (
        <div
          key={edu.id}
          className="p-6 rounded-2xl bg-muted/50 border border-border/50 space-y-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GripVertical className="w-4 h-4 text-muted-foreground cursor-grab" />
              <span className="font-semibold text-foreground">Education {index + 1}</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeEducation(edu.id)}
              className="text-destructive hover:bg-destructive/10"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">School</label>
              <Input
                placeholder="Stanford University"
                value={edu.school}
                onChange={(e) => updateEducation(edu.id, "school", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Degree</label>
              <Input
                placeholder="Bachelor of Science"
                value={edu.degree}
                onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Field of Study</label>
              <Input
                placeholder="Computer Science"
                value={edu.field}
                onChange={(e) => updateEducation(edu.id, "field", e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Start</label>
                <Input
                  placeholder="2016"
                  value={edu.startDate}
                  onChange={(e) => updateEducation(edu.id, "startDate", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">End</label>
                <Input
                  placeholder="2020"
                  value={edu.endDate}
                  onChange={(e) => updateEducation(edu.id, "endDate", e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      <Button variant="outline" onClick={addEducation} className="w-full gap-2">
        <Plus className="w-4 h-4" />
        Add Education
      </Button>
    </div>
  );

  const renderSkillsSection = () => (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Add your skills separated by commas or press Enter after each skill.
      </p>
      <Textarea
        placeholder="JavaScript, React, TypeScript, Node.js, Python..."
        value={resumeData.skills.join(", ")}
        onChange={(e) =>
          onUpdateData({
            ...resumeData,
            skills: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
          })
        }
        rows={4}
      />
      <div className="flex flex-wrap gap-2">
        {resumeData.skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  const renderDefaultSection = () => (
    <div className="flex items-center justify-center h-64 text-muted-foreground">
      <p>This section is coming soon...</p>
    </div>
  );

  const sectionTitles: Record<string, string> = {
    profile: "Personal Information",
    summary: "Professional Summary",
    experience: "Work Experience",
    education: "Education",
    skills: "Skills",
    projects: "Projects",
    certifications: "Certifications",
    languages: "Languages",
    social: "Social Links",
  };

  return (
    <div className="h-full overflow-y-auto p-6 lg:p-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          {sectionTitles[activeSection] || "Section"}
        </h2>
        
        {activeSection === "profile" && renderProfileSection()}
        {activeSection === "summary" && renderSummarySection()}
        {activeSection === "experience" && renderExperienceSection()}
        {activeSection === "education" && renderEducationSection()}
        {activeSection === "skills" && renderSkillsSection()}
        {!["profile", "summary", "experience", "education", "skills"].includes(activeSection) &&
          renderDefaultSection()}
      </div>
    </div>
  );
};

export default EditorCanvas;
