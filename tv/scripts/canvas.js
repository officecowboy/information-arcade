const canvas = document.createElement("canvas")
const sandbox = new GlslCanvas(canvas)

document.body.appendChild(canvas)

let channel = document.querySelector("#channel");

const hideChannel = function () {
    channel.style.display = "none"
}

const showChannel = function () {
    channel.style.display = "block"
}

setTimeout(hideChannel, 2000)

const sizer = function () {
    const ww = window.innerWidth
    const wh = window.innerHeight
    const dpi = window.devicePixelRatio

    const s = Math.max(ww, wh)

    canvas.width = s * dpi
    canvas.height = s * dpi
    canvas.style.width = s + "px"
    canvas.style.height = s + "px"
}

sizer()
window.addEventListener("resize", function () {
    sizer()
})

const fragArray = frag;
current = 0;

document.querySelector("#right").addEventListener("click", function () {
    current += 1

    if (current >= fragArray.length) {
        current = 0
    }

    sandbox.load(frag[current])
    channel.innerHTML = `0${current + 1}`
    showChannel()
    setTimeout(hideChannel, 2000)
})

document.querySelector("#left").addEventListener("click", function () {
    current -= 1

    if (current < 0) {
        current = fragArray.length - 1
    }

    sandbox.load(frag[current])
    channel.innerHTML = `0${current + 1}`
    showChannel()
    setTimeout(hideChannel, 2000)
})

sandbox.load(frag[current])
sandbox.setUniform("seed", Math.random())
sandbox.setUniform("image", "light.jpg")