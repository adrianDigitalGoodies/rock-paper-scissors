import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Welcome from "./Welcome";
import Game from "./Game";
import SwitchPlayer from "./SwitchPlayer";
import Rules from "./Rules";

export default function App() {
    return (
        <div className="bg-black dark:text-white">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Welcome />} />
                        <Route path="/switchuser" element={<SwitchPlayer />} />
                        <Route path="/game" element={<Game />} />
                        <Route path="/rules" element={<Rules />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
