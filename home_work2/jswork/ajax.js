/**
 * Created by Igor on 19.05.2017.
 */


function compile() {
    var form = document.forms.ajax;
    var username = form.username.value;
    var email = form.email.value;
    var password = form.password.value;
    var gender = form.gender.value;
    var credit_card = form.credit_card.value;
    var bio = form.bio.value;
    var birth = form.birth.value;
    console.log(username, email, password, gender, credit_card, bio, birth);

    var request = 'username=' + username + '&' + 'email=' + email + '&' + 'password=' + password + '&'
        + 'gender=' + gender + '&' + 'credit_card=' + credit_card + '&' + 'bio=' + bio + '&' + 'birth=' + birth;
    console.log(request);

    var xhr;
    xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost/jswork/validator.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.timeout = 15000;
    xhr.ontimeout = function () {
        console.log('время запроса превысило ожидание');
    };
    var resp;
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                resp = xhr.responseText;
                console.log(resp);
                var jsonPars = JSON.parse(resp);
                var respStatus = jsonPars.result;
                console.log(respStatus);
                console.log(typeof (respStatus));
                if (respStatus) {
                    alert('данные приняты')
                } else {
                    alert('неверно, повторите отправку формы')
                }

            }
        }
    };

    /*xhr.send('username=igormolochnikv&email=vasya@pupkin.ru&password=123456789&gender=m&credit_card=411-11111-1111-1111' +
     '&bio=This is good!&birth=2014-03-01');*/

    xhr.send(request);
}






