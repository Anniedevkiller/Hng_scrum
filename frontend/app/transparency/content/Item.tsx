import { ReactNode } from "react";

type Props = {
  title: string;
  list: ReactNode[];
};

const Item = ({ title, list }: Props) => {
  const time = Date.now();

  return (
    <li className="text-lg font-bold font-title">
      <p className="mb-2">{title}</p>

      <ol className="ml-4 list-disc grid gap-2 text-base font-normal font-text">
        {list.map((item, idx) => (
          <li key={idx + time} className="">
            {item}
          </li>
        ))}
      </ol>
    </li>
  );
};

export default Item;
