const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

//search states.json & filter
const searchStates = async searchText => {
  const res = await fetch('../data/state.json');
}

search.addEventListener('input', () => searchStates(search.value));