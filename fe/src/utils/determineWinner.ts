export default function determineWinner(player: string | null, computer: string | null){
    if (!player || !computer) {
        return 'Computer'; // If either player or computer choice is null, return 'N/A'
    }

    if (player === computer) {
        return 'Tie';
    } else if (
        (player === '🪨' && computer === '✂️') ||
        (player === '📄' && computer === '🪨') ||
        (player === '✂️' && computer === '📄')
    ) {
        return 'Player';
    } else {
        return 'Computer';
    }
};