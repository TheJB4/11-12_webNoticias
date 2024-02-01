import { useState } from "react";

export default function Formulario({categoriaSeleccionada,setCategoriaSeleccionada}) {
    
    const handleChangeCategoria = (e) => {
        const nuevaCategoria = e.target.value;

        setCategoriaSeleccionada(nuevaCategoria);

        console.log(nuevaCategoria)
    };

    return (
        <div>
            <div className="flex justify-center items-center my-3">
                <p>Buscar por categoria: </p>
                <form action="">
                    <select id="categoria" className="p-2 border border-gray-300 rounded" onChange={handleChangeCategoria}>
                        <option value="">Options</option>
                        <option value="">-- Select --</option>
                        <option value="Politics">Politics</option>
                        <option value="Economy">Economy</option>
                        <option value="Culture">Culture</option>
                        <option value="Sports">Sports</option>
                        <option value="Science">Science</option>
                        <option value="Technology">Technology</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Health">Health</option>
                        <option value="International">International</option>
                        <option value="Environment">Environment</option>
                    </select>
                </form>
            </div>
        </div>
    )
}