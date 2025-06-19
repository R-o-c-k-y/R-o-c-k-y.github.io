let worlds = [];

fetch("https://api.tibiadata.com/v4/worlds")
    .then((response) => response.json())
    .then((data) => {
        // Extract the relevant data from the API response
        data.worlds.regular_worlds.forEach((world) => {
            if (world.game_world_type !== "tournament") {
                worlds.push([
          world.name,
          world.players_online,
          world.location,
          world.pvp_type,
        ]);
            }
        });
	const totalOnlineDiv = document.getElementById("total_online");
totalOnlineDiv.innerText = `Players Online: ${data.worlds.players_online}`;


        // Call the addWorldsToTable function to add the worlds to the table
        addWorldsToTable(worlds);

        // Initialize the DataTable
        const table = $("#online").DataTable({
            order: [[0, "asc"]], // sort by first column in ascending order
            pageLength: -1, // show all entries
            lengthChange: false, // disable the entries selector
            info: false, // disable the "Showing 1 to n of n entries" text
            paging: false, // disable pagination
        });
    });

function addWorldsToTable(worlds) {
    const tableBody = document.getElementById("worlds-table-body");
    tableBody.innerHTML = ""; // Clear the table first

    worlds.forEach((world) => {
        const row = document.createElement("tr");

        // Create the name cell and add a link to it
        const nameCell = document.createElement("td");
        const nameLink = document.createElement("a");
        nameLink.setAttribute("href", `https://tibiasocial.com/worlds/${world[0]}`);
        nameLink.setAttribute("target", "_self");
        nameLink.innerText = world[0];
        nameCell.appendChild(nameLink);

        const onlineCell = document.createElement("td");
        onlineCell.innerText = world[1];
        const locationCell = document.createElement("td");
        locationCell.innerText = world[2];
        const pvpTypeCell = document.createElement("td");
        pvpTypeCell.innerText = world[3];
        row.appendChild(nameCell);
        row.appendChild(onlineCell);
        row.appendChild(locationCell);
        row.appendChild(pvpTypeCell);
        tableBody.appendChild(row);
    });
}

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

        // Create the name cell and add a link to it
        const nameCell = document.createElement("td");
        const nameLink = document.createElement("a");
        var formattedName = player[0].replace(/ /g, "+");
        nameLink.setAttribute("href", `https://www.tibia.com/community/?subtopic=characters&name=${formattedName}`);
        nameLink.setAttribute("target", "_blank");
        nameLink.innerText = player[0];
        nameCell.appendChild(nameLink);

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


setTimeout(() => {
  document.location.reload();
}, 300000);
