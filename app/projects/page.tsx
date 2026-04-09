import Link from "next/link";
import dbConnect from "@/library/db";
import Project from "@/models/project";

const ProjectsPage = async () => {
  try {
    await dbConnect();
    console.log("✅ DB Connected");

    const projects = await Project.find({}).lean();
    console.log("📦 Projects found:", projects.length);
    console.log("📦 Projects data:", JSON.stringify(projects, null, 2));

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-sans flex flex-col">
        <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
          <h1 className="text-4xl font-bold mb-8">Projects</h1>
          {/* Temporary debug output */}
          <p className="text-slate-400 mb-4">Found: {projects.length} projects</p>
          <ul className="list-disc pl-5 my-3">
            {projects.map((project) => (
              <li key={String(project._id)} className="mb-2">
                <Link
                  className="text-amber-400 hover:underline"
                  href={`/project/${project._id}`}
                >
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </div>
    );
  } catch (error) {
    console.error("❌ Error:", error);
    return <div className="text-white p-8">Error: {String(error)}</div>;
  }
};

export default ProjectsPage;