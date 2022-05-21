window.addEventListener('load', solution);

function solution() {
  const fullNameField = document.getElementById('fname');
  const emailField = document.getElementById('email');
  const phoneNumField = document.getElementById('phone');
  const addressField = document.getElementById('address');
  const postalCodeField = document.getElementById('code');

  let blockField = document.getElementById('block');

  const submitBtn = document.getElementById('submitBTN');
  const editBtn = document.getElementById('editBTN');
  const continueBtn = document.getElementById('continueBTN')
  submitBtn.addEventListener('click', addInfo);
  editBtn.addEventListener('click', editInfo);
  continueBtn.addEventListener('click', finish);

  const ulData = document.getElementById('infoPreview');

  function addInfo(e) {
    e.preventDefault();

    if (fullNameField.value != '' && emailField.value != '') {
      ulData.innerHTML = `<li>Full Name: ${fullNameField.value}</li>
                          <li>Email: ${emailField.value}</li>
                          <li>Phone Number: ${phoneNumField.value}</li>
                          <li>Address: ${addressField.value}</li>
                          <li>Postal Code: ${postalCodeField.value}</li>
                         `
      submitBtn.disabled = true;
      editBtn.disabled = false;
      continueBtn.disabled = false;

      fullNameField.value = '';
      emailField.value = '';
      phoneNumField.value = '';
      addressField.value = '';
      postalCodeField.value = '';


    } else {
      return;
    }
  }
  function editInfo(){

    ulArray = Array.from(ulData.children)

    fullNameField.value = ulArray[0].textContent.split(':')[1];
    emailField.value = ulArray[1].textContent.split(':')[1];
    phoneNumField.value = ulArray[2].textContent.split(':')[1];
    addressField.value = ulArray[3].textContent.split(':')[1];
    postalCodeField.value = ulArray[4].textContent.split(':')[1];

    ulData.innerHTML = '';

    submitBtn.disabled = false;
    editBtn.disabled = true;
    continueBtn.disabled = true;

  }
  function finish(){
    blockField.innerHTML = `<h3>Thank you for your reservation!</h3>`
  }

}
