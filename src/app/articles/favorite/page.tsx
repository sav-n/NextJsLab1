import FavoriteArticle from "@/components/Article/ArticleFavorite";

export default function Page() {
    const favoriteIds = [1, 2, 3, 4, 5];
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Your favourite articles!</h1>
            {favoriteIds.map((id) => (
                <FavoriteArticle key={id} id={id} />
            ))}
        </div>
    );
}