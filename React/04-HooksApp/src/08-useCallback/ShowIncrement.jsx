export const ShowIncrement = ({increment}) => {
  return (
    <>
        <button className="rounded-md bg-indigo-500 text-white" onClick={() => increment(5)}>Incrementar</button>
    </>
  )
}
