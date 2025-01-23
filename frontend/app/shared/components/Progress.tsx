import { FC, ReactNode } from "react";

type Props = {
  total: number;
  value: number;
  className?: string;
  maxWidth?: string;
  children?: ReactNode;
  Label?: FC<{ percentage: number }>;
};

const Progress = ({ total, value, className = "", maxWidth, children, Label }: Props) => {
  const percentage = Math.trunc((value * 100) / total);

  return (
    <div className="relative flex items-center" style={{ maxWidth, width: "100%" }}>
      <progress className={`progress progress-primary m-0 w-full ${className}`} value={percentage} max="100"></progress>

      {Label && <Label percentage={percentage} />}

      {children}
    </div>
  );
};

export default Progress;
