export interface Link {
  label: string,
  url: string,
  active: boolean
}

export default interface NavigationProps {
  links: Link[];
  onNavigation?: () => Promise<void>;
}