export default function DashboardLayout({ children, }: { children: React.ReactNode
}) {
    return (
        <div>
            <div>
                Profile layout
            </div>

            <section>
                {children}
            </section>
        </div>
    )
}