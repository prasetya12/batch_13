// console.log('satu')
// setTimeout(() => console.log('dua'), 0) //async
// console.log('tiga')


// 1. login -> output :token
// 2. profile -> input: token output:data user
// 3. image -> input :datauser output:image

function login(funCall) {
    setTimeout(() => {
        let token = "x1234567"
        funCall(token)
        // return token
    }, 1000)

    // return '123'
}

function profile(token, funCall) {
    if (token) {
        setTimeout(() => {
            let user = {
                id: 123,
                username: "John Doe"
            }
            funCall(user)
            // return user
        }, 1000)
    }
}

function getImageProfile(userId, callbackFunc) {
    if (userId) {
        setTimeout(() => {
            let picture = "image.com/img.jpg"
            // return picture
            callbackFunc(picture)
        }, 1000)
    }
}

// const token = login()
login(function (token) {
    // const user = profile(token)
    profile(token, function (user) {
        getImageProfile(user.id, function (picture) {
            console.log(picture)

        })

    })

})



// 

// const image = getImageProfile(user.id)
// console.log(image)

//3 CALLBACK, PROMISE, ASYNC AWAIT
//CALLBACK

