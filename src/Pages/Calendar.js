import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calendar = () => {
    const [selected, setSelected] =useState(new Date() );
    return (

        <div class="hero min-h-screen bg-base-200">
 
    
    <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            
    />

</div>  
        
    );
};

export default Calendar;