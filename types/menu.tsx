export type Menu = {
  id?: number;
  title: string;
  link: string;
  description: string;
  icon?: any;
  subMenu?: Menu[];
};
