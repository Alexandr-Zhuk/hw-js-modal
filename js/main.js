let btnModal = document.querySelector('.open-modal');
let modalWindow = document.querySelector('.modal');
let closeModal = document.querySelector('.close-modal');
let sex = document.querySelector('.sex');

sex.addEventListener('change', () => {
    let age = document.querySelector('.age');
    let res = document.querySelector('.result')

    if(sex.value === 'male'){
        age.classList.add('show');
        res.innerHTML = '';
        let birthDay = document.querySelector('.age > input');

        birthDay.addEventListener('blur', () => {
            let dateBirth = Number(moment(birthDay.value, 'DD.MM.YYYY').format('x'));
            let isAdultStamp = Number(moment(dateBirth, 'x').add(18, 'years').format('x'));
            let now = Number(moment().format('x'));
            if(isAdultStamp < now){
                res.innerHTML = 'Ты уже взрослый';
            }else{
                res.innerHTML = 'Братан, подрости малеха';
            }
        });
      
        

    }else if(sex.value === 'female'){
        age.classList.remove('show');
        res.innerHTML = 'У девушек не спрашивают возраст!'
    }else{
        age.classList.remove('show');
        res.innerHTML = 'Для начала выберите пол';
    }
});


btnModal.addEventListener('click', () => {
    modalWindow.classList.add('active');
    console.log(btnModal);
});

closeModal.addEventListener('click', () => {
    modalWindow.classList.remove('active');
});
