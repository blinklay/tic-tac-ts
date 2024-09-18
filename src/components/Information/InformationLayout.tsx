import styled from "styled-components";

interface InformationLayoutProps {
  isDraw: boolean;
  isGameEnded: boolean;
  currentPlayer: string;
  winner: string;
}

const Information = styled.div`
  font-size: 32px;
  color: #fff;
  font-weight: 700;
`;
const CurrentStep = styled.div``;
const Winner = styled.div``;

export default function InformationLayout({
  isDraw,
  isGameEnded,
  currentPlayer,
  winner,
}: InformationLayoutProps) {
  return (
    <Information>
      {isGameEnded ? (
        <Winner>Победитель: {winner === "x" ? "Крестик" : "Нолик"}</Winner>
      ) : (
        <CurrentStep>
          {isDraw ? (
            <div>Ничья!</div>
          ) : (
            <p>Текущий ход: {currentPlayer === "x" ? "Крестик" : "Нолик"}</p>
          )}
        </CurrentStep>
      )}
    </Information>
  );
}
