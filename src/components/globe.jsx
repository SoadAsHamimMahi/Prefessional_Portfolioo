import IconCloud from "./ui/icon-cloud";

const slugs = [
  "css3",
  "express",
  "figma",
  "firebase",
  "git",
  "github",
  "html5",
  "java",
  "javascript",
  "mongodb",
  "mysql",
  "nodedotjs",
  "react",
  "tailwindcss",
  "vercel",
  "visualstudiocode",
  // Doubled for more detailed animation
  "css3",
  "express",
  "figma",
  "firebase",
  "git",
  "github",
  "html5",
  "java",
  "javascript",
  "mongodb",
  "mysql",
  "nodedotjs",
  "react",
  "tailwindcss",
  "vercel",
  "visualstudiocode",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
