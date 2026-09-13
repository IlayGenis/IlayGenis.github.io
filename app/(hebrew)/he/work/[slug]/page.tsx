import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/CaseStudy";
import { resumes } from "@/data/resume";
import { portfolioMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return resumes.he.projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = resumes.he.projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return portfolioMetadata("he", project);
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const project = resumes.he.projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <CaseStudy locale="he" project={project} />;
}
