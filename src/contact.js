
function loadContact() {

    const container = document.querySelector('.main .container');
    container.id = 'contact';

    container.innerHTML = ""


    const phoneNum = document.createElement('p');
    phoneNum.textContent = "📞 123-456-7890"
    container.appendChild(phoneNum);

    const address = document.createElement('p');
    address.textContent = "📍 20 W 34th St., New York, NY 10001"
    container.appendChild(address)

    // const mapImg = document.createElement('iframe');
    // iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6045.293082886198!2d-73.98903325425108!3d40.747802450433284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1706715128984!5m2!1sen!2sus"
    // // <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6045.293082886198!2d-73.98903325425108!3d40.747802450433284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1706715128984!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    // container.appendChild(mapImg)

    container.innerHTML += `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6045.293082886198!2d-73.98903325425108!3d40.747802450433284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1706715636748!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
}

export default loadContact;



