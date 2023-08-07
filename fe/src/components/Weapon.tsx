interface WeaponProps {
    emoji: string;
    label: string;
    selectedChoice: string | null;
    isGameOngoing: boolean;
    handlePlayerChoice: (choice: string) => void;
    countdown: number;
}

export default function Weapon({
    emoji,
    label,
    selectedChoice,
    isGameOngoing,
    handlePlayerChoice,
    countdown,
}: WeaponProps) {
  const countdownActive = countdown > 0;

  return (
    <span
      role="img"
      aria-label={label}
      className={`hover:animate-spin mt-6 text-8xl cursor-pointer border border-white rounded-full p-4 ${
        selectedChoice === emoji ? "border-blue-500" : ""
      } ${!countdownActive || isGameOngoing ? "pointer-events-none" : ""}`}
      onClick={() => {
        if (countdownActive) {
          handlePlayerChoice(emoji);
        }
      }}
    >
      {emoji}
    </span>
  );
}
