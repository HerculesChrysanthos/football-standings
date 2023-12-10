function loadStandings() {
  const selectedChampionship = document.getElementById('championship').value;
  const standingsContainer = document.getElementById('standings');

  fetch(`standings/${selectedChampionship}.json`)
    .then((response) => response.json())
    .then((data) => {
      const standingsHTML = `
          <h2>Βαθμολογία ${data.championship}</h2>
          <table>
            <tr id="table-header">
              <th class="basic position">Θέση</th>
              <th class="basic team">Ομάδα</th>
              <th>ΑΓ</th>
              <th>Ν</th>
              <th>Ι</th>
              <th>Η</th>
              <th>ΤΥ</th>
              <th>ΤΚ</th>
              <th>ΔΤ</th>
              <th class="basic points">Βαθμοί</th>
            </tr>
            ${data.standings
              .map(
                (standing, index) => `
              <tr id="table-body">
                <td class="basic position">${index + 1}</td>
                <td class="basic team">${standing.team}</td>
                <td>${standing.matches}</td>
                <td>${standing.wins}</td>
                <td>${standing.ties}</td>
                <td>${standing.loses}</td>
                <td>${standing.goals}</td>
                <td>${standing.goalsTaken}</td>
                <td>${standing.goalDif}</td>
                <td class="basic points">${standing.points}</td>
              </tr>
            `
              )
              .join('')}
          </table>
        `;

      standingsContainer.innerHTML = standingsHTML;
    })
    .catch((error) => console.error('Error fetching data:', error));
}
