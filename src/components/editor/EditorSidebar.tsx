import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  FileText,
  Briefcase,
  GraduationCap,
  Wrench,
  FolderKanban,
  Award,
  Globe,
  Link2,
  ChevronLeft,
  ChevronRight,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sections = [
  { id: "profile", icon: User, label: "Profile", color: "from-indigo-500 to-violet-500" },
  { id: "summary", icon: FileText, label: "Summary", color: "from-violet-500 to-purple-500" },
  { id: "experience", icon: Briefcase, label: "Experience", color: "from-purple-500 to-pink-500" },
  { id: "education", icon: GraduationCap, label: "Education", color: "from-pink-500 to-rose-500" },
  { id: "skills", icon: Wrench, label: "Skills", color: "from-rose-500 to-orange-500" },
  { id: "projects", icon: FolderKanban, label: "Projects", color: "from-orange-500 to-amber-500" },
  { id: "certifications", icon: Award, label: "Certifications", color: "from-amber-500 to-yellow-500" },
  { id: "languages", icon: Globe, label: "Languages", color: "from-teal-500 to-cyan-500" },
  { id: "social", icon: Link2, label: "Social Links", color: "from-cyan-500 to-blue-500" },
];

interface EditorSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const EditorSidebar = ({ activeSection, onSectionChange }: EditorSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "h-full bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <h2 className="text-lg font-bold text-sidebar-foreground">Sections</h2>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-sidebar-foreground hover:bg-sidebar-accent"
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* Sections list */}
      <nav className="flex-1 p-3 space-y-2 overflow-y-auto">
        {sections.map((section) => (
          <motion.button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200",
              activeSection === section.id
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
            )}
          >
            <div
              className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                activeSection === section.id
                  ? `bg-gradient-to-br ${section.color}`
                  : "bg-sidebar-accent"
              )}
            >
              <section.icon
                className={cn(
                  "w-5 h-5",
                  activeSection === section.id ? "text-white" : "text-sidebar-foreground/70"
                )}
              />
            </div>
            {!isCollapsed && (
              <span className="font-medium truncate">{section.label}</span>
            )}
          </motion.button>
        ))}
      </nav>

      {/* Add section button */}
      <div className="p-4 border-t border-sidebar-border">
        <Button
          variant="ghost"
          className={cn(
            "w-full text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground",
            isCollapsed && "px-0"
          )}
        >
          <Plus className="w-4 h-4" />
          {!isCollapsed && <span className="ml-2">Add Section</span>}
        </Button>
      </div>
    </div>
  );
};

export default EditorSidebar;
