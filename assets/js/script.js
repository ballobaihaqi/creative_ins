$(function () {
  // data list paket
  const data = "data.json";
  const listPacket = document.querySelector("#packet-list");

  function getListPacket() {
    fetch(data)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        listPacket.innerHTML = "";
        let pkt = responseJson.packet;
        pkt.forEach((item) => {
          listPacket.innerHTML += `
            <div class="col-sm-3 pb-3">
              <div class="card paket">
                <img src="${item.img}" class="card-img-top" alt="paketA" />
                <div class="card-body">
                  <h5 class="card-title fw-bold">${item.kelas}</h5>
                  <div class="price">
                    <h6 class="card-title pe-2 hargaDisc">${item.hrgDisc}</h6>
                    <h6 class="card-title text-decoration-line-through harga">${item.harga}</h6>
                  </div>
                  <p class="card-text">${item.content}</p>
                  <button type="button" class="btn btn-outline-warning" id="btnPacket" data-bs-toggle="modal" data-bs-target="#orderPacket" disabled>Pesan</button>
                </div>
              </div>
            </div>
          `;
          const button = document.querySelector("#btnPacket");
          if (item.hrgDisc == "Coming Soon") {
            button.disabled = false;
          } else {
            button.disabled = true;
          }
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  // end data list packet

  // untuk menjalankan getListPacket pada saat HTML dijalankan

  document.addEventListener("DOMContentLoaded", getListPacket());

  // enduntuk menjalankan getListPacket pada saat HTML dijalankan
});
