const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

//search states.json & filter
const searchStates = async searchText => {
  const res = await fetch('./data/state.json');
  const states = await res.json();
 
  //fiter and match text input  
  let matches = states.filter(state => {
    const regEx = new RegExp(`^${searchText}`, 'gi');
    return state.name.match(regEx) || state.abbr.match(regEx);

  });

  if (searchText.length === 0) {
    matches = [];
  } 
  
  outputHtml(matches);
}

//show results in HTML
const outputHtml = matches => {
  if (matches.length > 0) {
    const html = matches.map(match => `
    <div class="card card-body mb-4">
          <h4>${match.name} (${match.abbr}) 
          <span class="text-primary">${match.capital}</span>
          <small>Lat: {$match.lat} / Long: ${match.long}</small>
          </h4>
    </div>
    `)
  }
}

search.addEventListener('input', () => searchStates(search.value));