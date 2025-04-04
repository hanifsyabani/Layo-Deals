
interface HeadingProps{
  title: string,
  description: string
}
export default function Heading({ title, description }: HeadingProps){
  return(
    <>
      <div>
        <h1 className="text-xl font-bold tracking-tight">{title}</h1>
        <p className="text-sm">{description}</p>
      </div>
    </>
  )
}