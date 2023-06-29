export interface Card {
  id: string;
  title: string;
  description: string;
}

export interface Cards {
  todo: Card[];
  doing: Card[];
  done: Card[];
  status: "unitialized" | "loaded";
}
