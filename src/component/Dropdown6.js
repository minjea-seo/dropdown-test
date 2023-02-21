import React,{useState} from 'react';
import Sheet from 'react-modal-sheet';
import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css";
function Dropdown6(props) {
  const [startDateValue, setStartDateValue] = useState(new Date())
  const [endDateValue, setEndDateValue] = useState(new Date())
  const [selectingDate, setSelectingDate] = useState(false)
  

    return (
        <>
      <Sheet
       snapPoints={[700, 680, 0, 0]}
      isOpen={props.isOpen} onClose={() => props.setD1DOpen(false)}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Header>
          <div className='flex justify-between items-center mb-4 font-semibold px-4'>
            {(selectingDate)?<ChevronLeftIcon className="-mr-1 ml-2 h-8 w-8" aria-hidden="true"  onClick={()=>{setSelectingDate(false)}}/>:<div className='w-8 h-8'></div>}
              <h2 className='text-xl'>{selectingDate?(selectingDate==='start')?'Choose start date':'choose end date':'Select Time Period'}</h2>
              {(selectingDate)?<div className='w-8 h-8'></div>:<div className='w-8 h-8'></div>}
            </div>
            </Sheet.Header>
          <Sheet.Content disableDrag={true}>
              {(selectingDate===false)?
              <>
                            <div className='bottomSheet'>
                            <ul>
                              <div className='flex gap-2'>
                                <li className='bg-gray-100 w-full text-center border-gray-200 border-2 rounded-lg py-2 font-semibold text-gray-700' onClick={()=>{props.setD1DOpen(false)}}>1D</li>
                                <li className='bg-gray-100 w-full text-center border-gray-200 border-2 rounded-lg py-2 font-semibold text-gray-700' onClick={()=>{props.setD1DOpen(false)}}>5D</li>
                                <li className='bg-gray-100 w-full text-center border-gray-200 border-2 rounded-lg py-2 font-semibold text-gray-700' onClick={()=>{props.setD1DOpen(false)}}>3M</li>
                                <li className='bg-gray-100 w-full text-center border-gray-200 border-2 rounded-lg py-2 font-semibold text-gray-700' onClick={()=>{props.setD1DOpen(false)}}>6M</li>
                              </div>
                              <div className='flex gap-2'>
                                <li className='bg-gray-100 w-full text-center border-gray-200 border-2 rounded-lg py-2 font-semibold text-gray-700' onClick={()=>{props.setD1DOpen(false)}}>YTD</li>
                                <li className='bg-gray-100 w-full text-center border-gray-200 border-2 rounded-lg py-2 font-semibold text-gray-700' onClick={()=>{props.setD1DOpen(false)}}>1Y</li>
                                <li className='bg-gray-100 w-full text-center border-gray-200 border-2 rounded-lg py-2 font-semibold text-gray-700' onClick={()=>{props.setD1DOpen(false)}}>5Y</li>
                                <li className='bg-gray-100 w-full text-center border-gray-200 border-2 rounded-lg py-2 font-semibold text-gray-700' onClick={()=>{props.setD1DOpen(false)}}>Max</li>
                              </div>
                            </ul>
                            <div className='mt-8 flex flex-col'>
                              <span className='mb-2'>Start Date</span>
                              <button className='ddButton' onClick={()=>{setSelectingDate('start')}}>{startDateValue.toString().split(' ').map((item,index)=>{
                                if(index ===1||index ===2||index ===3){
                                  return item
                                }
                                return ''
                              }).join(' ')}</button>
                            </div>
                            <div className='mt-4 flex flex-col'>
                            <span className='mb-2'>End Date</span>
                              <button className='ddButton' onClick={()=>{setSelectingDate('end')}}>{endDateValue.toString().split(' ').map((item,index)=>{
                                if(index ===1||index ===2||index ===3){
                                  return item
                                }
                                return ''
                              }).join(' ')}</button>
                            </div>
                        </div>
                        <div className='px-4 flex flex-row gap-4 mt-6'>
                          <button className='bg-purple-800 text-white font-semibold p-2 rounded-full w-full' onClick={()=>{props.setD1DOpen(false)}}>Done</button>
                          <button className='border-2 border-purple-800 text-purple-800 font-semibold p-2 rounded-full w-full' onClick={()=>{props.setD1DOpen(false)}}>Cancel</button>
                        </div>
                         </>
              :
              (selectingDate==='start')?
              <div className='flex flex-col justify-center items-center h-4/6'>
                <DatePicker
                selected={startDateValue}
                onChange={(date) => setStartDateValue(date)}
                inline
                />
                <button className='bg-purple-800 text-white py-2 px-4 rounded-full mt-4' onClick={()=>{setSelectingDate(false)}}>Save</button>
              </div>
              :
              <div className='flex flex-col justify-center items-center h-4/6'>
                <DatePicker
                selected={endDateValue}
                onChange={(date) => setEndDateValue(date)}
                inline
                />
                <button className='bg-purple-800 text-white py-2 px-4 rounded-full mt-4' onClick={()=>{setSelectingDate(false)}}>Save</button>
              </div>
              }
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onClick={()=>{props.setD1DOpen(false)}} />
      </Sheet>
    </>
    );
}

export default Dropdown6;