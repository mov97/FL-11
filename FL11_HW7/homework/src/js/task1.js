let user = {
    email: 'user@gmail.com',
    password: 'UserPass'
};

let admin = {
    email: 'admin@gmail.com',
    password: 'AdminPass'
};

let email = prompt('Enter your email', '');
const EmailLengthMin = 6;
const PasswordLengthMin = 5;

if (email === null || email === '') {
    alert('Canceled.');
} else if (email.length < EmailLengthMin) {
    alert('I don`t know any emails having name length less than 6 symbols');
} else if (email === user.email || email === admin.email) {
    let password = prompt('Enter your password', '');

    if (password === null || password === '') {
        alert('Canceled.');
    } else if (email === user.email && password === user.password ||
               email === admin.email && password === admin.password) {
        if (confirm('Do you want to change your password?')) {
            let OldPassword = prompt('Enter your old password','');

            if (OldPassword !== null || OldPassword !== '') {
                 if (email === user.email && OldPassword === user.password ||
                     email === admin.email && OldPassword === admin.password) {
                     let NewPassword = prompt('Enter your new password', '');

                     if (NewPassword.length >= PasswordLengthMin) {
                         let NewPasswordRepeat = prompt('Enter your new password again', '');

                         if (NewPasswordRepeat !== null || NewPasswordRepeat !== '') {
                             if (NewPassword === NewPasswordRepeat) {
                                 if (email === admin.email) {
                                     admin.password = NewPassword;
                                     alert('You have successfully changed your password.');
                                 } else if (email === user.email) {
                                     user.password = NewPassword;
                                     alert('You have successfully changed your password.');
                                 } else {
                                     alert('Canceled.');
                                 }
                             } else {
                                 alert('You wrote the wrong password.');
                             }
                         } else {
                             alert('Canceled.');
                         }
                     } else {
                         alert('It’s too short password. Sorry.');
                     }
                 } else {
                     alert('Wrong password');
                 }
            } else {
                alert('Canceled.');
            }
        } else {
            alert('You have failed the change.');
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}
