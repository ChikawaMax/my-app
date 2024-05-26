import { MyButton } from "./component/backcolor";
import { Header } from "./component/header";
import { Main } from "./component/main";


export default function Home() {

  return (
    <div>
      <MyButton />
      <Header />
      <Main 
        name="Normal"
        obj={{name:"モカ",age:6,color:"茶"}}
      />
    </div>
    
  );
}
