import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../slices";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

interface FieldLayoutProps {
  handleClick: (index: number) => void;
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Field = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 15px;
  width: 300px;
  height: 300px;

  background: rgba(255, 255, 255, 0.25);
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Cell = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border: none;
  border-radius: 25px;
  font-size: 2rem;
  font-weight: bold;
`;

export default function FieldLayout({ handleClick }: FieldLayoutProps) {
  const field = useSelector((state: RootState) => state.game.field as string[]);

  return (
    <Field variants={container} initial="hidden" animate="visible">
      {field.map((cell, index) => (
        <Cell
          key={uuidv4()}
          onClick={() => handleClick(index)}
          variants={new Set(field).size > 1 ? undefined : item}
        >
          {cell}
        </Cell>
      ))}
    </Field>
  );
}
