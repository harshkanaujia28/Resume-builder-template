import { Mail, Phone, MapPin, Globe, Linkedin, Github } from "lucide-react";

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

interface ResumePreviewProps {
  data: ResumeData;
  colorPreset?: { primary: string; secondary: string };
}

const ResumePreview = ({ data, colorPreset }: ResumePreviewProps) => {
  const primaryColor = colorPreset?.primary || "#6366F1";

  return (
    <div className="a4-canvas p-8" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Header */}
      <header className="flex gap-6 pb-6 border-b-2" style={{ borderColor: primaryColor }}>
        {data.profile.image && (
          <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
            <img
              src={data.profile.image}
              alt={data.profile.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="flex-1">
          <h1
            className="text-3xl font-bold mb-1"
            style={{ color: primaryColor }}
          >
            {data.profile.name || "Your Name"}
          </h1>
          <p className="text-lg text-gray-600 mb-3">
            {data.profile.title || "Your Job Title"}
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            {data.profile.email && (
              <span className="flex items-center gap-1">
                <Mail className="w-4 h-4" style={{ color: primaryColor }} />
                {data.profile.email}
              </span>
            )}
            {data.profile.phone && (
              <span className="flex items-center gap-1">
                <Phone className="w-4 h-4" style={{ color: primaryColor }} />
                {data.profile.phone}
              </span>
            )}
            {data.profile.location && (
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" style={{ color: primaryColor }} />
                {data.profile.location}
              </span>
            )}
            {data.profile.website && (
              <span className="flex items-center gap-1">
                <Globe className="w-4 h-4" style={{ color: primaryColor }} />
                {data.profile.website}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Summary */}
      {data.summary && (
        <section className="mt-6">
          <h2
            className="text-lg font-bold mb-2 uppercase tracking-wider"
            style={{ color: primaryColor }}
          >
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">{data.summary}</p>
        </section>
      )}

      {/* Experience */}
      {data.experience.length > 0 && data.experience.some((e) => e.company) && (
        <section className="mt-6">
          <h2
            className="text-lg font-bold mb-4 uppercase tracking-wider"
            style={{ color: primaryColor }}
          >
            Experience
          </h2>
          <div className="space-y-4">
            {data.experience
              .filter((exp) => exp.company || exp.position)
              .map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                      <p className="text-gray-600">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500">
                      {exp.startDate} - {exp.endDate || "Present"}
                    </span>
                  </div>
                  {exp.description && (
                    <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
          </div>
        </section>
      )}

      {/* Education */}
      {data.education.length > 0 && data.education.some((e) => e.school) && (
        <section className="mt-6">
          <h2
            className="text-lg font-bold mb-4 uppercase tracking-wider"
            style={{ color: primaryColor }}
          >
            Education
          </h2>
          <div className="space-y-4">
            {data.education
              .filter((edu) => edu.school || edu.degree)
              .map((edu) => (
                <div key={edu.id} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {edu.degree} {edu.field && `in ${edu.field}`}
                    </h3>
                    <p className="text-gray-600">{edu.school}</p>
                  </div>
                  <span className="text-sm text-gray-500">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mt-6">
          <h2
            className="text-lg font-bold mb-3 uppercase tracking-wider"
            style={{ color: primaryColor }}
          >
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-sm"
                style={{
                  backgroundColor: `${primaryColor}15`,
                  color: primaryColor,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ResumePreview;
