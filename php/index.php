<?php                   
include "header_alt.php";                 
?>

<body>
    <div id="mainwrapper">
        <header>
            <a href="https://www.tibiasocial.com" title="Link">
                <div id="logo">
                    <img src="images/logo.png" alt="Tibia Social Logo">
                    <!-- Logo text -->
                    <b>TibiaSocial</b>
                </div>
            </a>
            <nav><a href="#" title="Link">Worlds</a> <a href="#" title="Link">Players&nbsp;</a> <a href="#" title="Link">Statistics&nbsp;</a></nav>
        </header>
        <div id="content">
            <section id="mainContent">
                <h1>
                    <div id="total_online"></div>
                </h1>
                <table id="online" class="table table-striped">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col" class="sortable" data-sort="name">World</th>
                            <th scope="col" class="sortable" data-sort="players_online">Online</th>
                            <th scope="col" class="sortable" data-sort="location">Location</th>
                            <th scope="col" class="sortable" data-sort="pvp_type">PvP Type</th>
                        </tr>
                    </thead>
                    <tbody class="table table-hover table-dark" id="worlds-table-body">
                        <!-- The table rows will be added here dynamically -->
                    </tbody>
                </table>
            </section>

<?php
include "footer.php";                
?>

        </div>
    </div>
    <!-- Bootstrap Bundle with Popper -->
    <script src="js/bootstrap.bundle.js"></script>
</body>

</html>
