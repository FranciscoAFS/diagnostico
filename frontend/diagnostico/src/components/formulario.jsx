import { useState } from "react";

const crearEstadoInicial = (productoEditar) => ({
  nombre: productoEditar?.nombre ?? "",
  descripcion: productoEditar?.descripcion ?? "",
  precio: productoEditar?.precio ?? "",
  imagen: null,
  id: productoEditar?.id,
});

const Formulario = ({ onGuardar, productoEditar }) => {
  const [producto, setProducto] = useState(() => crearEstadoInicial(productoEditar));

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProducto((prev) => ({
      ...prev,
      [name]: name === "imagen" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (producto.id) formData.append("id", producto.id);
    formData.append("nombre", producto.nombre);
    formData.append("descripcion", producto.descripcion);
    formData.append("precio", producto.precio);
    if (producto.imagen) formData.append("imagen", producto.imagen);
    onGuardar(formData);
    setProducto(crearEstadoInicial(null));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4">
      <input type="text" required name="nombre" placeholder="Nombre"
        value={producto.nombre} onChange={handleChange}
        className="w-full border p-2 rounded-lg" />

      <textarea name="descripcion" required placeholder="Descripción"
        value={producto.descripcion} onChange={handleChange}
        className="w-full border p-2 rounded-lg" rows="4" />

      <input type="number" required name="precio" placeholder="Precio"
        value={producto.precio} onChange={handleChange}
        className="w-full border p-2 rounded-lg" />

      <input type="file" name="imagen" accept="image/*"
        onChange={handleChange}
        className="w-full border p-2 rounded-lg" />
        
      <button type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        {productoEditar?.id ? "Actualizar" : "Guardar"}
      </button>
    </form>
  );
};

export default Formulario;