import Navbar from '../NavBar/navbar';

const Layout = ({ children }) => {
    const year = new Date().getFullYear();

    return (
        <div className="layout-root min-h-screen bg-dark flex flex-col">
            <Navbar />
            <main className="flex-1 w-full mx-auto pt-10">
                {children}
            </main>

            {/* ── Footer ── */}
            <footer className="bg-[#080808] border-t border-white/[0.06] py-6 text-center space-y-1">
                <p className="text-white/50 text-sm">
                    © {year} Royal Castelino. All Rights Reserved.
                </p>
                <p className="text-white/40 text-sm">
                    Developed by{' '}
                    <span className="text-turquoise font-semibold">Royal Castelino</span>
                </p>
            </footer>
        </div>
    );
};

export default Layout;
