function kirimData(){
    var name = document.getElementById("nama").value
    var saran = document.getElementById("saran").value
    var feeling = document.querySelector("Input[name=feeling]:checked").value
    var pendapat = document.getElementById("pendapat").value
    var pertama = document.getElementById("pertama").value
    var tanggal = document.getElementById("date").value

    alert(
        "Nama : " + name +
        "\nTanggal : " + tanggal +
        "\nPertama mendengar lagu dari : " + pertama +
        "\nFeeling saat mendengar lagu : " + feeling +
        "\nPerndapat mengenai lagu : " + pendapat +
        "\nSaran atau Kritik : " + saran 
    )
}