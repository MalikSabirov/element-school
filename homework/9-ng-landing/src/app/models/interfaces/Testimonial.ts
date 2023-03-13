export interface Testimonial {
  id: number;
  title: string;
  content: string;
  author: {
    name: string;
    position: string;
    image: string;
  };
}
