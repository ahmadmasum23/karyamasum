"use client";

import AnimatedList from "@/common/components/elements/AnimatedList";
import { ProjectItem } from "@/common/types/projects";
import { getVisibleProjects } from "@/common/constants/projects";

const AnimatedListProject = () => {
  // Menggunakan data statis dari constants
  const projects = getVisibleProjects()
    .map((item: ProjectItem) => ({
      image: item.image.startsWith("/") ? item.image : `/${item.image}`,
      slug: `/projects/${item.slug}`,
    }));

  return (
    <AnimatedList
      items={projects.map((item) => ({
        image: item.image,
        href: item.slug,
      }))}
      itemImage={true}
      showGradients={false}
      displayScrollbar={false}
    />
  );
};

export default AnimatedListProject;
