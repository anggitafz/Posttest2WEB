if (localStorage.getItem('loggedIn') != null){
    document.getElementById("sapa_user").innerHTML = 'Hello ' + localStorage.getItem('loggedIn');
}

function daftar(){
    const input_nama = document.getElementById("nama").value;
    const input_password = document.getElementById("password").value;
    const input_email = document.getElementById("email").value;
    const input_telp = document.getElementById("telp").value
    const input_checkbox = document.getElementsByName('checkbox');
    const input_tanggal = document.getElementById("tanggal").value;
    const input_jam = document.getElementById("jam").value;
    const input_layanan = document.getElementById("layanan").value;
    const input_jenis_bayar = document.querySelector('input[id="bayar"]:checked').value;
    const input_komentar = document.getElementById('komentar').value;

    const username = JSON.parse(localStorage.getItem("username")) || [];
    const password = JSON.parse(localStorage.getItem("password")) || [];
    
    const nama = JSON.parse(sessionStorage.getItem("nama")) || [];
    const email = JSON.parse(sessionStorage.getItem("email")) || [];
    const telp = JSON.parse(sessionStorage.getItem("telp")) || [];
    const checkbox = JSON.parse(sessionStorage.getItem("checkbox")) || [];
    const tanggal = JSON.parse(sessionStorage.getItem("tanggal")) || [];
    const jam = JSON.parse(sessionStorage.getItem("jam")) || [];
    const layanan = JSON.parse(sessionStorage.getItem("layanan")) || [];
    const jenis_bayar = JSON.parse(sessionStorage.getItem("jenis_bayar")) || [];
    const komentar = JSON.parse(sessionStorage.getItem("komentar")) || [];

    // const indexAcc = (sessionStorage.getItem("indexAcc"));
   

    if (username.includes(input_nama)){
        alert("Username Sudah Dimiliki !")
    }
    else{
        // Push username dan password ke dalam local storage
        username.push(input_nama);
        localStorage.setItem("username", JSON.stringify(username));
        
        password.push(input_password);
        localStorage.setItem("password", JSON.stringify(password));
        
        //Push username buat disapa
        localStorage.setItem("loggedIn", (input_nama))
        
        // push index
        const lastIndex = username.length - 1;
        localStorage.setItem("indexAcc", lastIndex)
        
        // Push selain username dan password ke dalam session storage
        // push nama
        nama.push(input_nama);
        sessionStorage.setItem("nama", JSON.stringify(nama));
        
        // push email
        email.push(input_email);
        sessionStorage.setItem("email", JSON.stringify(email));

        // push telp
        telp.push(input_telp);
        sessionStorage.setItem("telp", JSON.stringify(telp));
        
        // push checkbox
        for (var i=0; i<input_checkbox.length; i++) {
            if (input_checkbox[i].checked) {
                checkbox.push(input_checkbox[i].value);
            }
        }
        sessionStorage.setItem("checkbox", JSON.stringify(checkbox));
        
        // push tgl
        tanggal.push(input_tanggal);
        sessionStorage.setItem("tanggal", JSON.stringify(tanggal));
        
        // push jam
        jam.push(input_jam);
        sessionStorage.setItem("jam", JSON.stringify(jam));
        
        // push layanan
        layanan.push(input_layanan);
        sessionStorage.setItem("layanan", JSON.stringify(layanan));
        
        // push jenis bayar
        jenis_bayar.push(input_jenis_bayar);
        sessionStorage.setItem("jenis_bayar", JSON.stringify(jenis_bayar));
        
        // push komentar
        komentar.push(input_komentar);
        sessionStorage.setItem("komentar", JSON.stringify(komentar))

        alert("Sign Up Success")
        document.getElementById("submit").href = "biodata.html"
    }
}

function signin(){
    let usnInput = document.getElementById("usn").value;
    let pswInput = document.getElementById("psw").value;
    
    const usn = JSON.parse(localStorage.getItem("usn")) || [];
    const psw = JSON.parse(localStorage.getItem("psw")) || [];
    
    if (usnInput == ""){
        alert ("Please fill the usn") ;
    }
    else if (pswInput == ""){
        alert ("Please fill the Psw") ;
    }
    else if (usn.includes(usnInput)){
        if (usn.indexOf(usnInput) == psw.indexOf(pswInput)) {
            alert("Welcome "+ usnInput)
            localStorage.setItem("loggedIn", (usnInput))
            document.getElementById("signin").href = "../file-html/index.html"
            localStorage.setItem("indexAcc", (usn.indexOf(usnInput)))
        }
        else if (usn.indexOf(usnInput) != psw.indexOf(pswInput)){
            alert("Invalid username or password")
        }
        else{
            alert ("Invalid username or password")
        }    
    }
    else{
        alert ("Invalid username or password");
    }
}

// function signup(){
//     let usnInput = document.getElementById("usn").value;
//     let pswInput = document.getElementById("psw").value;
//     // let cpswInput = document.getElementById("cpsw").value;
    
//     let usn = JSON.parse(localStorage.getItem("username")) || [];
//     let psw = JSON.parse(localStorage.getItem("password")) || [];
    
//     if (usn.includes(usnInput)){
//         alert("Username already exists!")
//     }
//     // if (pswInput != cpswInput){
//     //     alert("Confirm Password is Wrong!")
//     // }
//     else{
//         usn.push(usnInput);
//         localStorage.setItem("usn", JSON.stringify(usn));

//         psw.push(pswInput);
//         localStorage.setItem("psw", JSON.stringify(psw));
        
//         alert("Sign Up Success");
//         document.getElementById("signup").href = "login.html";
//     }
// }

function signup(){
    let usnInput = document.getElementById("username").value;
    let pswInput = document.getElementById("password").value;
    let cpswInput = document.getElementById("cpsw").value;
    
    let existUsernames = JSON.parse(localStorage.getItem("usn")) || [];
    let psw = JSON.parse(localStorage.getItem("psw")) || [];
    
    if (existUsernames.includes(usnInput)){
        alert("Username already exists!")
    }
    else if (pswInput != cpswInput){
        alert("Confirm Password is Wrong!")
    }
    else{
        existUsernames.push(usnInput);
        localStorage.setItem("usn", JSON.stringify(existUsernames));
        
        psw.push(pswInput);
        localStorage.setItem("psw", JSON.stringify(psw));
        alert("Sign Up Success")
        document.getElementById("signup").href = "login.html"
    }
}