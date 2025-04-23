export interface IMenuLink {
  label: string;
  href: string;
  stateSetter: () => void;
}