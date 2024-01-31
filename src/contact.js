
function loadContact() {

    const container = document.querySelector('.main .container');
    container.id = 'contact';

    container.innerHTML = ""

    const phone = document.createElement('div');
    phone.classList.add('phone')
    container.appendChild(phone)

    const phoneImg = document.createElement('svg');
    phone.appendChild(phoneImg);

    const phoneNum = document.createElement('p');
    phoneNum.textContent = "📞 123-456-7890"
    phone.appendChild(phoneNum);

}

export default loadContact;



