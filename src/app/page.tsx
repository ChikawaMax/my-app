import { Header } from "./component/header";
import { Main } from "./component/main";
import { MyButton } from "./component/onClick";


export default function Home() {
  return (
    <div>
      <Header />
      <MyButton />
      <Main 
        name="Normal"
        obj={{name:"モカ",age:6,color:"茶"}}
      />
    </div>
    
  );
}
