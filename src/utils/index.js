const BASE_HOST = 'http://localhost:3001'
export const GetAllTODOs = () => {
  return fetch (BASE_HOST+'/todos', {headers: {'Authorization': 'new', 'Content-Type':'application/json'}})
}

export const AddNewTodo = (todo) => {
  return fetch(BASE_HOST+'/todos',{
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {'Authorization': 'new', 'Content-Type':'application/json'}
  })
}
export const Update = (todo) => {
  return fetch(BASE_HOST+'/todos/'+todo.id,{
    method: 'PUT',
    body: JSON.stringify({item:todo.item}),
    headers: {'Authorization': 'new', 'Content-Type':'application/json'}
  })
}

export const RemoveTodo = (id) => {
  return fetch(BASE_HOST+'/todos/'+id,{
    method: 'DELETE',
    body: JSON.stringify({}),
    headers: {'Authorization': 'new', 'Content-Type':'application/json'}
  })
}




export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & (0x3 | 0x8));
    return v.toString(16);
  });
}