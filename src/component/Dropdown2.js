import React,{useState} from 'react';
import Sheet from 'react-modal-sheet';


function Dropdown2(props) {
  const [startDateValue, setStartDateVaule] = useState('2018-07-22')
  const [endDateValue, setEndDateVaule] = useState('2018-07-22')
    return (
        <>
      <Sheet
       snapPoints={[480, 200, 0, 0]}
      isOpen={props.isOpen} onClose={() => props.setD1BOpen(false)}>
        
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <div className='bottomSheet'>
                <ul>
                  <div className='flex gap-2'>
                    <li className='bg-gray-100 w-full text-center border-gray-200 border-2 rounded-lg py-2 font-semibold text-gray-700' onClick={()=>{props.setD1BOpen(false)}}>1D</li>
                    <li className='bg-gray-100 w-full text-center border-gray-200 border-2 rounded-lg py-2 font-semibold text-gray-700' onClick={()=>{props.setD1BOpen(false)}}>5D</li>
                    <li className='bg-gray-100 w-full text-center border-gray-200 border-2 rounded-lg py-2 font-semibold text-gray-700' onClick={()=>{props.setD1BOpen(false)}}>3M</li>
                    <li className='bg-gray-100 w-full text-center border-gray-200 border-2 rounded-lg py-2 font-semibold text-gray-700' onClick={()=>{props.setD1BOpen(false)}}>6M</li>
                  </div>
                  <div className='flex gap-2'>
                    <li className='bg-gray-100 w-full text-center border-gray-200 border-2 rounded-lg py-2 font-semibold text-gray-700' onClick={()=>{props.setD1BOpen(false)}}>YTD</li>
                    <li className='bg-gray-100 w-full text-center border-gray-200 border-2 rounded-lg py-2 font-semibold text-gray-700' onClick={()=>{props.setD1BOpen(false)}}>1Y</li>
                    <li className='bg-gray-100 w-full text-center border-gray-200 border-2 rounded-lg py-2 font-semibold text-gray-700' onClick={()=>{props.setD1BOpen(false)}}>5Y</li>
                    <li className='bg-gray-100 w-full text-center border-gray-200 border-2 rounded-lg py-2 font-semibold text-gray-700' onClick={()=>{props.setD1BOpen(false)}}>Max</li>
                  </div>
                </ul>
                <div className='mt-8 flex flex-col'>
                  <label htmlFor="start" className='mb-2'>Start date:</label>
                  <input type="date" id="start" name="data-start" value={startDateValue} min="2007-01-01" max="2023-12-31"
                  className='bg-gray-100 p-4 border-2 rounded-xl'
                  onChange={(e)=>{setStartDateVaule(e.target.value)}}
                  />
                </div>
                <div className='mt-4 flex flex-col'>
                  <label htmlFor="end" className='mb-2'>End date:</label>
                  <input type="date" id="end" name="data-end" value={endDateValue} min="2007-01-01" max="2023-12-31"
                  className='bg-gray-100 p-4 border-2 rounded-xl'
                  onChange={(e)=>{setEndDateVaule(e.target.value)}}
                  />
                </div>
            </div>
            <div className='px-4 flex flex-row gap-4 mt-6'>
              <button className='bg-purple-800 text-white font-semibold p-2 rounded-full w-full' onClick={()=>{props.setD1BOpen(false)}}>Done</button>
              <button className='border-2 border-purple-800 text-purple-800 font-semibold p-2 rounded-full w-full' onClick={()=>{props.setD1BOpen(false)}}>Cancel</button>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onClick={()=>{props.setD1BOpen(false)}} />
      </Sheet>
    </>
    );
}

export default Dropdown2;