import React from "react";
import Image from 'next/image';
import dbConnect from "@/library/db";
import Link from "next/link";
import Project from "@/models/project";

type ProjectPageProps = {
  params: { id: string };
};

const ProjectPage: React.FC<ProjectPageProps> = async ({ params }) => {
  const { id } = await params;

  await dbConnect();
  // new - MongoDB
  const project = await Project.findById(id).lean();
  if (!project) return <div>Project not found</div>;

return (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-sans">
    <main className="max-w-5xl mx-auto px-8 py-24">
           <Link href="/projects" className="text-slate-500 hover:text-cyan-400 text-sm transition-colors mb-8 inline-block">
        ← Back to Projects
      </Link>
      <div className="flex flex-col md:flex-row gap-12 items-start">
        
        {/* Left side — info */}
        <div className="flex flex-col gap-6 flex-1">
          <h1 className="text-4xl font-bold">{project.title as string}</h1>

          {project.description && (
            <p className="text-slate-300 leading-relaxed">
              {project.description as string}
            </p>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl as string}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
            >
              View on GitHub →
            </a>
          )}

          <div className="flex gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">Status</p>
              <span className={`text-sm font-medium ${project.completed ? "text-cyan-400" : "text-amber-400"}`}>
                {project.completed ? "Completed" : "In Progress"}
              </span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">Active</p>
              <span className={`text-sm font-medium ${project.active ? "text-cyan-400" : "text-slate-400"}`}>
                {project.active ? "Yes" : "No"}
              </span>
            </div>
          </div>
        </div>

        {/* Right side — image */}
        {project.imageUrl && (
          <div className="flex-1">
            <Image
              src={project.imageUrl?.startsWith("/") || project.imageUrl?.startsWith("http")
                ? project.imageUrl as string
                : `/${project.imageUrl as string}`}
              alt={project.title as string}
              width={600}
              height={400}
              className="rounded-xl object-cover w-full"
            />
          </div>
        )}

      </div>

    </main>
  </div>
);
};

export default ProjectPage;