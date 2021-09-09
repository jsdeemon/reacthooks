import './App.css';
import useInput from "./hooks/useInput";
import Hover from "./components/Hover";
import {useRef, useState} from "react";
import useHover from "./hooks/useHover";
import List from "./components/List";
import useDebounce from "./hooks/useDebounce";
import axios from 'axios';
import useRequest from "./hooks/useRequest";

function App() {
    const [todos, loading, error] = useRequest(fetchTodos)
  function fetchTodos() {
    return axios.get(`https://jsonplaceholder.typicode.com/todos`)
  }

  if (loading) {
      return <h1>Идет загрузка</h1>
  }

  if (error) {
      return <h1>Произошла ошибка при загрузке данных</h1>
  }

//     const [value, setValue] = useState('');
//
//     const debouncedSearch = useDebounce(search, 500);
//
//     function search(query) {
//         fetch(`https://jsonplaceholder.typicode.com/todos?query=` + query)
//             .then(response => response.json())
//             .then(json => {
//                 console.log(json)
//             })
//     }
//
//     const onChange = (e) => {
//         setValue(e.target.value)
//         debouncedSearch(e.target.value)
//     }
//
// const username = useInput('');
// const password = useInput('');
//
// const ref = useRef();
// const isBlackHover = useHover(ref);

  return (
    <div>
        <div>
            {todos && todos.map((todo, index) =>
                <div
                    key={index}
                    style={{padding: 30, border: '2px solid black'}}>{todo.id}. {todo.title}</div>
            )}
            <div
                style={{height: 20, background: 'green'}} />
        </div>
      {/*<input {...username} type="text" placeholder="username" />*/}
      {/*  <input {...password} type="text" placeholder="password" />*/}

      {/*<button onClick={() => console.log(username.value, password.value)}>Click</button>*/}

        {/*<Hover />*/}
        {/*<div ref={ref} style={{width: 300, height: 300, background: isBlackHover ? 'gray' : 'black'}}>*/}
        {/*</div>*/}
        {/*<List />*/}
        {/*<input type="text"*/}
        {/*value={value}*/}
        {/*       onChange={onChange}*/}
        {/*/>*/}

    </div>
  );
}

export default App;
