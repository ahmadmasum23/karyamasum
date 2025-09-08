import { Metadata } from "next";

import BackButton from "@/common/components/elements/BackButton";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import ProjectDetail from "@/modules/projects/components/ProjectDetail";
import { ProjectItem } from "@/common/types/projects";
import { METADATA } from "@/common/constants/metadata";
import { getProjectsBySlug } from "@/common/constants/projects";

interface ProjectDetailPageProps {
  params: { slug: string };
}

export const generateMetadata = ({
  params,
}: ProjectDetailPageProps): Metadata => {
  const project = getProjectDetail(params?.slug);

  if (!project) {
    return {
      title: `Project Not Found ${METADATA.exTitle}`,
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} ${METADATA.exTitle}`,
    description: project.description,
    openGraph: {
      images: project.image,
      url: `${METADATA.openGraph.url}/${project.slug}`,
      siteName: METADATA.openGraph.siteName,
      locale: METADATA.openGraph.locale,
      type: "article",
      authors: METADATA.creator,
    },
    keywords: project.title,
    alternates: {
      canonical: `${process.env.DOMAIN}/projects/${params.slug}`,
    },
  };
};

const getProjectDetail = (slug: string): ProjectItem | undefined => {
  return getProjectsBySlug(slug);
};

const ProjectDetailPage = ({ params }: ProjectDetailPageProps) => {
  const data = getProjectDetail(params?.slug);

  if (!data) {
    return (
      <Container data-aos="fade-up">
        <BackButton url="/projects" />
        <PageHeading title="Project Not Found" description="The requested project could not be found." />
      </Container>
    );
  }

  const PAGE_TITLE = data.title;
  const PAGE_DESCRIPTION = data.description;

  return (
    <Container data-aos="fade-up">
      <BackButton url="/projects" />
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <ProjectDetail {...data} />
    </Container>
  );
};

export default ProjectDetailPage;
