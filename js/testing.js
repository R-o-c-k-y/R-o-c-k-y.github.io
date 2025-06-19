// Get the current page name
var pageName = window.location.pathname.split("/").pop().replace(".html", "");

let players = [];

fetch("https://api.tibiadata.com/v3/world/" + pageName)
  .then(response => response.json())
  .then(data => {
    // Get the number of players online from the API data
    var playersOnline = data.worlds.world.players_online;

    // Create the div container to display the number of players online
    var playerCountDiv = document.getElementById("player-count");
    playerCountDiv.innerHTML = "Players Online " + pageName + ": " + playersOnline;

    // Extract the relevant data from the API response
    data.worlds.world.online_players.forEach(player => {
        players.push([
            player.name,
            player.level,
            player.vocation,
        ]);
    });

    // Call the addPlayersToTable function to add the players to the table
    addPlayersToTable(players);

    // Initialize the DataTable
    const table = $("#players").DataTable({
        order: [[0, "asc"]], // sort by first column in ascending order
        pageLength: -1, // show all entries
        lengthChange: false, // disable the entries selector
        info: false, // disable the "Showing 1 to n of n entries" text
        paging: false, // disable pagination
    });
});

function addPlayersToTable(players) {
    const tableBody = document.getElementById("players-table-body");
    tableBody.innerHTML = ""; // Clear the table first

    players.forEach((player) => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.innerText = player[0];

        const levelCell = document.createElement("td");
        levelCell.innerText = player[1];

        const vocationCell = document.createElement("td");
        vocationCell.innerText = player[2];

        row.appendChild(nameCell);
        row.appendChild(levelCell);
        row.appendChild(vocationCell);
        tableBody.appendChild(row);
    });
}
