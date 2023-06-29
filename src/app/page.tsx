"use client";
import Modal from "@/components/Modal";
import Table from "@/components/Table";
import useToDo from "@/hooks/useToDo";
import React from "react";
import styles from "./page.module.css";

export default function Home() {
  const { cards, setCards, open, setOpen, handleCreate } = useToDo();

  return (
    <main>
      <button onClick={() => setOpen(true)} className={styles.buttonNew}>
        Crear nueva card
      </button>
      <Table cards={cards} setCards={setCards} />
      <Modal
        open={open}
        handleClose={() => setOpen(false)}
        handleCreate={handleCreate}
      />
    </main>
  );
}
