import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SwitchPlayer = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState<string[]>([]);

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
        setUsers(storedUsers);
    }, []);

    const getUserWins = (user: string) => {
        const userStatsString = localStorage.getItem(user);
        const userStats = userStatsString ? JSON.parse(userStatsString) : { wins: 0, losses: 0 };
        return userStats.wins;
    };

    const getUserLosses = (user: string) => {
        const userStatsString = localStorage.getItem(user);
        const userStats = userStatsString ? JSON.parse(userStatsString) : { wins: 0, losses: 0 };
        return userStats.losses;
    };

    const handleUserSelection = (userName: string) => {
        localStorage.setItem('userName', userName);
        navigate('/game');
    };

    const handleAddUser = (newUser: string) => {
        if (newUser.trim() !== '') {
            const newUserStats = { wins: 0, losses: 0 };
            localStorage.setItem(newUser, JSON.stringify(newUserStats));

            const updatedUsers = [...users, newUser];
            localStorage.setItem('users', JSON.stringify(updatedUsers));

            setUsers(updatedUsers);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-semibold mb-4">Switch User</h1>
            <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg p-4 shadow-md text-center w-full border-8 border-slate-500 rounded-lg">
                <h2 className="text-xl mb-3 font-semibold">Select User</h2>
                <ul className="space-y-2">
                <ul className="space-y-2">
                    {users.map((user, index) => (
                        <li
                            key={index}
                            className="cursor-pointer p-2 rounded hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                            onClick={() => handleUserSelection(user)}
                        >
                            {user} - wins: {getUserWins(user)} - losses: {getUserLosses(user)}
                        </li>
                    ))}
                </ul>
                </ul>
                <div className="mt-4">
                    <h2 className="text-xl mb-3 font-semibold">Add New User</h2>
                    <input
                        type="text"
                        placeholder="Enter username"
                        className="border rounded p-2 w-full text-black"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleAddUser(e.currentTarget.value);
                                e.currentTarget.value = '';
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default SwitchPlayer;
