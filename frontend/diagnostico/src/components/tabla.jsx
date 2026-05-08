const Tabla = ({ productos = [], onEditar, onEliminar }) => {
    return (
        <div className="overflow-x-auto mt-6">
            <table className="bg-white p-6 rounded-xl shadow-md space-y-4 w-full border border-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-3">Imagen</th>
                        <th className="p-3">Nombre</th>
                        <th className="p-3">Descripcion</th>
                        <th className="p-3">Precio</th>
                        <th className="p-3">Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {productos.map((producto) => (
                        <tr key={producto.id} className="text-center border-t">

                            <td className="p-3">
                                <img
                                    src={producto.imagen}
                                    alt={producto.nombre}
                                    className="w-10 h-10 object-cover rounded-md mx-auto"
                                />
                            </td>

                            <td className="p-3">
                                {producto.nombre}
                            </td>

                            <td className="p-3">
                                {producto.descripcion}
                            </td>


                            <td className="p-3">
                                ${producto.precio}
                            </td>

                            <td className="p-3 space-x-2">

                                <button
                                    onClick={() => onEditar(producto)}
                                    className="bg-yellow-400 px-3 py-1 rounded text-white"
                                >
                                    Editar
                                </button>

                                <button
                                    onClick={() => onEliminar(producto.id)}
                                    className="bg-red-500 px-3 py-1 rounded text-white"
                                >
                                    Eliminar
                                </button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Tabla;