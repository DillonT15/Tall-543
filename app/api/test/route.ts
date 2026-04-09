import { NextResponse } from "next/server";
import dbConnect from "@/library/db";
import Project from "@/models/project";

export async function GET() {
  try {
    await dbConnect();
    const projects = await Project.find({}).lean();
    const raw = await Project.collection.find({}).toArray();
    
    return NextResponse.json({
      mongooseProjects: projects,
      rawProjects: raw,
      modelName: Project.modelName,
      collectionName: Project.collection.name,
    });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}