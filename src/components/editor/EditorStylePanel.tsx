import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check, Eye, Download, Printer } from "lucide-react";

const colorPresets = [
  { name: "Indigo", primary: "#6366F1", secondary: "#A78BFA" },
  { name: "Emerald", primary: "#10B981", secondary: "#34D399" },
  { name: "Rose", primary: "#F43F5E", secondary: "#FB7185" },
  { name: "Amber", primary: "#F59E0B", secondary: "#FBBF24" },
  { name: "Cyan", primary: "#06B6D4", secondary: "#22D3EE" },
  { name: "Slate", primary: "#475569", secondary: "#64748B" },
];

const fontOptions = [
  { value: "inter", label: "Inter" },
  { value: "roboto", label: "Roboto" },
  { value: "poppins", label: "Poppins" },
  { value: "playfair", label: "Playfair Display" },
  { value: "merriweather", label: "Merriweather" },
  { value: "lato", label: "Lato" },
];

interface StyleSettings {
  colorPreset: number;
  fontFamily: string;
  fontSize: number;
  lineSpacing: number;
}

interface EditorStylePanelProps {
  settings: StyleSettings;
  onSettingsChange: (settings: StyleSettings) => void;
  onPreview: () => void;
}

const EditorStylePanel = ({ settings, onSettingsChange, onPreview }: EditorStylePanelProps) => {
  const updateSetting = <K extends keyof StyleSettings>(key: K, value: StyleSettings[K]) => {
    onSettingsChange({ ...settings, [key]: value });
  };

  return (
    <div className="h-full w-72 border-l border-border bg-card overflow-y-auto">
      <div className="p-6 space-y-8">
        {/* Header */}
        <div>
          <h3 className="text-lg font-bold text-foreground mb-1">Style Settings</h3>
          <p className="text-sm text-muted-foreground">Customize your resume appearance</p>
        </div>

        {/* Color Theme */}
        <div className="space-y-4">
          <Label className="text-foreground font-semibold">Color Theme</Label>
          <div className="grid grid-cols-3 gap-2">
            {colorPresets.map((preset, index) => (
              <button
                key={preset.name}
                onClick={() => updateSetting("colorPreset", index)}
                className={`relative p-3 rounded-xl border-2 transition-all duration-200 ${
                  settings.colorPreset === index
                    ? "border-primary shadow-soft"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="flex gap-1">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: preset.primary }}
                  />
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: preset.secondary }}
                  />
                </div>
                {settings.colorPreset === index && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full gradient-primary flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                )}
                <span className="text-xs text-muted-foreground mt-2 block">{preset.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Font Family */}
        <div className="space-y-3">
          <Label className="text-foreground font-semibold">Font Family</Label>
          <Select
            value={settings.fontFamily}
            onValueChange={(value) => updateSetting("fontFamily", value)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {fontOptions.map((font) => (
                <SelectItem key={font.value} value={font.value}>
                  {font.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Font Size */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-foreground font-semibold">Font Size</Label>
            <span className="text-sm text-muted-foreground">{settings.fontSize}px</span>
          </div>
          <Slider
            value={[settings.fontSize]}
            onValueChange={([value]) => updateSetting("fontSize", value)}
            min={10}
            max={16}
            step={1}
            className="w-full"
          />
        </div>

        {/* Line Spacing */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-foreground font-semibold">Line Spacing</Label>
            <span className="text-sm text-muted-foreground">{settings.lineSpacing.toFixed(1)}</span>
          </div>
          <Slider
            value={[settings.lineSpacing]}
            onValueChange={([value]) => updateSetting("lineSpacing", value)}
            min={1}
            max={2}
            step={0.1}
            className="w-full"
          />
        </div>

        {/* Divider */}
        <div className="border-t border-border" />

        {/* Actions */}
        <div className="space-y-3">
          <Button variant="gradient" className="w-full gap-2" onClick={onPreview}>
            <Eye className="w-4 h-4" />
            Preview Resume
          </Button>
          <Button variant="outline" className="w-full gap-2">
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
          <Button variant="ghost" className="w-full gap-2">
            <Printer className="w-4 h-4" />
            Print
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditorStylePanel;
