import { FC, useState } from "react";
import { Stage } from "../Types/Stage";
import classNames from "classnames";

type Props = {
  stage: Stage;
  bannedStages: string[];
  setBannedStages: (title: React.SetStateAction<string[]>) => void;
  mode: "ban" | "pick";
  pickStage: (stage: Stage) => void
};

const StageCard: FC<Props> = ({
  stage,
  setBannedStages,
  mode,
  bannedStages,
  pickStage
}) => {
  const [isBanned, setIsBanned] = useState<boolean>();
  const [isPicked, setIsPicked] = useState<boolean>(false);

  const handleBanStage = () => {
    if (mode === "ban") {
      if (bannedStages.some((x) => x === stage.title)) return;
      setBannedStages((prev) => [...prev, stage.title]);
      setIsBanned(true);
    }
    if (mode === "pick") {
      setIsPicked(true);
      pickStage(stage)
    }
  };

  return (
    <button
      className={classNames(
        mode == "pick"
          ? "hover:ring-green-500 hover:ring"
          : "ring-red-500 hover:ring",
        isBanned ? "hover:ring-0" : "",
        isPicked ? "ring ring-green-500" : "",
        "hover:cursor-pointer"
      )}
      onClick={handleBanStage}
    >
      <div className="md:w-56 w-44 rounded shadow-lg hover:shadow-2xl relative">
        <img
          className={classNames("w-full z-0", isBanned ? "grayscale" : "")}
          src={stage.image}
          alt={stage.title}
        ></img>
        {isBanned && <div className=""><div className="bg-red-600 absolute top-1/2 w-full h-1 rotate-45"></div><div className="bg-red-600 absolute top-1/2 w-full h-1 -rotate-45"></div></div>}
        <div className="p-4 bg-zinc-900 flex justify-center">
          <div className="font-bold text-xs md:text-sm">{stage.title}</div>
        </div>
      </div>
    </button>
  );
};

export default StageCard;
