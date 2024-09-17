import InformationLayout from "./InformationLayout";
import { useSelector } from "react-redux";
import { RootState } from "../../slices";

export default function Information() {
  const isDraw = useSelector(
    (state: RootState) => state.game.isDraw as boolean
  );
  const isGameEnded = useSelector(
    (state: RootState) => state.game.isGameEnded as boolean
  );
  const currentPlayer = useSelector(
    (state: RootState) => state.game.currentPlayer as string
  );
  const winner = useSelector((state: RootState) => state.game.winner as string);
  const gameInfo = { isGameEnded, isDraw, currentPlayer, winner };

  return (
    <>
      <InformationLayout {...gameInfo} />
    </>
  );
}
