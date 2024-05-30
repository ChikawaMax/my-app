import { MyButton } from "../component/backcolor";
import { Header } from "../component/header";
import { Main } from "../component/main";

export default function Home() {
  return (
    <div>
      <div>aaa</div>
      <MyButton />
      <Header />
      <Main
        name="About"
        obj={{ name: "タマ", age: 6, color: "三毛" }}
      />
    </div>


  );
}