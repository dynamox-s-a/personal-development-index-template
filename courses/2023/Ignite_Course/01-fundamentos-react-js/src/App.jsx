import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import "./global.css"
import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Italo"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ullam odio deleniti asperiores quasi repellat, repudiandae, modi dolor a animi voluptas aliquid in explicabo molestiae sequi veniam voluptatem placeat. Fugit!"
          />
        </main>
      </div>
    </div>
  );
}
