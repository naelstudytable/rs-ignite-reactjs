import { Header } from "./components/Header";

import styles from './App.module.css'

import './global.css'
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/naelallves.png',
      name: 'Nael Alves',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies ultricies, nunc nisl ultricies nisl, nec ultricies nisl nisl non nisl. Sed euismod, nisl vel ultricies ultricies, nunc nisl ultricies nisl, nec ultricies nisl nisl non nisl.' },
      { type: 'link', content: 'aqui' },
    ],
    publishedAt: new Date('2022-12-20 10:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/naelallves.png',
      name: 'Natanael',
      role: 'Full Stack'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet' },
      { type: 'link', content: 'aqui2' },
    ],
    publishedAt: new Date('2022-12-01 22:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {
            posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}
