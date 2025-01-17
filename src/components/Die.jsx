export default function Die(props)
{
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    };

    return (
        <button
            className="size-[5rem] bg-slate-50 shadow-md text-[3rem] font-bold font-sans rounded-2xl"
            style={styles}
            onClick={props.hold}
        >
            {props.value}
        </button>
    );
}
