let btnModal = document.querySelector('.open-modal');
let modalWindow = document.querySelector('.modal');
let closeModal = document.querySelector('.close-modal');
let sex = document.querySelector('.sex');
let nameVal = document.querySelector('.name > input');
let namePlaceholder = document.querySelector('.name > input[placeholder]');
let age = document.querySelector('.age');
let birthDay;
let res = document.querySelector('.result');


sex.addEventListener('change', () => {
    let name = document.querySelector('.name');
    if(sex.value === ''){
        name.classList.remove('show');
        res.innerHTML = 'Выберите пол';
        return;
    }

    if(sex.value === 'female'){
        nameVal.setAttribute('placeholder', 'Зина')
    }

    if(sex.value === 'male'){
        nameVal.setAttribute('placeholder', 'Иван')
    }

    res.innerHTML = '';
    name.classList.add('show');
    nameVal.value = '';
    age.classList.remove('show');
});
let addName = document.querySelector('.age-add');
let startVal = addName.innerHTML;

const ucFirst = (string) => {
    return string[0].toUpperCase() + string.slice(1);
};

const goodName = (name) => {
    return ucFirst(name.toLowerCase());
};

const checkAdult = () =>{
    let dateBirth = Number(moment(birthDay.value, 'DD.MM.YYYY').format('x'));
    let isAdultStamp = Number(moment(dateBirth, 'x').add(18, 'years').format('x'));
    let now = Number(moment().format('x'));
    if(isAdultStamp < now){
        res.innerHTML = goodName(nameVal.value) + ', ты уже взрослый';
    }else{
        res.innerHTML = goodName(nameVal.value) + ', подрости малеха';
    }
};

const checkSex = () => {
    if(sex.value === 'male' && nameVal.value !== ''){
        age.classList.add('show');
        res.innerHTML = '';
        
        addName.innerHTML = goodName(nameVal.value) + ', ' + startVal;
        birthDay = document.querySelector('.age > input');
        if(birthDay.value !== ''){
            checkAdult();
        }
        birthDay.addEventListener('blur', checkAdult);
      
    }else if(sex.value === 'female' && nameVal.value !== ''){
        age.classList.remove('show');

        res.innerHTML = nameVal.value + ', Вы прекрасны. И у девушек не спрашивают возраст!'
    }else{
        age.classList.remove('show');
        res.innerHTML = 'Введите имя';
    }
};

nameVal.addEventListener('blur', checkSex);   


btnModal.addEventListener('click', () => {
    modalWindow.classList.add('active');
    console.log(btnModal);
});

closeModal.addEventListener('click', () => {
    modalWindow.classList.remove('active');
});
