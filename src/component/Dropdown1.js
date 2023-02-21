import React from 'react';
import Sheet from 'react-modal-sheet';


function Dropdown1(props) {
    return (
        <>
      <Sheet
       snapPoints={[340, 200, 0, 0]}
      isOpen={props.isOpen} onClose={() => props.setD1Open(false)}>
        
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <div className='bottomSheet'>
                <h2 className='text-2xl font-semibold mb-4'>Frequency</h2>
                <ul>
                    <li className={`bottomSheetSelector ${(props.d1Value==='Daily')?'active':null}`} onClick={()=>{props.setD1Value('Daily');props.setD1Open(false)}}>Daily</li>
                    <li className={`bottomSheetSelector ${(props.d1Value==='Weekly')?'active':null}`} onClick={()=>{props.setD1Value('Weekly');props.setD1Open(false)}}>Weekly</li>
                    <li className={`bottomSheetSelector ${(props.d1Value==='Monthly')?'active':null}`} onClick={()=>{props.setD1Value('Monthly');props.setD1Open(false)}}>Monthly</li>
                </ul>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onClick={()=>{props.setD1Open(false)}} />
      </Sheet>
    </>
    );
}

export default Dropdown1;