// app/articles/[id]/page.tsx

import { notFound } from "next/navigation";
import { Comment } from "@/types/comment";

type ArticlePageProps = {
    params: { id: string };
};

async function getArticle(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) return null;
    return res.json();
}

async function getComments(id: string): Promise<Comment[]> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    return res.json();
}

export async function generateStaticParams() {
    return Array.from({ length: 5 }, (_, i) => ({ id: (i + 1).toString() }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { id } = params;

    const [article, comments] = await Promise.all([
        getArticle(id),
        getComments(id),
    ]);

    if (!article) return notFound();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
            <p className="mb-6">{article.body}</p>

            <h2 className="text-xl font-semibold mb-2">Comments</h2>
            <ul className="space-y-4">
                {comments.map((comment) => (
                    <li key={comment.id} className="border p-4 rounded">
                        <p className="font-semibold">
                            {comment.name} ({comment.email})
                        </p>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
