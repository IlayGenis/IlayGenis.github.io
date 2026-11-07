import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/CaseStudy";
import { resume } from "@/data/resume";
import { portfolioMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return resume.projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = resume.projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return portfolioMetadata(project);
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const project = resume.projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <CaseStudy project={project} />;
}
