async function getCountryData() {
  const capital = document.getElementById('capitalInput').value.trim();
  if (!capital) {
      alert('Proszę wpisać nazwę stolicy!');
      return;
  }

  const url = `https://restcountries.com/v3.1/capital/${capital}`;

  try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok && data.length > 0) {
          const country = data[0];
          displayCountryData(country);
      } else {
          alert('Nie znaleziono kraju o tej stolicy.');
      }
  } catch (error) {
      alert('Wystąpił błąd podczas pobierania danych.');
      console.error(error);
  }
}

function displayCountryData(country) {
  const tableBody = document.querySelector('#countryTable tbody');
  tableBody.innerHTML = ''; // Czyścimy poprzednie dane

  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = country.name.common || 'Brak danych';
  row.appendChild(nameCell);

  const capitalCell = document.createElement('td');
  capitalCell.textContent = country.capital ? country.capital[0] : 'Brak danych';
  row.appendChild(capitalCell);

  const populationCell = document.createElement('td');
  populationCell.textContent = country.population ? country.population.toLocaleString() : 'Brak danych';
  row.appendChild(populationCell);

  const regionCell = document.createElement('td');
  regionCell.textContent = country.region || 'Brak danych';
  row.appendChild(regionCell);

  const subregionCell = document.createElement('td');
  subregionCell.textContent = country.subregion || 'Brak danych';
  row.appendChild(subregionCell);

  tableBody.appendChild(row);
}
