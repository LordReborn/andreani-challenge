import React, { useEffect, useState } from "react";
import styles from "./modal.module.css";

export interface DataI {
  title: string;
  description: string;
}

interface PropsModal {
  open: boolean;
  handleClose: () => void;
  handleCreate: (e: React.FormEvent, data: DataI) => void;
}

const Modal = ({ open, handleClose, handleCreate }: PropsModal) => {
  const [data, setData] = useState<DataI>({ title: "", description: "" });

  useEffect(() => {
    if (!open) setData({ title: "", description: "" });
  }, [open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {open && <div className={styles.backdrop} onClick={handleClose} />}
      <dialog open={open} className={styles.modal}>
        <div className={styles.buttonClose}>
          <button onClick={handleClose}>✕</button>
        </div>
        <form
          onSubmit={(e) => handleCreate(e, data)}
          className={styles.createForm}
        >
          <label>Titulo</label>
          <input name="title" value={data.title} onChange={handleChange} />
          <label>Descripcion</label>
          <input
            name="description"
            value={data.description}
            onChange={handleChange}
          />

          <button type="submit">Crear</button>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
