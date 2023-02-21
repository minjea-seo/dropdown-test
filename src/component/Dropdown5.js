import React,{useState} from 'react';
import Sheet from 'react-modal-sheet';
import { ChevronLeftIcon,CalendarIcon } from '@heroicons/react/20/solid'
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css";
function Dropdown5(props) {
  const [startDateValue, setStartDateValue] = useState(new Date())
  const [endDateValue, setEndDateValue] = useState(new Date())
  const [selectingDate, setSelectingDate] = useState(false)
  const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => {
    return(
    <div className='inputWithCalendarIcon'>
      <input type='text' placeholder={value}></input>
      <CalendarIcon className="-mr-1 ml-2 h-6 w-6" aria-hidden="true" onClick={onClick} />
    </div>)
    }
  );
    return (
        <>
      <Sheet
       snapPoints={[700, 680, 0, 0]}
      isOpen={props.isOpen} onClose={() => props.setD1COpen(false)}>
        
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Header>
          <div className='flex justify-between items-center mb-4 font-semibold px-4'>
            {(selectingDate)?<ChevronLeftIcon className="-mr-1 ml-2 h-8 w-8" aria-hidden="true" />:null}
              <h2 className='text-xl'>Select Time Period</h2>
              {(selectingDate)?<div className='w-8 h-8'></div>:null}
            </div>
            </Sheet.Header>
          <Sheet.Content disableDrag={true}>
            <div className='bottomSheet'>
                <ul>
                  <div className='flex gap-2'>
                    <li className='bg-gray-100 w-full text-center border-gray-200 border-2 rounded-lg py-2 font-semibold text-gray-700' onClick={()=>{props.setD1COpen(false)}}>1D</li>
                    <li className='bg-gray-100 w-full text-center border-gray-200 border-2 rounded-lg py-2 font-semibold text-gray-700' onClick={()=>{props.setD1COpen(false)}}>5D</li>
                    <li className='bg-gray-100 w-full text-center border-gray-200 border-2 rounded-lg py-2 font-semibold text-gray-700' onClick={()=>{props.setD1COpen(false)}}>3M</li>
                    <li className='bg-gray-100 w-full text-center border-gray-200 border-2 rounded-lg py-2 font-semibold text-gray-700' onClick={()=>{props.setD1COpen(false)}}>6M</li>
                  </div>
                  <div className='flex gap-2'>
                    <li className='bg-gray-100 w-full text-center border-gray-200 border-2 rounded-lg py-2 font-semibold text-gray-700' onClick={()=>{props.setD1COpen(false)}}>YTD</li>
                    <li className='bg-gray-100 w-full text-center border-gray-200 border-2 rounded-lg py-2 font-semibold text-gray-700' onClick={()=>{props.setD1COpen(false)}}>1Y</li>
                    <li className='bg-gray-100 w-full text-center border-gray-200 border-2 rounded-lg py-2 font-semibold text-gray-700' onClick={()=>{props.setD1COpen(false)}}>5Y</li>
                    <li className='bg-gray-100 w-full text-center border-gray-200 border-2 rounded-lg py-2 font-semibold text-gray-700' onClick={()=>{props.setD1COpen(false)}}>Max</li>
                  </div>
                </ul>
                <div className='mt-8 flex flex-col'>
                  <span className='mb-2'>Start Date</span>
                  <DatePicker customInput={<ExampleCustomInput />} selected={startDateValue} onChange={(date) =>{ setStartDateValue(date);console.log(date)}} onClick={()=>{console.log('hi')}}/>
                </div>
                <div className='mt-4 flex flex-col'>
                <span className='mb-2'>End Date</span>
                  <DatePicker customInput={<ExampleCustomInput />} selected={endDateValue} onChange={(date) => setEndDateValue(date)} />
                </div>
            </div>
            <div className='px-4 flex flex-row gap-4 mt-6'>
              <button className='bg-purple-800 text-white font-semibold p-2 rounded-full w-full' onClick={()=>{props.setD1COpen(false)}}>Done</button>
              <button className='border-2 border-purple-800 text-purple-800 font-semibold p-2 rounded-full w-full' onClick={()=>{props.setD1COpen(false)}}>Cancel</button>
            </div>

          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onClick={()=>{props.setD1COpen(false)}} />
      </Sheet>
    </>
    );
}

export default Dropdown5;