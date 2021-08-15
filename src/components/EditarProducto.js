import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // useSelector para acceder al state y useDispatch para ejecutar acciones
import { editarProductoAction } from "../actions/productoActions";
import { useHistory } from "react-router-dom";

const EditarProducto = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  //nuevo state de producto
  const [producto, setProducto] = useState({
    nombre: "",
    precio: "",
  });

  // producto a editar
  const productoeditar = useSelector((state) => state.productos.productoeditar);

  // llenar el state automáticamente con un useEffect
  useEffect(() => {
    setProducto(productoeditar);
  }, [productoeditar]);

  const { nombre, precio } = producto;

  // leer los datos del formulario
  const onChangeFormulario = (e) => {
    setProducto({
      ...producto,
      [e.target.name] : [e.target.value],
    });
  };


  const submitEditarProducto = (e) => {
    e.preventDefault();

    dispatch(editarProductoAction(producto)); // toma el nuevo producto
    history.push("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Nuevo Producto
            </h2>

            <form onSubmit={submitEditarProducto}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="Nombre"
                  value={nombre}
                  onChange={onChangeFormulario}
                />
              </div>
              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="Precio"
                  value={precio}
                  onChange={onChangeFormulario}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarProducto;
