let worlds = [];

fetch("https://api.tibiadata.com/v3/worlds")
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

        // Initialize the DataTable and add the worlds to the table
        const table = $('#online').DataTable({
            "order": [[0, "asc"]], // sort by first column in ascending order
            "pageLength": -1, // show all entries
            "lengthChange": false, // disable the entries selector
            "info": false, // disable the "Showing 1 to n of n entries" text
            "paging": false // disable pagination
        });
        table.rows.add(worlds).draw();
    });


function addWorldsToTable(worlds) {
    const tableBody = document.getElementById("worlds-table-body");
    tableBody.innerHTML = ""; // Clear the table first

    worlds.forEach((world) => {
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        nameCell.innerText = world[0];
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

    $(document).ready(function () {
        $('.sortable').click(function () {
            var sortBy = $(this).data('sort');
            // sort the table using the sortBy variable
        });
    });
    $(document).ready(function () {
        $('.sortable').click(function () {
            var sortBy = $(this).data('sort');
            $('#online').DataTable({
                "order": [[sortBy, "asc"]]
            });
        });
    });
}