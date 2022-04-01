
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../sign-up-form/sign-up-form.component";
const SignIn = () => {
    const logGoogleUser= async ()=>{
        const {user}= await signInWithGooglePopup();
      
        createUserDocumentFromAuth(user); 
        

    }
  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}> Sign In With Google PopUP</button>
      <SignUpForm></SignUpForm>
    </div>
  );
};
export default SignIn;
