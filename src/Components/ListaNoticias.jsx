import Noticia from "./Noticia";

export default function ListaNoticias({noticias}){
    console.log(noticias)
    return(
        <div className="grid grid-cols-4 gap-4">
            {noticias?.map(noticia => (
                <Noticia noticia={noticia}></Noticia>
            ))}
        </div>
    )
}