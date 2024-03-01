import React ,{useState} from 'react';
import Expences from './components/Expences/Expences';
import NewExpence from './components/NewExpence/NewExpence';

let DUMMY_EXPENCE = [
  {
    id: 'e1',
    title: 'School Fee',
    amount: 2330,
    date: new Date(2023,5,16)
  },
  {
    id: 'e2',
    title: 'College Fee',
    amount: 9550,
    date: new Date(2022,8,30)
  },
  {
    id: 'e3',
    title: 'Party',
    amount: 2330,
    date: new Date(2023,12,18)
  },
  {
    id: 'e4',
    title: 'Shopping',
    amount: 9652,
    date: new Date(2024,1,1)
  }
];
const App = ()=>{
  const [expences,setExpences] = useState( DUMMY_EXPENCE);
  
  const addExpenceHandler = (expence)=>{
    const UpdatedExpence = [expence,...expences];
    setExpences(UpdatedExpence);
  };
  return(
    <div className='app-container'>
    <h1>Let's Get Started</h1>
    <NewExpence onAddExpence={addExpenceHandler}/>
    <Expences item={expences}/>
    </div>
    
  );
}
export default App;