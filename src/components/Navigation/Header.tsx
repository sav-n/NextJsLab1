"use client";
import NavLink from "./NavLink";
import styles from "@/styles/navigationMenu.module.scss";

export default function Header() {
    return (
        <header className=" bg-gray-300 shadow">
            <nav className={styles.menu}>
                <NavLink href="/">HOME PAGE🏠</NavLink>
                <div className="nav-links">
                    <NavLink href="/articles">Articles📚</NavLink>
                    <NavLink href="/articles/favorite">Favorites⭐</NavLink>
                    <NavLink href="/articles/create">Create✍️</NavLink>
                    <NavLink href="/profile/setting">Setting⚙️</NavLink>
                    <NavLink href="/profile/security">Security🔒</NavLink>
                </div>
            </nav>
        </header>
    );
}
