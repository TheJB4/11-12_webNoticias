export default function Noticia({ noticia }) {
    return (
        <div className="border border-black p-3 flex flex-col h-full">
            <div className="mb-4">
                <img src={noticia.urlToImage} alt="" className="w-full h-32 object-cover" />
            </div>
            <div className="mb-2 flex-grow">
                <span className="text-sm">{noticia.source.name}</span>
                <p className="text-lg font-bold">{noticia.title}</p>
                <p className="text-gray-600">{noticia.description}</p>
            </div>
            <div className="bg-emerald-500 text-center p-2">
                <a href={noticia.url} className="text-white">Ver noticia completa</a>
            </div>
        </div>
    )
}