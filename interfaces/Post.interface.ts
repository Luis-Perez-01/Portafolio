export interface Post {
  _id: string;
  title: string;
  description: string;
  content: string;
  file: string;
  slug?: string;
  createdAt: Date;
  updatedAt: Date;
}
