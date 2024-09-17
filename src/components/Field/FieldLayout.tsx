import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../slices";
import { v4 as uuidv4 } from "uuid";

interface FieldLayoutProps {
  handleClick: (index: number) => void;
}

const Field = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 15px;
  width: 300px;
  height: 300px;
`;
const Cell = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border: 2px solid #000;
  font-size: 2rem;
  font-weight: bold;
`;

export default function FieldLayout({ handleClick }: FieldLayoutProps) {
  const field = useSelector((state: RootState) => state.game.field as string[]);

  return (
    <Field>
      {field.map((cell, index) => (
        <Cell key={uuidv4()} onClick={() => handleClick(index)}>
          {cell}
        </Cell>
      ))}
    </Field>
  );
}
