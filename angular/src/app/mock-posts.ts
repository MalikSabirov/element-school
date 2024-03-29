import { Post } from './Post';
import { Comment } from './Comment';

export const POSTS: Post[] = [
  {
    id: 1,
    userId: 1,
    title: 'TITLE #1',
    body: 'Post body text post body text post body text post body text post body text',
    children: [
      {
        body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
        email: 'Eliseo@gardner.biz',
        id: 1,
        name: 'id labore ex et quam laborum',
        postId: 1,
      },
      {
        body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
        email: 'Eliseo@gardner.biz',
        id: 2,
        name: 'id labore ex et quam laborum',
        postId: 1,
      },
      {
        body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
        email: 'Eliseo@gardner.biz',
        id: 3,
        name: 'id labore ex et quam laborum',
        postId: 1,
      },
    ],
  },
  {
    id: 2,
    userId: 2,
    title: 'TITLE #2',
    body: 'Post body text post body text post body text post body text post body text',
    children: [
      {
        body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
        email: 'Eliseo@gardner.biz',
        id: 4,
        name: 'id labore ex et quam laborum',
        postId: 2,
      },
      {
        body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
        email: 'Eliseo@gardner.biz',
        id: 5,
        name: 'id labore ex et quam laborum',
        postId: 2,
      },
      {
        body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
        email: 'Eliseo@gardner.biz',
        id: 6,
        name: 'id labore ex et quam laborum',
        postId: 2,
      },
    ],
  },
  {
    id: 3,
    userId: 3,
    title: 'TITLE #3',
    body: 'Post body text post body text post body text post body text post body text',
    children: [
      {
        body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
        email: 'Eliseo@gardner.biz',
        id: 7,
        name: 'id labore ex et quam laborum',
        postId: 3,
      },
      {
        body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
        email: 'Eliseo@gardner.biz',
        id: 8,
        name: 'id labore ex et quam laborum',
        postId: 3,
      },
      {
        body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
        email: 'Eliseo@gardner.biz',
        id: 9,
        name: 'id labore ex et quam laborum',
        postId: 3,
      },
    ],
  },
];
