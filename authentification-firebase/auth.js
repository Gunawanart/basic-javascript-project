const signUp = document.querySelector('#signup-form')
signUp.addEventListener('submit', function(e) {
    e.preventDefault()
    const email = signUp['signup-email'].value
    const pass = signUp['signup-password'].value
   

    auth.createUserWithEmailAndPassword(email, pass,).then(cred => {
        const modal = document.querySelector('#modal-signup')
        M.Modal.getInstance(modal).close()
        signUp.reset()
    })
})


const logOut = document.querySelector('#logout')
logOut.addEventListener('click', function(e) {
    e.preventDefault()
    auth.signOut().then(result => {
        console.log('Log Out Succes')
    })
})


const logIn = document.querySelector('#login-form')
logIn.addEventListener('submit', function(e) {
    e.preventDefault()
    const email = logIn['login-email'].value
    const pass = logIn['login-password'].value

    auth.signInWithEmailAndPassword(email, pass).then(cred => {
        console.log(cred.user)
        const modal = document.querySelector('#modal-login')
        M.Modal.getInstance(modal).close()
        signUp.reset()
    })
})
