import { Link } from "react-router-dom";
import { games } from "../assets/data/games";

const GameCard = ({ game }) => {
    const content = (
        <>
            <img
                src={game.image}
                alt={game.name}
                className="rounded-lg w-full h-auto mb-2"
            />
            <p className="text-sm text-center text-white">
                {game.name}
            </p>
        </>
    );

    return (
        <div className="flex flex-col items-center">
            {game.hasLink ? (
                <Link to={game.path}>{content}</Link>
            ) : (
                content
            )}
        </div>
    );
};

export default function Allgames() {
    return (
        <div className="bg-black border-section">
            <h2 className="text-2xl font-bold mb-4 text-white">
                ALL GAMES🎮
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </div>
    );
}