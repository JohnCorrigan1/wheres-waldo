const CharacterSelection: React.FC<{ isOpen: boolean }> = (props) => {

    return (
        props.isOpen ? (
        <div className="rounded-md bg-zinc-100 text-2xl font-semibold">
            <h1>Mario</h1> 
            <h1>Link</h1>
            <h1>Someone else</h1>
        </div>
    ) : <></>
    )
}

export default CharacterSelection;