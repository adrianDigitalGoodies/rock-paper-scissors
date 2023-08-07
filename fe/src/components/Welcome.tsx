import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {

    const userNameFromInput = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const handleNameSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const inputValue = userNameFromInput.current?.value ?? '';
    
        if (inputValue.trim() !== '') {
            localStorage.setItem('userName', inputValue);
    
            // Update the list of users in localStorage
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            users.push(inputValue);
            localStorage.setItem('users', JSON.stringify(users));
    
            // Initialize user stats
            const newUserStats = { wins: 0, losses: 0 };
            localStorage.setItem(inputValue, JSON.stringify(newUserStats));
    
            navigate('/game');
        }
    };
    

    return (
        <main className="relative flex flex-col items-center justify-center p-24">
            <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex items-center relative z-10"> {/* Add flex and items-center */}
                <label htmlFor="large-input" className="block mb-3 text-sm font-black text-gray-1100 dark:text-white text-7xl flex-grow">
                Add your username ... {' '} &#128123;
                </label>
                <input
                type="text"
                placeholder="... therock &#128526;"
                id="large-input"
                ref={userNameFromInput}
                className="ml-6 flex-grow-0 block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <button onClick={(e) => {handleNameSubmit(e)}} type="submit" className="ml-6 transition-transform group-hover:translate-x-1 motion-reduce:transform-none font-black text-5xl">
                &#8594;
                </button>
            </div>
        </main>
    );
}