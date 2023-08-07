import { Outlet, Link, useLocation } from "react-router-dom";
import Logo from '../assets/images/logo.png';

export default function Layout() {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white min-h-screen">
            <nav className="bg-opacity-75 backdrop-blur-lg py-6 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
                <div className="flex flex-col items-center">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg p-4 shadow-md text-center w-full border-8 border-slate-500 rounded-lg">
                        <div className="flex items-center"> {/* Flex container for logo and text */}
                            <img style={{ display: "inline" }} src={Logo} width="140" height="140" className="px-2 py-1 ms-8 me-8" />
                            <div className="text-2xl flex-grow text-white"> {/* Flex item for text */}
                                <Link
                                    to="/"
                                    className={`text-lg font-semibold px-2 py-1 rounded-lg me-4 text-4xl ${
                                        isActive("/") ? "bg-white bg-opacity-20" : "hover:bg-white hover:bg-opacity-20"
                                    } transition-colors`}
                                >
                                    Welcome
                                </Link>
                                <Link
                                    to="/switchuser"
                                    className={`text-lg font-semibold px-2 py-1 rounded-lg me-8 text-4xl ${
                                        isActive("/switchuser") ? "bg-white bg-opacity-20" : "hover:bg-white hover:bg-opacity-20"
                                    } transition-colors`}
                                >
                                    Switch player
                                </Link>
                                <Link
                                    to="/rules"
                                    className={`text-lg font-semibold px-2 py-1 rounded-lg me-4 text-4xl ${
                                        isActive("/rules") ? "bg-white bg-opacity-20" : "hover:bg-white hover:bg-opacity-20"
                                    } transition-colors`}
                                >
                                    Rules
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="px-4 sm:px-6 lg:px-8 pt-8">
                <Outlet />
            </div>
        </div>
    );
}
