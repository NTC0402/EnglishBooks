// let dataAccoount = [
//    {
//        id: 1,
//       username: 'admin',
//        email: 'admin@gmail.com',
//        password: '1',
       
//    },
//    {
//        id: 2,
//        username: 'admin2',
//        email: 'admin2@gmail.com',
//        password: '1',
       
//    },
// ];
// localStorage.setItem('account', JSON.stringify(dataAccoount));

var dataAccoount = JSON.parse(localStorage.getItem('account'));
function checkEmail(email, password, type){

    var exists = false;
    for (let i = 0; i < dataAccoount.length; i++) {
       if(email === dataAccoount[i].email){
            if(type === 'login'){
                if(password === dataAccoount[i].password){
                    return exists = true;
                }else {
                    return exists;
                }
            }

       return exists = true;
       }

    }
    return exists;
}

function handlelogin() {
    event.preventDefault();
    let valueEmail = document.getElementById('exampleInputEmail1').value;
    let valuePassword = document.getElementById('exampleInputPassword1').value;

    if(valueEmail !== '' || valuePassword !== '') {
        if (checkEmail(valueEmail, valuePassword, 'login')){
            alert('Login Success')
            window.location.href='index.html'
        }else{
            alert('Login Fail')
        }

 }else{
    alert('Please enter a values')
 }
    // if(valueEmail === "" || valuePassword === "") {
    //     alert('Please enter a valid value');
    // }else {
    //     let dataAccoount = JSON.parse(localStorage.getItem('account'));

    //     for (let i = 0; i < dataAccoount.length; i++) {
    //         if (valueEmail === dataAccoount[i].email) {
    //             if(valuePassword === dataAccoount[i].password) {
    //                 return alert('Login successful');
    //             }
    //         }else {
    //             console.log(valueEmail);
    //         }
    //     }
    
}

function handleRegister(){
    event.preventDefault(); 
    let valueEmail = document.getElementById('exampleInputEmail2').value;
    let valuePassword = document.getElementById('exampleInputPassword2').value;
    let valueConfirmPassword = document.getElementById('exampleInputPassword3').value;

    if(valueEmail !== '' || valuePassword !== '' || valueConfirmPassword !== ''){
        if(checkEmail(valueEmail)){
            alert('Email already exists')
        }else{
            if(valuePassword === valueConfirmPassword){
                dataAccoount.push({
                    id: dataAccoount.length + 1,
                    email: valueEmail,
                    password: valuePassword
                })
                localStorage.setItem('account',JSON.stringify(dataAccoount))
                alert('Register Successfully')
                window.location.reload()
            }else{
                alert('Confirm Password Failed')
            }
        }
    }else{
        alert('Please Enter Email and Password')
    }

}