export interface Service {
  title: string;
  description: string;
  image: string;
  duration: string;
  price: string;
}

export interface ServiceCategory {
  name: string;
  description: string;
  services: Service[];
}