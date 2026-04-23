import Link from "next/link";
import Image from "next/image";
import dbConnect from "@/library/db";
import Project from "@/models/project";

const ProjectsPage = async () => {
  await dbConnect();
  const projects = await Project.find({}).lean();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-sans">
      <main className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-2">Projects</h1>
        <p className="text-slate-400 mb-12">Select a project to learn more.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={String(project._id)}
              href={`/project/${project._id}`}
              className="group bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:bg-slate-800"
            >
              {/* Image */}
              <div className="relative w-full h-48 bg-slate-700">
                {project.imageUrl ? (
                  <Image
                    src={
                      (project.imageUrl as string).startsWith("/") ||
                      (project.imageUrl as string).startsWith("http")
                        ? (project.imageUrl as string)
                        : `/${project.imageUrl as string}`
                    }
                    alt={project.title as string}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-slate-500 text-sm">No image</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-5">
                <h2 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title as string}
                </h2>
                {project.description && (
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                    {project.description as string}
                  </p>
                )}
                <div className="mt-4 flex items-center justify-between">
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      project.completed
                        ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                        : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                    }`}
                  >
                    {project.completed ? "Completed" : "In Progress"}
                  </span>
                  <span className="text-slate-500 text-xs group-hover:text-cyan-400 transition-colors">
                    View →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;