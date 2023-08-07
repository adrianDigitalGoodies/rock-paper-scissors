import { useState, useEffect } from 'react';
import WeaponsList from './WeaponsList'
import determineWinner from '../utils/determineWinner';
import ConfettiEffect from './ConfettiEffect';

const Game = () => {
    const [playerChoice, setPlayerChoice] = useState<string | null>(null);
    const [computerChoice, setComputerChoice] = useState<string | null>(null);
    const [playerScore, setPlayerScore] = useState<number>(Number(localStorage.getItem('playerScore')) || 0);
    const [computerScore, setComputerScore] = useState<number>(Number(localStorage.getItem('computerScore')) || 0);
    const [isGameOngoing, setIsGameOngoing] = useState<boolean>(false);
    const [counter, setCounter] = useState<number>(3);
    const [lastWinner, setLastWinner] = useState<string | null>(localStorage.getItem('lastWinner') || '');
    const userName = localStorage.getItem('userName') || '';
    

    const defaultWeapons = [
        {
            label: 'rock',
            emoji: '🪨',
            beats: 'scissors'
        },   
        {
            label: 'paper',
            emoji: '📄',
            beats: 'rock'
        },   
        {
            label: 'scissors',
            emoji: '✂️',
            beats: 'paper'
        },        
    ]

    useEffect(() => {
        let timer: number | null;
    
        if (counter > 0) {
            timer = setInterval(() => setCounter((prevCounter) => prevCounter - 1), 1000);
        } else {
            timer = null;
            
            setPlayerChoice('Please select a weapon!')
        }
    
        return () => {
            if (timer) {
                clearInterval(timer);
            }
        };
    }, [counter, playerChoice, userName, computerScore]);
    
    useEffect(() => {
        localStorage.setItem('playerScore', playerScore.toString());
    }, [playerScore]);

    const updateLocalStorageStats = (user: string, didWin: boolean) => {
        if (user) {
            const userStatsString = localStorage.getItem(user);
            const userStats = userStatsString ? JSON.parse(userStatsString) : { wins: 0, losses: 0 };
    
            if (didWin) {
                userStats.wins += 1;
            } else {
                userStats.losses += 1;
            }
    
            localStorage.setItem(user, JSON.stringify(userStats));
        }
    };
    
    const handlePlayerChoice = (choice: string) => {
        if (!isGameOngoing) {
            setPlayerChoice(choice);
            setIsGameOngoing(true);
            setCounter(0);
    
            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * defaultWeapons.length);
                setComputerChoice(defaultWeapons[randomIndex].emoji);
                setIsGameOngoing(false);
    
                const winner = determineWinner(choice, defaultWeapons[randomIndex].emoji);

                if (winner === 'Player') {
                    updateLocalStorageStats(userName, true);
                    setLastWinner(userName);
                } else if (winner === 'Computer') {
                    updateLocalStorageStats(userName, false);
                    setLastWinner('Computer');
                } else {
                    setLastWinner('TIE');
                }
    
                if (winner === 'Player') {
                    setPlayerScore(playerScore + 1);
                } else if (winner === 'Computer') {
                    setComputerScore(computerScore + 1);
                }
            });
        }
    };

    const startGame = () => {
        setCounter(3);
        setComputerChoice('');
    }

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

    return (
        <div>
            {/* Scoreboard */}
            <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg p-4 shadow-md text-center w-full border-8 border-slate-500 rounded-lg">
                {counter !== 0 && (
                    <h2 className="text-5xl mb-2 text-rose-50">
                        Countdown: {counter}
                    </h2>
                )}
                {lastWinner === userName && <ConfettiEffect />}
                <div className="flex items-center justify-center mt-4">
                    <button
                        className="text-2xl text-white bg-blue-500 hover:bg-blue-600 py-2 px-6 rounded-lg transition-colors duration-300"
                        onClick={() => {
                            if (counter === 0) {
                                startGame();
                            }
                        }}
                    >
                        Play Again
                    </button>
                </div>
                <p className="text-2xl text-white left-margin">Wins: {getUserWins(userName)}</p>
                <p className="text-2xl text-white left-margin">Losses: {getUserLosses(userName)}</p>
            </div>

            {/* Game layout */}
            <div className="w-full flex justify-around my-10">
                {/* Weapons board */}                
                <WeaponsList weaponsProp={defaultWeapons} selectedChoice={playerChoice}
                    isGameOngoing={isGameOngoing}
                    handlePlayerChoice={handlePlayerChoice} countdown={counter}/>       
                <div className="w-px bg-white opacity-25"></div>         
                {/* Computer's choice */}
                <div className="w-1/2 flex justify-center items-center">
                    {computerChoice && (
                        <span role="img" aria-label="Computer's Choice" className="text-8xl mt-6 text-8xl border border-white rounded-full p-4">
                            {computerChoice}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};
  
export default Game;
