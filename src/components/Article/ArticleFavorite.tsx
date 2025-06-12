import { Suspense } from "react";
import Button from '@mui/material/Button';

interface FavoriteArticleProps {
    id: number;
}

export default function FavoriteArticle({ id }: FavoriteArticleProps) {
    return (
        <Suspense fallback={<div>Downloading article {id}...</div>}>
            <FavoriteArticleContent id={id} />
        </Suspense>
    );
}

async function FavoriteArticleContent({ id }: FavoriteArticleProps) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) throw new Error('Failed to fetch article');
    const article = await res.json();

    return (
        <ul className="space-y-4">
            <li key={article.id} className="p-4 border rounded shadow">
                <h3 className="font-bold text-xl mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-3">{article.body}</p>
                <Button variant="contained" color="primary" size="small">
                    Your favourite article
                </Button>
            </li>
        </ul>
    );
}
