export default function Die(props)
{
    return (
        <button className="size-[5rem] bg-slate-50 shadow-md text-[3rem] font-bold font-sans rounded-2xl ">
            {props.value}
        </button>
    )
}