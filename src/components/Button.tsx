type ButtonProps = {
  handleClick: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => void;
};

export const Button = (props: ButtonProps) => {
  return <button onClick={(e) => props.handleClick(e, 1)}>Click</button>;
};
