export const GifCard = ({title, url}) => {
  return (
    <div>
        <div className="p-4 bg-white rounded-3xl">
            <img src={url} alt={title}/>
            <p className="bg-white text-2md pt-2 text-center">{title}</p>
        </div>
    </div>
  )
}
