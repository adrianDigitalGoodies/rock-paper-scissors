import Weapon from "./Weapon";

interface WeaponsListProps {
    weaponsProp: Array<{
      label: string;
      emoji: string;
      beats: string;
    }> | undefined;
    selectedChoice: string | null;
    isGameOngoing: boolean;
    handlePlayerChoice: (choice: string) => void;
    countdown: number; // Pass the countdown prop
}

export default function WeaponsList({
    weaponsProp,
    selectedChoice,
    isGameOngoing,
    handlePlayerChoice,
    countdown // Include the countdown prop here
  }: WeaponsListProps) {
    return (
      <div className="w-1/2 flex flex-col items-center">
        {weaponsProp?.map((weapon) => (
          <Weapon
            key={weapon.emoji}
            emoji={weapon.emoji}
            label={weapon.label}
            selectedChoice={selectedChoice}
            isGameOngoing={isGameOngoing}
            handlePlayerChoice={handlePlayerChoice}
            countdown={countdown} // Pass the countdown prop to the Weapon component
          />
        ))}
      </div>
    );
}
