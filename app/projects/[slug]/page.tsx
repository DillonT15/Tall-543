// app/projects/[slug]/page.tsx (dynamic project page & server component)

// Define the types for the parameters
type Projects = {
  params: {
    slug: string;
    userId: number;
  };
};

const ProjectPage: React.FC<Projects> = async ({
  params,
}: Projects) => {
  
  const { slug } = await params; // Extract the id from the params by destructuring
  console.log('Params: ', params);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`,
  );

  const data = await response.json();
  console.log('Project Data: ', data);
  return (
   
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Project Title: {data.title}</h1>
        <p>User ID: {data.userId ? String(data.userId) : "Unknown"}</p>
        <p>Project Summary: {data.body? data.body: "no body available" }</p>
      
      </main>
    </div>
  );
};

export default ProjectPage;