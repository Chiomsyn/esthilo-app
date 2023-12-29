interface NavLinksProps {
  links: {
    name: string;
    route: string;
    // icon?: React.JSX.Element;
  }[];
}

interface IconSvgProps {
  size?: number | string;
  width?: number | string;
  height?: number | string;
  className?: string;
  opacity?: number | string;
  onClick?: (event: any) => void;
}

interface ServicesProps {
  title: string;
  description: string;
  icon?: React.JSX.Element;
}[];
