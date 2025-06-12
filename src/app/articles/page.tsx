import ArticleList from "@/components/Article/ArticleList";
import { Post } from "@/types/post";

export default async function Page() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: Post[] = await res.json();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">List of articles</h1>
            <ArticleList posts={posts} />
        </div>
    );
}