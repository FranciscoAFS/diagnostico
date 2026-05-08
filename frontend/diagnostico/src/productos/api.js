import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8000'
});

const URL = `/api/producto`;

export const obtenerProductos = async () => {
    return api.get(`${URL}/`);
}

export const crearProducto = (body) => {
    return api.post(`${URL}/`, body)
};

export const eliminarProducto = async (id) => {
    return api.delete(`${URL}/${id}/`);
}

export const actualizarProducto = async (id, body) => {
    return api.put(`${URL}/${id}/`, body)
};