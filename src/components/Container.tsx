import { twMerge } from "tailwind-merge";
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={twMerge(` max-w-[1140px] mx-auto px-4`, className)}>
      {children}
    </div>
  );
};

export default Container;
