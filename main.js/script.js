const contactData = [];

function validarCampos() {
  //pega os inputs do form//
  const getName = document.querySelector("#name").value;
  const getAddress = document.querySelector("#address").value;
  const getTelphone = document.querySelector("#telphone").value;
  const getEmail = document.querySelector("#email").value;
  const getDate = document.querySelector("#date").value;

  // pegar os check box e radio//

  const id = contactData.length + 1;

  personData = {
    id: id,
    name: getName,
    address: getAddress,
    telphone: getTelphone,
    email: getEmail,
    birthdat: getDate,
  };

  contactData.push(personData);
}

//insere os dados no array

const getSendButton = document.querySelector("#send");

getSendButton.addEventListener("click", (e) => {
  e.preventDefault();
  validarCampos();
});
