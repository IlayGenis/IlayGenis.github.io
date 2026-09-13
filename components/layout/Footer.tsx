import type { ResumeData } from "@/lib/types";

export function Footer({ data }: { data: ResumeData }) {
  return (
    <footer className="site-footer container">
      <span>
        © {new Date().getFullYear()} {data.name}
      </span>
      <span>{data.footer}</span>
    </footer>
  );
}
