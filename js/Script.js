/*
  Fungsi ini menghitung Indeks Massa Tubuh (BMI) berdasarkan input berat, tinggi, usia, dan jenis kelamin yang dimasukkan.
*/

function calculateBMI() {
    // Mengambil nilai input dari elemen HTML
    var berat = parseFloat(document.getElementById('berat').value);
    var tinggi = parseFloat(document.getElementById('tinggi').value);
    var umur = parseInt(document.getElementById('umur').value);
    var gender = document.getElementById('gender').value;

    // Memeriksa apakah nilai input valid
    if (isNaN(berat) || isNaN(tinggi) || isNaN(umur)) {
        // Menampilkan peringatan jika nilai input tidak valid
        var errorMessumur = "Mohon masukkan nilai yang valid untuk berat, tinggi, dan usia.";
        displayAlert(errorMessumur);
        return;
    }

    // Menghitung BMI berdasarkan cara
    var bmi = berat / ((tinggi / 100) * (tinggi / 100));
    
    // Mendapatkan kategori BMI
    var category = getBMICategory(bmi);
    
    // Menampilkan hasil BMI dan kategori
    var hasil = "BMI Anda adalah: " + bmi.toFixed(2) + "<br>";
    hasil += "Kategori: " + category + "<br>";
    hasil += "Usia: " + umur + "<br>";
    hasil += "Jenis Kelamin: " + gender.charAt(0).toUpperCase() + gender.slice(1);

    document.getElementById('hasil').innerHTML = hasil;
}

// Fungsi untuk menampilkan peringatan dalam bentuk popup
function displayAlert(message) {
    var alertDiv = document.createElement("div");
    alertDiv.classList.add("alert");

    var closeButton = document.createElement("span");
    closeButton.classList.add("close-button");
    closeButton.innerHTML = "&times;";
    closeButton.onclick = function() {
        alertDiv.style.display = "none";
    };

    var title = document.createElement("div");
    title.classList.add("alert-title");
    title.textContent = "Peringatan";

    var messageElement = document.createElement("div");
    messageElement.classList.add("alert-message");
    messageElement.textContent = message;

    alertDiv.appendChild(closeButton);
    alertDiv.appendChild(title);
    alertDiv.appendChild(messageElement);

    // Tambahkan pesan peringatan ke dalam body
    document.body.appendChild(alertDiv);

    // Set posisi pesan peringatan ke tengah layar
    alertDiv.style.position = "fixed";
    alertDiv.style.top = "50%";
    alertDiv.style.left = "50%";
    alertDiv.style.transform = "translate(-50%, -50%)";
}


// Fungsi untuk menentukan kategori BMI dan saran
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Kurus, BMI kurang dari 18.5. Disarankan memperhatikan asupan makanan dan memastikan nutrisi cukup.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal, BMI 18.5 - 24.9. Berat badan sesuai untuk tinggi badan. Disarankan menjaga pola makan sehat dan aktifitas fisik.";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Gemuk, BMI 25 - 29.9. Mungkin mengalami overweight. Disarankan evaluasi pola makan dan meningkatkan aktivitas fisik.";
    } else {
        return "Obesitas, BMI 30 atau lebih. Kondisi obesitas yang signifikan. Disarankan mencari bantuan medis dan membuat perubahan gaya hidup untuk mengelola risiko penyakit.";
    }
}

// Fungsi untuk membuka portofolio pembuat kalkulator BMI
function goToPortfolio() {
    window.open('https://portofolioaji.my.id/', '_blank');
}
