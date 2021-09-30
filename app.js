const GetSlides = () => {
    try {
        let photo_list = [
            { key: "Ph: Joseph Barrientos",      value: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80"},
            { key: "Ph: Kristian Egelund",       value: "https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80"},
            { key: "Ph: Fachry Zella Devandra",  value: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80"},
            { key: "Ph: Jake Weirick",           value: "https://images.unsplash.com/photo-1506544777-64cfbe1142df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80", active: true},
            { key: "Ph: Maksim Larin",           value: "https://images.unsplash.com/photo-1549298916-c6c5f85fa167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80"},
            { key: "Ph: Jeff Tumale",            value: "https://images.unsplash.com/photo-1574025963250-5c6227927bec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80"},
        ]
        const container = document.querySelector('.container')

        for (const photo of photo_list) {
            let div = document.createElement('div');
            div.className = "slide"
            if(photo.active) div.className += " active"
            div.style.backgroundImage = "url('" + photo.value.toString() + "')"
            h3 = document.createElement('h3')
            h3.textContent = photo.key.toString()
            container.appendChild(div).appendChild(h3)
        }

    } catch (exeption) {
        throw exeption
    }
}

const workAtSlides = () => {
    try {
        const slides = document.querySelectorAll('.slide')
        setEventListener(slides)
    } catch (exeption) {
        throw exeption
    }
}

function setEventListener(slide_list) {
    try {
        for (const slide of slide_list){
            slide.addEventListener('click', () => {
                clearActiveClasses(slide_list)
                slide.classList.add('active')
            })
        }
    } catch (exeption) {
        throw exeption
    }
}

function clearActiveClasses(slide_list) {
    try {
        slide_list.forEach(slide => {
            slide.classList.remove('active')
        })
    } catch (exeption) {
        throw exeption
    }
}

GetSlides()
workAtSlides()