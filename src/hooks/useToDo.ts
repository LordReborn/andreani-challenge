import { DataI } from "@/components/Modal";
import { Cards } from "@/interface/todo";
import React, { useEffect, useState } from "react";

const useToDo = () => {
  const [cards, setCards] = useState<Cards>({
    todo: [],
    doing: [],
    done: [],
  });
  const [open, setOpen] = useState<boolean>(false);

  const handleCreate = (e: React.FormEvent, data: DataI) => {
    e.preventDefault();
    if (!data.title || !data.description) return;
    setCards((prev) => ({
      ...prev,
      todo: [
        ...prev.todo,
        {
          id: (Date.now() + Math.random()).toString(36),
          title: data.title,
          description: data.description,
        },
      ],
    }));
    setOpen(false);
  };

  return { cards, setCards, open, setOpen, handleCreate };
};

export default useToDo;
