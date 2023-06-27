import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import styles from './app.module.css'


import ClassClick from './components/ClassClick';
import Counter from './components/Counter';
import Form from './components/Form';
import FunctionClick from './components/FunctionClick';
import Greet from './components/Greet';
import Inline from './components/Inline';
import Message from './components/Message';
import NameList from './components/NameList';
import Newsletter from './components/Newsletter';
import Person from './components/Person';
import StyleSheet from './components/StyleSheet';
import Superhero from './components/Superhero';
import UserGreeting from './components/UserGreeting';
import Welcome from './components/Welcome';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import DataFetchingOne from './components/DataFetchingOne';
import DataFilm from './components/DataFilm';
import { UserProvider } from './components/UserContext';
import ComponentG from './components/ComponentG';
import DataFetchAll from './components/DataFetchAll';
import DataFetchTodos from './components/DataFetchTodos';
import DataFetchAllReducer from './components/DataFetchAllReducer';
import Home from './components/Home/Home';
import Service from './components/Services/Service';
import Profil from './components/Profil/Profil';
import NotFound from './components/NotFound/NotFound';
import Developpement from './components/Services/Developpement/Developpement';
import Marketing from './components/Services/Marketing/Marketing';
import Admin from './components/Admin/Admin';
import GestionPost from './components/Admin/GestionPost/GestionPost';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import AllUser from './components/AllUser/AllUser';
import AllPosts from './components/AllPosts/AllPosts';
import AllFilm from './components/AllFilm/AllFilm';
import OneFilm from './components/OneFilm/OneFilm';
import NewFilm from './components/NewFilm/NewFilm';



import Updatetest from './components/updatetest';
import UpdateFilm from './components/UpdateFilm/UpdateFilm';
import ImageUpload from './components/ImageUpload/ImageUpload';
import MultipleImageUpload from './components/MultipleImagesUpload/MultipleImageUpload';
import AddBlog from './components/AddBlog/AddBlog';
import MyBlog from './components/MyBlog/MyBlog';

export const CountContext =React.createContext();

function App() {
  const initialState = 0;

  const reducer = (state, action) =>{
    switch(action){
      case 'increment': return state+1

      case 'decrement': return state-1
      
      case 'reset': return initialState
      
      default: return state
    }
  }
  const [count, dispatch] = useReducer(reducer, initialState)

  

  {/* 
      <UserProvider value={"Fred"} >
        <ComponentG />
      </UserProvider> */}
  
  
  {/* 
      <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider> */}
  
      {/* <DataFetchingOne /> */}
      {/* <DataFetchAll /> */}
  
      {/* <DataFetchTodos /> */}
  
      {/* <DataFetchAllReducer /> */}
      {/* <DataFilm /> */}
      
        {/* <Message /> */}
  
        {/* <Counter value={5} /> */}
  
        {/* <FunctionClick />
        <ClassClick />
        <UserGreeting /> */}
        {/* <NameList />  */}
        {/* <Person/> */}
  
        {/* <Form /> */}
  
        {/* <Newsletter /> */}
  
        {/* <StyleSheet primary='primary'/>
        <Inline />
  
        <h1 className={styles.success}>Success</h1> */}
  
        {/* <Greet name="Thomas" age="23 ans">
          Thomas est un super gars parce qu'il adore React !
        </Greet>
        
        <Greet name="Toto" age="90 ans"/>
        <Greet name="Zaid" age="33 ans"/> */}
  
        {/* <Superhero name="Bruce" hero="Batman">
          This is children props
        </Superhero>
        <Superhero name="Clark" hero="Superman" />
        <Superhero name="Diana" hero="Wonder Woman" />
   */}
  {/* 
        <Welcome name= "thomas" age="23 ans" />
        <Welcome name= "Toto" age="90 ans" />
        <Welcome name= "John" age="33 ans" /> */}
  
  

  return (  
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Service />}>
          <Route path='/services/developpement' element={<Developpement />} />
          <Route path='/services/marketing' element={<Marketing /> } />
        </Route>

        <Route path='/admin' element={<Admin />}>
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/gestionpost' element={<GestionPost/> } />
        </Route>

        <Route path='/profile/:id' element={<Profil />} />

        <Route path='/allusers' element={<AllUser/>} />
        <Route path='/allposts' element={<AllPosts/>} />
        
        <Route path='/allfilm' element={<AllFilm />} />
        
        <Route path='/film' element={<OneFilm />} />

        <Route path='/newFilm' element={<NewFilm />} />

        <Route path='/updatefilm/:id' element={<UpdateFilm />} />

        <Route path='/imageupload' element={<ImageUpload />} />

        <Route path='/multipleupload' element={<MultipleImageUpload />} />
        <Route path='/updatefilm' element={<UpdateFilm />} />
        <Route path='/addblog' element={<AddBlog />} />
        <Route path='/myblog' element={<MyBlog />} />
        

        
        <Route path='/*' element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;
