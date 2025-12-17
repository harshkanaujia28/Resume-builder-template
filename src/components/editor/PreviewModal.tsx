import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut, Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ResumePreview from "./ResumePreview";

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

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ResumeData;
  colorPreset?: { primary: string; secondary: string };
}

const PreviewModal = ({ isOpen, onClose, data, colorPreset }: PreviewModalProps) => {
  const [zoom, setZoom] = useState(0.8);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.1, 1.2));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.1, 0.5));

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative z-10 w-full max-w-5xl mx-4 max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-card rounded-t-2xl border-b border-border">
              <h2 className="text-xl font-bold text-foreground">Resume Preview</h2>
              <div className="flex items-center gap-2">
                {/* Zoom controls */}
                <div className="flex items-center gap-1 px-3 py-1 bg-muted rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={handleZoomOut}
                  >
                    <ZoomOut className="w-4 h-4" />
                  </Button>
                  <span className="text-sm font-medium w-12 text-center">
                    {Math.round(zoom * 100)}%
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={handleZoomIn}
                  >
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                </div>

                {/* Actions */}
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Printer className="w-4 h-4" />
                  Print
                </Button>
                <Button variant="ghost" size="icon" onClick={onClose}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Preview content */}
            <div className="flex-1 overflow-auto bg-muted/50 p-8 rounded-b-2xl">
              <div
                className="mx-auto transition-transform duration-200"
                style={{ transform: `scale(${zoom})`, transformOrigin: "top center" }}
              >
                <ResumePreview data={data} colorPreset={colorPreset} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreviewModal;
