import './App.css';
import { RiDeleteBinFill } from 'react-icons/ri';
import { DarkmodeContext } from './context/DarkmodeContext';
import { useContext } from 'react';

export default function Filter({ list, temp, deleteList, check, changeCheck, active }) {
  
  const { darkMode } = useContext(DarkmodeContext);

  return (
    <div>
      <div className={`main ${darkMode?"darkmain":"lightmain"}`}>
        {
          list.map((item, i) => {
            if (check[i] == active ) {
             return (
                <div className='listbar' key={i}>
                <input type="checkbox" onChange={() => changeCheck(i)}
                  checked={ check[i] } />&nbsp;&nbsp;
                <div className={`listname ${check[i] == true ? "checked" : ""}`}
                  >
                   {item}
                 </div>
                    <span className='iconbtn'>
                      <button className='bin'
                        value={ temp }
                        onClick={ ()=>deleteList(item,i) }>
                        <RiDeleteBinFill />
                    </button>
                   </span>
                </div>
                ) 
            }
        })
        }
        
    </div>
  </div>
  );
}

