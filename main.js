var getBtn = document.querySelector("button");
var getField = document.querySelector('input[type="text"');
var getFieldTest = document.querySelector(".field-test");
var getRamdoms = document.querySelector(".play-pro h2 .number");
// var getBtn1 = document.querySelector("button.btn-cicle");
var ramdom = Math.floor(Math.random() * 20);
function getRamdom() {
  if (getField.value === "") {
    alert("Chọn số trước nhé !!");
  } else {
    getRamdoms.innerHTML = `${ramdom}`;
    setTimeout(() => {
      if (getField.value != ramdom) {
        alert("Tiếc quá, mời bạn trở lại lần sau!!");

        location.reload();
      } else {
        alert("Chúc mừng bạn đã chiến thắng ");
        if (confirm("Bạn có muốn tiếp tục!") == true) {
          location.reload();
        } else {
          var getString = "HẸN BẠN LẦN SAU";
          document.write(getString);
        }
      }
    }, 1000);
  }
}
getBtn.onclick = (e) => {
  if (getField.value === "") {
    alert("Nhập đi chứ");
  } else {
    getField.style.display = "none";
    getFieldTest.innerText = `Số của bạn chọn là: ${getField.value}`;
    Object.assign(getFieldTest.style, {
      color: "white",
      fontWeight: "bold",
      fontSize: "18px",
    });
  }
};
