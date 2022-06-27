import React, { memo, useEffect } from 'react';
import $ from 'jquery';

const jQeuryEx = memo(() => {

    useEffect(()=>{
        //jQuery코드 위치
        $(".target").click((e)=>{
            console.log('클릭됨!');
            $(e.currentTarget).add();
            $("#targetDiv").slideToggle();
        })
    },[])

    return (
        <div>
            <h2>jQuery Ex</h2>
            <button className='target'>버튼</button>

            <div id="targetDiv" style={{
                width:'480px',
                height:'320px',
                backgroundColor:'#f60' 
            }}>Hello World
            </div>
        </div>
    );
});

export default jQeuryEx;