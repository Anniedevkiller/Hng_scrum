import ProjectCard, { ProjectCardProps } from "@/shared/components/ProjectCard";

type Props = { title: string; text: string; id?: string; list: ProjectCardProps[] };

const Collection = ({ title, text, list, id }: Props) => {
  return (
    <div className="grid gap-4" id={id}>
      <h3 className="font-bold font-title text-4xl text-center sm:text-2xl">{title}</h3>

      <p className="font-text text-xl font-normal text-black sm:text-base mb-8 text-justify">{text}</p>

      <div className="flex flex-col gap-10">
        {list.map((item, idx) => (
          <ProjectCard key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
