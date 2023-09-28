import { useImg } from "../context/ImgContext"
import { Link } from 'react-router-dom'

export function Images() {
    const { images } = useImg()

    if (images.length === 0) return (
        <div>
            <h1 className="flex flex-col justify-center items-center">No hay imagenes</h1>
        </div>
    )

    return (
        <div>
            <Link to="/add-img">
                Nueva imagen
            </Link>
            {images.map(img => (
                <div key={img._id}>
                    <p>{img.name}</p>
                    {img.image && <img alt='Mi Mascota' src={img.image.url}></img>}
                <Link to={`/image/${img._id}`}
                    >Editar
                </Link>
                </div>
            ))}
        </div>
    )
}