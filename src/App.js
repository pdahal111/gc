import { Route, Routes } from "react-router-dom";
import Navigation from './routes/navigation/navigation.component'
//import Navigation from "./components/routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Test from "./components/testcomponent/testcomponent.comonent";
import SignIn from '../src/components/sign-in-form/sign-in-form.component' ;

const Shop = () => {
  return <h1>I am the shop</h1>;
};



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="signin" element={<SignIn />}></Route>
      </Route>
      <Route path="test" element={<Test></Test>}></Route>
    </Routes>
  );
};
export default App;
