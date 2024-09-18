import styled from "styled-components";
import Field from "../Field/Field";
import Information from "../Information/Information";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../slices";
import { resetGame } from "../../slices/gameSlice";

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  height: 100vh;
`;

const Title = styled(motion.h1)`
  font-size: 52px;
  color: #fff;
  font-weight: 700;
`;

interface ButtonProps {
  isGameEnded: boolean;
}

const Button = styled.button<ButtonProps>`
  font-size: 21px;
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 700;
  transition: 0.3s;
  opacity: ${(props) => (props.isGameEnded ? "1" : "0")};
  transform: translateY(${(props) => (props.isGameEnded ? "0" : "50px")});
`;

export default function GameLayout() {
  const dispatch: AppDispatch = useDispatch();
  const isGameEnded = useSelector(
    (state: RootState) => state.game.isGameEnded as boolean
  );
  const isDraw = useSelector(
    (state: RootState) => state.game.isDraw as boolean
  );

  const isEnd: boolean = isGameEnded || isDraw;

  return (
    <Layout>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Tic Tac Toe
      </Title>
      <Information />
      <Field />
      <Button onClick={() => dispatch(resetGame())} isGameEnded={isEnd}>
        Заново
      </Button>
    </Layout>
  );
}
