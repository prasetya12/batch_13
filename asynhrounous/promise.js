function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let token = "x1234567"
            // funCall(token)
            resolve(token)
            // return token
        }, 1000)
    })

    // return '123'
}

function profile(token) {
    if (token) {
        return new Promise((resolve, rejected) => {
            setTimeout(() => {
                let dbToken = 'x1234567'
                if (token == dbToken) {
                    let user = {
                        id: 123,
                        username: "John Doe"
                    }
                    resolve(user)
                } else {
                    rejected('Token tidak sesuai')
                }
                // funCall(user)
                // return user
            }, 1000)
        })
    }
}

function getImageProfile(userId, callbackFunc) {
    if (userId) {
        return new Promise((resolve, rejected) => {
            setTimeout(() => {
                let picture = "image.com/img.jpg"
                // return picture
                resolve(picture)
            }, 1000)
        })
    }
}

// const token = login()
//callback
// login(function (token) {
//     // const user = profile(token)
//     profile(token, function (user) {
//         getImageProfile(user.id, function (picture) {
//             console.log(picture)

//         })

//     })

// })

login().then((token) => {
    profile(token).then((user) => {
        const { id } = user
        getImageProfile(id).then((img) => {
            console.log(img)

        })
    }).catch((error) => {
        alert(error)

    })
})