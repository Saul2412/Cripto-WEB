
import { useState } from "react";

function Formulario() {
  const [creado, setCreado] = useState(false);

  return (
    <form className="formulario">
      <div className="campo">
        <label className="label">Moneda de origen</label>
        <select className="select" defaultValue="">
          <option value="">Seleccione</option>
          <option value="USD">Dólar USD</option>
          <option value="MXN">Peso Mexicano</option>
          <option value="EUR">Euro EUR</option>
          <option value="GBP">Libra Esterlina GBP</option>
        </select>
      </div>

      <div className="campo">
        <label className="label">Moneda de destino</label>
        <select className="select" defaultValue="">
          <option value="">Seleccione</option>
          <option value="USD">Dolar USD</option>
          <option value="MXN">Peso Mexicano</option>
          <option value="EUR">Euro EUR</option>
          <option value="GBP">Libra Esterlina GBP</option>
        </select>
      </div>

      <button
        type="button"
        className="btn-cotizar"
        onClick={() => setCreado(true)}
      >
        Cotizar
      </button>

      {creado && <p>Formulario Creado</p>}
    </form>
  );
}

export default Formulario;
