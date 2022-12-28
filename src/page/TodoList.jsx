import '../App.css';
import { useContext, useEffect, useState } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import Main from './Main.jsx';
import Filter from '../Filter';
import { DarkmodeContext } from '../context/DarkmodeContext';

export default function TodoList() {

  const [list, setList] = useState(()=>readList());
  const [check, setCheck] = useState(()=>readCheck());
  const [temp, setTemp] = useState("");

  const { darkMode, toggleDarkMode } = useContext(DarkmodeContext);

  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  
  const addList = function() {
    let newList = [...list];
    let newCheck = [...check];
    newList.push(temp);
    newCheck.push(false)
    setList(newList); 
    setCheck(newCheck);
    setTemp("");
  }

  const deleteList = function (item,i) {
    let newList = list.filter(x => x !== item)
    setList(newList);
    
    let newCheck = [...check];
    newCheck.splice(i, 1);
    setCheck(newCheck);
  }

  const changeCheck = function (i) {
    let copy = [...check];
    copy[i] = !copy[i];
    setCheck(copy);
  }
  
  const changeAll = function () {
    setAll(true);
    setActive(false);
  }

  const changeActive = function () {
    setAll(false);
    setActive(false);
  }

  const changeCompleted = function () {
    setAll(false);
    setActive(true);
  }

  useEffect(() => {
    window.localStorage.setItem('list',JSON.stringify(list));
    window.localStorage.setItem('check',JSON.stringify(check));
  }, [list,check]);

  return (
    <div>
      <div className={`background ${darkMode?"darkColor":"ligthColor"}`} >
        <div className={`viewer ${darkMode?"darkview":"ligthview"}`}> 
          <div className='topbar'>
            <h3 className='icon'>
              {darkMode && <BsFillSunFill className='darkmode'
                onClick={() => toggleDarkMode()}
                style={{ 'cursor': 'pointer' }} />}
              {!darkMode && <BsFillMoonFill
                onClick={() => toggleDarkMode()}
                style={{ 'cursor': 'pointer' }} />}
            </h3>
            <li onClick={changeAll}>All</li>
            <li onClick={changeActive}>Active</li>
            <li onClick={changeCompleted}>Completed</li>
          </div>

          { all && <Main
            list={list}
            temp={temp}
            deleteList={deleteList}
            check={check}
            changeCheck={changeCheck} /> }

          { all==false && <Filter
            list={list}
            temp={temp}
            deleteList={deleteList}
            check={check}
            changeCheck={changeCheck}
            active={ active } />}

          <div className='bottombar'>
            <input type="text" className='write'
              onChange={(e) => setTemp(e.target.value)}
              value={temp}
              placeholder='Add Todo'/>
            <button className='add'
              onClick={ addList }>
                Add</button>
          </div>


        </div>
      </div>
    </div>
  );
}

const readList = () => {
  let getItem = JSON.parse(window.localStorage.getItem('list'));
  return getItem ? getItem : []
}

const readCheck = () => {
  let getItem = JSON.parse(window.localStorage.getItem('check'));
  return getItem ? getItem : []
}