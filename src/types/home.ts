export interface HeroSection {
  title: string;
  buttons: {
    primary: {
      text: string;
      href: string;
    };
    secondary: {
      text: string;
      href: string;
    };
  };
  categories: {
    title: string;
    description: string;
    icon: string;
    href: string;
  }[];
}

export interface WhyUsReason {
  title: string;
  description: string;
  icon: string;
}

export interface InstagramPost {
  img: string;
  caption: string;
  link: string;
}