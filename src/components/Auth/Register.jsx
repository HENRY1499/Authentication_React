import { Link } from "react-router-dom";
import { postData } from "../../services/axios";
import { useState } from "react";

function Register() {
  // estado para los campos del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState("");
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await postData(formData);
      console.log("Enviado con exito:", resp);
      setFormData({ name: "", email: "", password: "" });
      setFormError(null);
    } catch (error) {
      console.log(error);
      setFormError(error.message);
    }
  };

  return (
    <div className="w-full h-full">
      <div className="bg-transparent shadow-md shadow-gray-500 rounded-2xl">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5 justify-center items-center">
            <h1 className="font-extrabold text-black text-2xl tracking-widest px-4 py-2 font-sans uppercase mt-5">
              Registro
            </h1>
            <div className="flex flex-col items-start justify-center gap-4 w-10/12 p-5">
              <div className="flex flex-col p-2 w-full">
                <label
                  htmlFor="name"
                  className="text-[18px] font-semibold text-gray-600 mb-2 tracking-wider"
                >
                  Nombre :
                </label>
                <input
                  type="text"
                  className="placeholder:italic border border-slate-300 inset-y-2 py-1 px-2 rounded-full ring-1 ring-green-500 focus:outline-none focus:border-green-500 focus:ring-green-500  focus:ring-2 hover:ring-2 placeholder:text-gray-500"
                  placeholder="Ingresa tú nombre"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col p-2 w-full">
                <label
                  htmlFor="email"
                  className="text-[18px] font-semibold text-gray-600 mb-2 tracking-wider"
                >
                  Correo :
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="placeholder:italic border border-slate-300 inset-y-2 py-1 px-2 rounded-full ring-1 ring-green-500 focus:outline-none focus:border-green-500 focus:ring-green-500  focus:ring-2 hover:ring-2 placeholder:text-gray-500"
                  placeholder="Ingresa tú Correo"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col p-2 w-full">
                <label
                  htmlFor="password"
                  className="text-[18px] font-semibold text-gray-600 mb-2 tracking-wider"
                >
                  Contraseña :
                </label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  className="placeholder:italic border border-slate-300 inset-y-2  py-1 px-2 rounded-full ring-1 ring-green-500 focus:outline-none focus:border-green-500 focus:ring-green-500  focus:ring-2 hover:ring-2 placeholder:text-gray-500"
                  placeholder="Ingresar Contraseña"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              {formError && <p style={{ color: "red" }}>Error: {formError}</p>}

              <button
                type="submit"
                className="bg-green-400 py-1 px-4 rounded-full focus:outline-none focus:ring-green-400 focus:ring-2 border border-green-400 w-full lg:w-1/2 xl:w-1/3"
              >
                <span className="text-white font-semibold hover:animate-pulse hover:-tracking-tight">
                  Registrarse
                </span>
              </button>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-3 mb-5">
              <span className="text-gray-500">
                ¿Ya te encuentras registrado?
              </span>
              <Link
                to="/login"
                className="text-black font-semibold tracking-widest"
              >
                Ingresa aquí
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
