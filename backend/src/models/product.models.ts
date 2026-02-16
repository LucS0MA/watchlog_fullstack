export class Product {
  description: string;
  image_url: string;
  name: string;
  price: number;
  stock: number;

  constructor(
    name: string,
    description: string,
    price: number,
    image_url: string,
    stock: number,
  ) {
    this.description = description;
    this.image_url = image_url;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}
