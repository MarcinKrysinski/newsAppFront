export class News {

  id: string;
  title: string;
  description: string;
  url: string;
  author: string;
  image: string;
  published: string;


  constructor(id: string, title: string, description: string, url: string, author: string, image: string, published: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.url = url;
    this.author = author;
    this.image = image;
    this.published = published;
  }
}
