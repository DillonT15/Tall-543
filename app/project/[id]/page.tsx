import React from "react";
import dbConnect from "@/library/db";
import Project from "@/models/project";

type ProjectPageProps = {
  params: { id: string };
};

const ProjectPage: React.FC<ProjectPageProps> = async ({ params }) => {
  const { id } = await params;

  await connectDB();
  const project = await Project.findById(id).lean();

  if (!project) return <div>Project not found</div>;

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

        <dl className="divide-y divide-gray-200 border-t border-gray-200 w-full">
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium">Description</dt>
            <dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">{project.description}</dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium">Tech</dt>
            <dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">
              {project.tech.join(", ")}
            </dd>
          </div>
          {project.githubUrl && (
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium">GitHub</dt>
              <dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">
                <a href={project.githubUrl} className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">
                  {project.githubUrl}
                </a>
              </dd>
            </div>
          )}
        </dl>
      </main>
    </div>
  );
};

export default ProjectPage;