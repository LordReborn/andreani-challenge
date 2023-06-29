import { Card, Cards } from "@/interface/todo";
import React from "react";
import styles from "./table.module.css";

interface PropsTable {
  cards: Cards;
  setCards: React.Dispatch<React.SetStateAction<Cards>>;
}

const Table = ({ cards, setCards }: PropsTable) => {
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, card: Card) => {
    e.dataTransfer.setData("card", JSON.stringify(card));
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    section: "todo" | "doing" | "done"
  ) => {
    const card = JSON.parse(e.dataTransfer.getData("card"));
    setCards((prev) => {
      const sectionsWithOutCard: Cards = {
        ...prev,
        todo: prev.todo.filter((_card) => _card.id !== card.id),
        doing: prev.doing.filter((_card) => _card.id !== card.id),
        done: prev.done.filter((_card) => _card.id !== card.id),
      };
      return {
        ...sectionsWithOutCard,
        [section]: [...sectionsWithOutCard[section], card],
      };
    });
  };

  return (
    <section className={styles.table}>
      <div
        className={styles.section}
        onDrop={(e) => handleDrop(e, "todo")}
        onDragOver={handleDragOver}
      >
        <h1>To do</h1>
        {cards.todo.map((card) => (
          <div
            draggable
            key={card.id}
            onDragStart={(e) => handleDragStart(e, card)}
            className={styles.card}
          >
            <h1>{card.title}</h1>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      <div
        className={styles.section}
        onDrop={(e) => handleDrop(e, "doing")}
        onDragOver={handleDragOver}
      >
        <h1>Doing</h1>
        {cards.doing.map((card) => (
          <div
            draggable
            key={card.id}
            onDragStart={(e) => handleDragStart(e, card)}
            className={styles.card}
          >
            <h1>{card.title}</h1>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      <div
        className={styles.section}
        onDrop={(e) => handleDrop(e, "done")}
        onDragOver={handleDragOver}
      >
        <h1>Done</h1>
        {cards.done.map((card) => (
          <div
            draggable
            key={card.id}
            onDragStart={(e) => handleDragStart(e, card)}
            className={styles.card}
          >
            <h1>{card.title}</h1>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Table;
