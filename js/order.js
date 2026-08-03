/* ==========================================
   TAHU GEJROT PAKDE BURUNG
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", function () {
const payment = document.getElementById("payment");

if (payment) {
    payment.addEventListener("change", showPaymentInfo);
}

    // Event tombol + dan -
    document.querySelectorAll(".menu-item").forEach(function (item) {

        const plus = item.querySelector(".plus");
        const minus = item.querySelector(".minus");
        const qty = item.querySelector(".qty");

        plus.addEventListener("click", function () {
            qty.value = parseInt(qty.value) + 1;
            updateCart();
        });

        minus.addEventListener("click", function () {

            let jumlah = parseInt(qty.value);

            if (jumlah > 0) {
                qty.value = jumlah - 1;
                updateCart();
            }

        });

    });

    // Delivery / Pickup
    document.getElementById("deliveryMethod")
        .addEventListener("change", updateCart);

    // Submit Form
    document.getElementById("orderForm")
        .addEventListener("submit", function (e) {

            e.preventDefault();

            kirimWhatsApp();

        });

    updateCart();

});

}

/* ==========================================
   UPDATE SHOPPING CART
========================================== */

function updateCart() {

    let subtotal = 0;

    let cartHTML = "";

    document.querySelectorAll(".menu-item").forEach(function (item) {

        const nama = item.dataset.name;

        const harga = parseInt(item.dataset.price);

        const qty = parseInt(item.querySelector(".qty").value);

        if (qty > 0) {

            const totalItem = harga * qty;

            subtotal += totalItem;

            cartHTML += `
            <div class="cart-item">
                ${nama}
                <strong>x${qty}</strong>
                <span>
                Rp${totalItem.toLocaleString("id-ID")}
                </span>
            </div>
            `;

        }

    });

    if (cartHTML === "") {

        cartHTML = "<p>Keranjang masih kosong.</p>";

    }

    document.getElementById("cart").innerHTML = cartHTML;

    let ongkir = 10000;

    if (document.getElementById("deliveryMethod").value === "pickup") {

        ongkir = 0;

    }

    const total = subtotal + ongkir;

    document.getElementById("subtotal").textContent =
        "Rp" + subtotal.toLocaleString("id-ID");

    document.getElementById("ongkir").textContent =
        "Rp" + ongkir.toLocaleString("id-ID");

    document.getElementById("total").textContent =
        "Rp" + total.toLocaleString("id-ID");

}


/* ==========================================
   INFORMASI PEMBAYARAN
========================================== */

function showPaymentInfo() {

    const payment = document.getElementById("payment");

    const info = document.getElementById("payment-info");

    switch (payment.value) {

        case "cod":

            info.innerHTML = `
            <h4>💵 COD</h4>
            <p>Bayar saat pesanan diterima.</p>
            `;
            break;

        case "qris":

            info.innerHTML = `
            <h4>📱 QRIS</h4>
            <img src="qris.png" width="220">
            `;
            break;

        case "dana":

            info.innerHTML = `
            <h4>🔵 DANA</h4>
            <strong>089614001997</strong>
            `;
            break;

        case "gopay":

            info.innerHTML = `
            <h4>🟢 GoPay</h4>
            <strong>089614001997</strong>
            `;
            break;

        case "ovo":

            info.innerHTML = `
            <h4>🟣 OVO</h4>
            <strong>089614001997</strong>
            `;
            break;

        case "transfer":

            info.innerHTML = `
            <h4>🏦 Transfer Bank</h4>

            <p>BCA</p>

            <strong>5491006693</strong>

            <p>a.n. Dwi Widianingtias</p>
            `;
            break;

        default:

            info.innerHTML = "";

    }

}
/* ==========================================
   KIRIM WHATSAPP
========================================== */

function kirimWhatsApp() {

    const nama = document.getElementById("nama").value.trim();

    const wa = document.getElementById("wa").value.trim();

    const alamat = document.getElementById("alamat").value.trim();

    const pedas = document.getElementById("pedas").value;

    const catatan = document.getElementById("catatan").value;

    const metodePengiriman =
        document.getElementById("deliveryMethod")
        .options[
        document.getElementById("deliveryMethod").selectedIndex
        ].text;

    const metodePembayaran =
        document.getElementById("payment")
        .options[
        document.getElementById("payment").selectedIndex
        ].text;

    if (
        nama === "" ||
        wa === "" ||
        alamat === "" ||
        document.getElementById("payment").value === ""
    ) {

        alert("Silakan lengkapi data.");

        return;

    }

    let produkMenu = "";

    let adaPesanan = false;

    document.querySelectorAll(".menu-item").forEach(function (item) {

        const qty = parseInt(item.querySelector(".qty").value);

        if (qty > 0) {

            adaPesanan = true;

            const harga = parseInt(item.dataset.price);

            daftarproduk +=
                "• " +
                item.dataset.name +
                " x" +
                qty +
                " = Rp" +
                (harga * qty).toLocaleString("id-ID") +
                "\n";

        }

    });

    if (!adaPesanan) {

        alert("Silakan pilih menu.");

        return;

    }

    const subtotal =
        document.getElementById("subtotal").textContent;

    const ongkir =
        document.getElementById("ongkir").textContent;

    const total =
        document.getElementById("total").textContent;

    const pesan =

` 🍽️ *PESANAN BARU*                

👤 Nama                
${nama}                

📱 WhatsApp                
${wa}                

📍 Alamat                
${alamat}                

🛒 Pesanan                
${daftarMenu}                

🚚 Pengiriman                
${metodePengiriman}                

🌶️ Pedas                
${pedas}                

💰 Subtotal                
${subtotal}                

🚚 Ongkir                
${ongkir}                

💵 Total                
${total}                

💳 Pembayaran                
${metodePembayaran}                

📝 Catatan                
${catatan}                

Terima kasih 🙏                
TAHU GEJROT PAKDE BURUNG`;                
    const nomorAdmin = "6285774537978";

    window.open(
        "https://wa.me/" +
        nomorAdmin +
        "?text=" +
        encodeURIComponent(pesan),
        "_blank"
    );


}