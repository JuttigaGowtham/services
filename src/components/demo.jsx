import { IconCloud } from "./ui/interactive-icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

function IconCloudDemo() {
  return (
    <section className="bg-white text-gray-900 py-20 px-6 sm:px-8 md:px-12">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto items-center justify-between gap-12">
        
        {/* Left section - Heading & Description */}
        <div className="flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Technologies <span className="text-[#1266A2]">We Use</span>
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-md leading-relaxed">
            We use a powerful set of modern technologies and tools to craft
            reliable, scalable, and high-performance digital solutions — spanning
            frontend frameworks, backend development, DevOps, and cloud services.
          </p>
        </div>

        {/* Right section - Icon cloud */}
        <div className="flex-1 flex items-center justify-center lg:justify-end w-full">
          <div className="w-[280px] sm:w-[350px] md:w-[450px] lg:w-[500px]">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IconCloudDemo;
