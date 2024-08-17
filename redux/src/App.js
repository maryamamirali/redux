import logo from './logo.svg';
import './App.css';
import Route from './config/route';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';
import { useState , useEffect } from 'react';
import Header from './component';
import { store , persistor}  from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

function App() {

const [user , setUser] = useState()

  useEffect(() => {
    onAuthStateChanged(auth , (user) => {
  if(user){
    console.log('user logged in' , user);
  setUser(user)
  const uid = user.uid;
  }else{
  
  }
    })
  }, [])
  
  return (
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
<div className="App">
<Header />
  <h3 className='email'>{user?.email}</h3>
  <Route />
</div>
</PersistGate>
</Provider>
  );
}

export default App;
