form()
function form(){
    const nama = JSON.parse(sessionStorage.getItem("nama")) || [];
    const email = JSON.parse(sessionStorage.getItem("email")) || [];
    const telp = JSON.parse(sessionStorage.getItem("telp")) || [];
    const checkbox = JSON.parse(sessionStorage.getItem("checkbox")) || [];
    const tanggal = JSON.parse(sessionStorage.getItem("tanggal")) || [];
    const jam = JSON.parse(sessionStorage.getItem("jam")) || [];
    const layanan = JSON.parse(sessionStorage.getItem("layanan")) || [];
    const jenis_bayar = JSON.parse(sessionStorage.getItem("jenis_bayar")) || [];
    const komentar = JSON.parse(sessionStorage.getItem("komentar")) || [];
    const indexAcc = localStorage.getItem("indexAcc");
    
    const bio_nama = document.getElementById("bio_nama");
    const bio_email = document.getElementById("bio_email");
    const bio_telp = document.getElementById("bio_telp")
    const bio_checkbox = document.getElementById('bio_checkbox');
    const bio_tanggal = document.getElementById("bio_tanggal");
    const bio_jam = document.getElementById("bio_jam");
    const bio_layanan = document.getElementById("bio_layanan");
    const bio_jenis_bayar = document.getElementById('bio_jenis_bayar');
    const bio_komentar = document.getElementById('bio_komentar');

    bio_nama.innerHTML       ="Nama              : " + nama[indexAcc];
    bio_email.innerHTML      ="Email             : " + email[indexAcc];
    bio_telp.innerHTML       ="Nomor Telpon      : " + telp[indexAcc];
    bio_checkbox.innerHTML   ="Jenis Pelanggan   : " + checkbox[indexAcc];
    bio_tanggal.innerHTML    ="Tanggal Reservasi : " + tanggal[indexAcc];
    bio_jam.innerHTML        ="Jam Reservasi     : " + jam[indexAcc];
    bio_layanan.innerHTML    ="Jenis Layanan     : " + layanan[indexAcc];
    bio_jenis_bayar.innerHTML="Jenis Pembayaran  : " + jenis_bayar[indexAcc];
    bio_komentar.innerHTML   ="Komentar          : " + komentar[indexAcc];
    
    // alert(nama.indexOf(input_nama))
    // const userInputAddress = document.getElementById('address_form');
    // const userInputPhone = document.getElementById('phone_form');
    // const userInputEmail = document.getElementById('email_form');
    // const userInputRadio = document.getElementById('radio_form');  
    // const userInputDesc = document.getElementById('desc_form');
    // const userInputCheckbox = document.getElementById('checkbox_form');

    // userInputAddress.innerHTML =  "Address                     : " + address;
    // userInputPhone.innerHTML =    "Phone Number                : " + phone;
    // userInputEmail.innerHTML =    "Email                       : " + email;
    // userInputRadio.innerHTML =    "Photo Type                  : " + radio;
    // userInputDesc.innerHTML =     "Description                 : " + desc;
    // userInputCheckbox.innerHTML = "Additional Tool Suggestions : " + checkbox;
}