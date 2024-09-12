const contactData = [];

function validarCampos() {
  //pega os inputs do form//
  const getName = document.querySelector("#name").value;
  const getAddress = document.querySelector("#address").value;
  const getTelphone = document.querySelector("#telphone").value;
  const getEmail = document.querySelector("#email").value;
  const getDate = document.querySelector("#date").value;

  // Valida se todos os campos estão preenchidos
  if (!getName || !getAddress || !getTelphone || !getEmail || !getDate) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const id = contactData.length + 1;

  personData = {
    id: id,
    name: getName,
    address: getAddress,
    telphone: getTelphone,
    email: getEmail,
    birthdaT: getDate,
  };

  contactData.push(personData);
  console.log(contactData);
}

//insere os dados no array

const getSendButton = document.querySelector("#send");

getSendButton.addEventListener("click", (e) => {
  e.preventDefault();
  validarCampos();
});
