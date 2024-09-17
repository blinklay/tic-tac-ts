import styled from "styled-components";

interface InformationLayoutProps {
  isDraw: boolean;
  isGameEnded: boolean;
  currentPlayer: string;
  winner: string;
}

const Information = styled.div``;
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
        <Winner>Победитель: {winner}</Winner>
      ) : (
        <CurrentStep>
          {isDraw ? <div>Ничья!</div> : <p>Текущий ход: {currentPlayer}</p>}
        </CurrentStep>
      )}
    </Information>
  );
}
