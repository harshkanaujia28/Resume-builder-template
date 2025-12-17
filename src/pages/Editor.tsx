import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, ArrowLeft } from "lucide-react";
import EditorSidebar from "@/components/editor/EditorSidebar";
import EditorCanvas from "@/components/editor/EditorCanvas";
import EditorStylePanel from "@/components/editor/EditorStylePanel";
import PreviewModal from "@/components/editor/PreviewModal";

const colorPresets = [
  { name: "Indigo", primary: "#6366F1", secondary: "#A78BFA" },
  { name: "Emerald", primary: "#10B981", secondary: "#34D399" },
  { name: "Rose", primary: "#F43F5E", secondary: "#FB7185" },
  { name: "Amber", primary: "#F59E0B", secondary: "#FBBF24" },
  { name: "Cyan", primary: "#06B6D4", secondary: "#22D3EE" },
  { name: "Slate", primary: "#475569", secondary: "#64748B" },
];

const initialResumeData = {
  profile: {
    name: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    website: "",
    image: "",
  },
  summary: "",
  experience: [
    {
      id: "1",
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ],
  education: [
    {
      id: "1",
      school: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
    },
  ],
  skills: [] as string[],
};

const templateColorMap: Record<string, number> = {
  modern: 0,
  minimal: 5,
  elegant: 3,
  creative: 2,
  corporate: 4,
};

const Editor = () => {
  const [searchParams] = useSearchParams();
  const [activeSection, setActiveSection] = useState("profile");
  const [resumeData, setResumeData] = useState(initialResumeData);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(searchParams.get("template") || "modern");
  const [styleSettings, setStyleSettings] = useState({
    colorPreset: templateColorMap[searchParams.get("template") || "modern"] || 0,
    fontFamily: "inter",
    fontSize: 12,
    lineSpacing: 1.5,
  });

  useEffect(() => {
    const template = searchParams.get("template");
    if (template && templateColorMap[template] !== undefined) {
      setSelectedTemplate(template);
      setStyleSettings(prev => ({
        ...prev,
        colorPreset: templateColorMap[template],
      }));
    }
  }, [searchParams]);

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Top bar */}
      <header className="h-16 border-b border-border bg-card flex items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center shadow-soft">
              <FileText className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground hidden sm:block">ResumeAI</span>
          </Link>
          <div className="h-6 w-px bg-border hidden sm:block" />
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Home</span>
            </Button>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground hidden md:block capitalize">
            Template: {selectedTemplate}
          </span>
          <div className="h-4 w-px bg-border hidden md:block" />
          <span className="text-sm text-muted-foreground hidden md:block">Auto-saved</span>
          <Button variant="gradient" size="sm">
            Save Resume
          </Button>
        </div>
      </header>

      {/* Main editor area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left sidebar - Sections */}
        <EditorSidebar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        {/* Center - Editor canvas */}
        <div className="flex-1 bg-muted/30 overflow-hidden">
          <EditorCanvas
            activeSection={activeSection}
            resumeData={resumeData}
            onUpdateData={setResumeData}
          />
        </div>

        {/* Right sidebar - Style controls */}
        <div className="hidden lg:block">
          <EditorStylePanel
            settings={styleSettings}
            onSettingsChange={setStyleSettings}
            onPreview={() => setShowPreview(true)}
          />
        </div>
      </div>

      {/* Preview Modal */}
      <PreviewModal
        isOpen={showPreview}
        onClose={() => setShowPreview(false)}
        data={resumeData}
        colorPreset={colorPresets[styleSettings.colorPreset]}
      />
    </div>
  );
};

export default Editor;
