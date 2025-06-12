export default function DashboardLayout({ children, }: { children: React.ReactNode
}) {
    return (
        <div>
            <div>
                Layout for article
            </div>
            <section>
                {children}
            </section>
        </div>
    )
}