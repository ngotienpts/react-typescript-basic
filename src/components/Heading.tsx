type ChildrenProps = {
  children: string;
};
export const Heading = ({ children }: ChildrenProps) => {
  return <h2>{children}</h2>;
};
