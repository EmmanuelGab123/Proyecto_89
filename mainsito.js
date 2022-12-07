function addUser(){
    var player1_Name = document.getElementById("jugador1_name").value;
    var player2_Name = document.getElementById("jugador2_name").value;
    localStorage.setItem("player1_Name",player1_Name);
    localStorage.setItem("player2_Name",player2_Name);
    window.location.replace("game_page.html");
}