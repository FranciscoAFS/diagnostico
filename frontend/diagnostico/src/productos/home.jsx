import { useEffect, useState } from "react";
import Formulario from "../components/formulario";
import Tabla from "../components/tabla";

import {
    obtenerProductos,
    crearProducto,
    actualizarProducto,
    eliminarProducto,
} from "./api";

const Home = () => {
    const [productos, setProductos] = useState([]);
    const [productoEditar, setProductoEditar] = useState(null);

    const cargarProductos = async () => {
        const data = await obtenerProductos();
        setProductos(data.data);
    };

    useEffect(() => {
        cargarProductos();
    }, []);

const guardarProducto = async (formData) => {
    const id = productoEditar?.id
    if (id) {
        await actualizarProducto(id, formData);
    } else {
        await crearProducto(formData);
    }
    console.log(productoEditar)
    setProductoEditar(null);
    cargarProductos();
};

    const editarProducto = (producto) => {
        setProductoEditar(producto);
    };

    const borrarProducto = async (id) => {
        await eliminarProducto(id);
        cargarProductos();
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto">

                <h1 className="text-3xl font-bold mb-6 text-center">
                    CRUD de productos
                </h1>

                <Formulario
                    key={productoEditar?.id ?? "nuevo"}
                    onGuardar={guardarProducto}
                    productoEditar={productoEditar}
                />

                <Tabla
                    productos={productos}
                    onEditar={editarProducto}
                    onEliminar={borrarProducto}
                />
            </div>
        </div>
    );
};

export default Home;