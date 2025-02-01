export default function Header({children, className}) {
  return (
    <h1 className={'tracking-[-1.2px] 2xl_up:text-7xl xl_up:text-6xl text-4xl font-bold 2xl_up:leading-[100px] xl_up:leading-[90px] leading-[66px] ' + className}>{children}</h1>
  )
}
