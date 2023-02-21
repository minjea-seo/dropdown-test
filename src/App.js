import React,{ useState } from 'react';
import './App.css';
import Dropdown1 from './component/Dropdown1';
import Dropdown2 from './component/Dropdown2';
import Dropdown3 from './component/Dropdown3';
import Dropdown4 from './component/Dropdown4';
import Dropdown5 from './component/Dropdown5';
import Dropdown6 from './component/Dropdown6'


function App() {
  const [d1Open,setD1Open] = useState(false)
  const [d1BOpen,setD1BOpen] = useState(false)
  const [d1COpen,setD1COpen] = useState(false)
  const [d1DOpen,setD1DOpen] = useState(false)
  const [d1Value,setD1Value] = useState('Daily')
  const [d2Width, setD2Width] = useState(240)
  
  return (
    <div className="App">
      <header className="App-header font-semibold text-gray-400 bg-gray-50">
        DROPDOWN TEST
      </header>
      <div className="container">
        <p className='mb-16 text-gray-500 text-left'>This is the prototype to test dropdown intereaction in mobile. This prototype is not going to work properly in Desktop view.</p>
        <ul>
          {/* Dropdown 1 */}
          <li className='mb-16'>
            <h3 className='font-semibold mb-4'>Bottom sheet direction</h3>
            <button
            className='SCStyleButton mb-4'
            onClick={()=>{setD1Open(true)}}
            >{`Bottom Sheet A: ${d1Value}`}</button>
            <button
            className='SCStyleButton mb-4'
            onClick={()=>{setD1BOpen(true)}}
            >{`Bottom Sheet B`}</button>
             <button
            className='SCStyleButton mb-4'
            onClick={()=>{setD1COpen(true)}}
            >{`Bottom Sheet C`}</button>
            <button
            className='SCStyleButton'
            onClick={()=>{setD1DOpen(true)}}
            >{`Bottom Sheet D`}</button>
          </li>

          {/* Dropdown 2 */}
          <li className='mb-16'>
            <h3 className='font-semibold mb-4'>Native dropdown direction</h3>
            <select onChange={(e)=>{
              if(e.target.value.length>10){
                setD2Width(240);
              } else{
                setD2Width(e.target.value.length*14);
              }
              }}
              style={{width:d2Width}}
              className="SCStyleDropdown" name="frequency" id="frequency-select">
              <option value="Device Native Dropdown A">Device Native Dropdown A</option>
              <option value="daily" >Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </li>
          {/* Dropdown 3 */}
          <li className='mb-16'>
            <h3 className='font-semibold mb-4'>{`Customized dropdown non mWeb specified`}</h3>
            <div className='mb-4'>
              <Dropdown3/>
            </div>
            <Dropdown4/>
          </li>
        </ul>
        <Dropdown1 isOpen={d1Open} setD1Open={setD1Open} setD1Value={setD1Value} d1Value={d1Value}/>
        <Dropdown2 isOpen={d1BOpen} setD1BOpen={setD1BOpen}/>
        <Dropdown5 isOpen={d1COpen} setD1COpen={setD1COpen}/>
        <Dropdown6 isOpen={d1DOpen} setD1DOpen={setD1DOpen}/>
        <p className='mt-4 text-gray-400'>
        Lorem ipsum dolor sit amet consectetur. Nunc risus nibh adipiscing massa pharetra condimentum. Dui a fusce non id leo id. Lectus vitae fames viverra congue convallis. Diam tempor a diam fames elementum. Sit sagittis adipiscing vitae id adipiscing. Consequat quam nulla lectus enim urna libero habitasse odio egestas. Quis tellus curabitur volutpat neque. Vivamus sit eget turpis neque lorem tempor quis eget. Laoreet duis hac tincidunt consequat sociis leo pulvinar non. Posuere amet suspendisse suscipit pretium non sed ac. Nisi quis magna tincidunt sed massa. Iaculis sed lacus a ipsum ullamcorper purus. Magna neque dolor tellus posuere. Duis at at vulputate id dui mauris mattis netus. Ac pharetra gravida urna proin odio vulputate. Cum nulla donec commodo ac. Neque arcu dolor mattis at velit elit pharetra eget. Dictum vitae facilisis tortor sollicitudin habitant id id diam diam. Vivamus tellus consequat sodales mauris iaculis. Eleifend vulputate cras porttitor pharetra vitae mi eu vehicula interdum. Nisl lobortis malesuada malesuada morbi montes mauris lectus. Vestibulum massa sociis commodo mi sit elit. Nam tellus quam sit ornare magnis at. Ornare feugiat cursus mollis nibh. Quam enim id magna eu. Tincidunt feugiat scelerisque odio volutpat nullam feugiat. Nec eu odio amet elit odio id blandit quisque porta. Erat magna dui pellentesque fringilla et viverra nibh maecenas. Lacus venenatis in massa id.
        </p>
      </div>
    </div>
  );
}

export default App;
