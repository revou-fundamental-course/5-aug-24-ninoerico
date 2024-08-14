function formvalidate() {
    let inputWeight = document.getElementById('input-weight').value;
    let inputHeight = document.getElementById('input-height').value;
    let gender = document.querySelector('input[name="jenis-kelamin"]:checked');

    // Validasi input
    if (!gender) {
        alert('Pilih jenis kelamin Anda.');
        return;
    }

    if (inputWeight === "" || inputHeight === "") {
        alert('Pastikan semua kolom telah diisi.');
        return;
    }

    inputWeight = parseFloat(inputWeight);
    inputHeight = parseFloat(inputHeight);

    if (isNaN(inputWeight) || isNaN(inputHeight) || inputWeight <= 0 || inputHeight <= 0) {
        alert('Masukkan nilai berat dan tinggi badan yang valid.');
        return;
    }

    let bmi = calculateBMI(inputWeight, inputHeight);
    let category = getBMICategory(bmi);
    document.getElementById('bmi-result').value = bmi.toFixed(2);
    document.getElementById('bmi-category').value = category;

    console.log('form submitted');
}

function calculateBMI(weight, height) {
    height = height / 100; // Mengubah tinggi dari cm ke meter
    return weight / (height * height);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Anda termasuk kategori kurang berat badan.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'Anda termasuk kategori berat badan sehat.';
    } else if (bmi >= 25 && bmi < 29.9) {
        return 'Anda termasuk kategori kelebihan berat badan.';
    } else {
        return 'Anda termasuk kategori obesitas.';
    }
}
