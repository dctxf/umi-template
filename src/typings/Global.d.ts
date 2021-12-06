declare type MenuNode = {
  id: number;
  path: string;
  name: string;
  icon?: string;
  parentId?: number;
  children?: MenuNode[];
};
