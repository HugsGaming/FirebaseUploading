import './App.css';
import {firebase} from './services/firebase'
import 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import {SignInPage} from './pages/SignInPage.jsx'
import {Home} from './pages/Home.jsx'
import UploadImagePage from './pages/UploadImagePage';

const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);
  return (
    <UploadImagePage/>
  );
}

/*<div>
      <header>

      </header>
      <section>
        {user ? <div><Home/><button onClick={() => {auth.signOut()}}>SignOut</button></div>  : <SignInPage/>}
        {console.log(user)}
        
      </section>
    </div>
  */

export default App;
