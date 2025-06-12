'use client';

import Button from '@mui/material/Button';
import { Post } from "@/types/post";

interface ArticleListProps {
    posts: Post[];
    onFavoriteClick?: (postId: number) => void;
}

export default function ArticleList({ posts, onFavoriteClick }: ArticleListProps) {
    return (
        <ul className="space-y-4">
            {posts.map((post) => (
                <li key={post.id} className="p-4 border rounded shadow">
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                    <p className="text-gray-600">{post.body}</p>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => onFavoriteClick?.(post.id)}
                    >
                        Add to Favorites
                    </Button>
                </li>
            ))}
        </ul>
    );
}
