import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDir = path.join(process.cwd(), "content", "seo");

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  keywords: string[];
  category: string;
  image: string;
  contentHtml: string;
}

export function getAllPosts(): Omit<Post, "contentHtml">[] {
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(contentDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      const dateVal = data.date instanceof Date
        ? data.date.toISOString().split("T")[0]
        : String(data.date || "");

      return {
        slug,
        title: data.title || "",
        date: dateVal,
        description: data.description || "",
        keywords: data.keywords || [],
        category: data.category || "",
        image: data.image || "",
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(contentDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  const dateVal = data.date instanceof Date
    ? data.date.toISOString().split("T")[0]
    : String(data.date || "");

  return {
    slug,
    title: data.title || "",
    date: dateVal,
    description: data.description || "",
    keywords: data.keywords || [],
    category: data.category || "",
    image: data.image || "",
    contentHtml,
  };
}
