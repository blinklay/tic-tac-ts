import FieldLayout from "./FieldLayout";
import { AppDispatch, RootState } from "../../slices";
import { useDispatch, useSelector } from "react-redux";
import { changeField } from "../../slices/gameSlice";

export default function Field() {
  const isGameEnded = useSelector((state: RootState) => state.game.isGameEnded);

  const dispatch: AppDispatch = useDispatch();

  const handleClick = (index: number) => {
    if (isGameEnded) return;

    dispatch(changeField(index));
  };

  return (
    <>
      <FieldLayout handleClick={handleClick} />
    </>
  );
}
