function Addplayers(){
    var nameholder=document.getElementById("input1").value;
    var nameholder2=document.getElementById("input2").value;
    localStorage.setItem("player1name",nameholder);
    localStorage.setItem("player2name",nameholder2);
    window.location="game_page.html";
}
