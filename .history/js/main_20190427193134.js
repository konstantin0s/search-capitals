const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

//search states.json & filter
const searchStates = async searchText => {
  const res = await fetch('./data/state.json');
  const states = await res.json();
 
  //fiter and match text input  
  let matches = states.filter(state => {
    const regEx = new RegExp(`^${searchText}`, 'gi');
  })
  
}

search.addEventListener('input', () => searchStates(search.value));