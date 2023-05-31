import { Post } from "./Post";
import { Header } from "./components/Header";
import "./global.css"

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Italo"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ullam odio deleniti asperiores quasi repellat, repudiandae, modi dolor a animi voluptas aliquid in explicabo molestiae sequi veniam voluptatem placeat. Fugit!"
      />
    </div>
  );
}
