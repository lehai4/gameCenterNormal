let $ = document.querySelector.bind(document);
var getBtn = document.querySelector("button");
var getField = document.querySelector('input[type="text"');
var getFieldTest = document.querySelector(".field-test");
var getRamdoms = document.querySelector(".play-pro h2 .number");
// var getBtn1 = document.querySelector("button.btn-cicle");
var ramdom = Math.floor(Math.random() * 10);
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

getBtn.addEventListener("click", () => {
  let result = checkNumber();
  if (result) {
    getField.style.display = "none";
    getFieldTest.innerText = `Số của bạn chọn là: ${getField.value}`;
    Object.assign(getFieldTest.style, {
      color: "white",
      fontWeight: "bold",
      fontSize: "18px",
    });
  } else {
    alert("Giá trị phải là số hoặc không để trống!!");
  }
});
function checkNumber() {
  var svalue = $('input[type="text"').value;
  var regex = /^[0-9]+$/;
  let bool = false;
  if (svalue.match(regex)) {
    bool = true;
  }
  return bool;
}
