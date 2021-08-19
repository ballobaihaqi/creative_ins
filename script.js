$(function () {
  var data_Modal = `<div class="form-floating mb-3">
    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
    <label for="floatingInput">E-mail</label>
    </div>

    <div class="form-floating mb-3">
    <input type="text" class="form-control" id="floatingInput" placeholder="Nama Lengkap" />
    <label for="floatingInput">Nama Lengkap</label>
    </div>

    <div class="form-floating mb-3">
    <input type="text" class="form-control" id="floatingInput" placeholder="Jl.Samping" />
    <label for="floatingInput">Alamat</label>
    </div>

    <div class="form-floating mb-3">
    <input type="text" class="form-control" id="floatingInput" placeholder="081234567890" />
    <label for="floatingInput">No. Telepon/WhatsApp</label>
    </div>`;

  var data_packet = `<div class="form">
    <input type="text" class="form-control packet" id="floatingInputValue" placeholder="name@example.com" disabled>
    </div>`;

  $(".btnPacket1").click(function () {
    $(".modal-body").html("");
    $(".modal-body").append(data_Modal, data_packet);
    $(".packet").val("Graphic Design");
  });

  $(".btnPacket2").click(function () {
    $(".modal-body").html("");
    $(".modal-body").append(data_Modal, data_packet);
    $(".packet").val("Video Editing");
  });

  $(".btnPacket3").click(function () {
    $(".modal-body").html("");
    $(".modal-body").append(data_Modal, data_packet);
    $(".packet").val("Copywriting");
  });

  $(".btnPacket4").click(function () {
    $(".modal-body").html("");
    $(".modal-body").append(data_Modal, data_packet);
    $(".packet").val("Microsoft Office");
  });

  //   if ($("#btnPacket1").click()) {
  //     console.log("tes");
  //     $(".modal-body").html("");
  //     $(".modal-body").append(data_Modal);
  //     $(".modal-body").append(data_packet);
  //     $(".packet").val("Graphic Design");
  //   } else if ($("#btnPacket2").click()) {
  //     console.log("tes");
  //     $(".modal-body").html("");
  //     $(".modal-body").append(data_Modal);
  //     $(".modal-body").append(data_packet);
  //     $(".packet").val("Video Editing");
  //   }
});
