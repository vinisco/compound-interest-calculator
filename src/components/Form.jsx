import React from "react";

export default function Form({ label, onChange }) {
  return (
    <div style={styles.form} className="input-field col s4">
      <input
        id="capitalInicial"
        type="number"
        className="validate"
        onChange={onChange}
      />
      <label className="active" htmlFor="capitalInicial">
        {label}
      </label>
    </div>
  );
}

const styles = {
  form: {
    margin: "auto",
    padding: "-5px",
  },
};
