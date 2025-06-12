"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    activeClassName?: string;
}

const NavLink: FC<NavLinkProps> = ({
                                       href,
                                       children,
                                       className = "",
                                       activeClassName = "active",
                                   }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    const combinedClassName = [
        className,
        isActive ? activeClassName : "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <Link href={href} className={combinedClassName}>
            {children}
        </Link>
    );
};

export default NavLink;
