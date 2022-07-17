import react from 'react';
//import {Link} from 'react-router-dom'

export default function SearchNav(){
    return <div id='searchNav'>
        <form onSubmit={(e)=>e.preventDefault()}>
            <label className='search-nav-h'>גיל:</label>
            <RadioSelect name="age" list={["1-2","3-5","6-9","10-14"]}/>
            <label className='search-nav-h'>זמן:</label>
            <RadioSelect name="time" list={["פחות מ20 דקות","שעה","בין שעה לשלוש","יום"]}/>
            <label className='search-nav-h'>חומרים:</label>
            <RadioSelect name="time" list={["ללא חומרים","חומרים ביתיים","חומרים קנויים"]}/>
        </form>
    </div>
}

function RadioSelect({name,list}){
   return list.map(e => {return <div key={e}>
    <label className='search-nav-i'>{e}</label><input type="radio" name={name} className="search-nav-r" value={e} /></div>
   });
}