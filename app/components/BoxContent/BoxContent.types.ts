type itemData = {
  date: string;
  title: string;
  smalltext: string;
  fulltext: string;
  skills: Array<string>;
};

type contentData = {
  className?: any;
  data: itemData;
  children?: React.ReactNode;
};

export type { itemData, contentData };
