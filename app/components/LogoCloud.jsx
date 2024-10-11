import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  "ruby",
  "javascript",
  "rubyonrails",
  "php",
  "wordpress",
  "jira",
  "tailwindcss",
  "sass",
  "nextdotjs",
  "vercel",
  "git",
  "jira",
  "github",
  "threedotjs",
  "phpmyadmin",
  "visualstudiocode",
];

export function LogoCloud() {
  return (
    <div className="relative flex w-full m-auto max-w-lg items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
