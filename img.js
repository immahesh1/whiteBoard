let upload = document.querySelector("#upload")
let photoUpload = document.querySelector("#photo-upload")

let download = document.querySelector("#download")


download.addEventListener("click", ()=>{
    let filePath = canvas.toDataURL("image/jpg")
    let aTag = document.createElement('a')
    aTag.setAttribute('download', 'canvas.jpg')
    aTag.setAttribute('href', filePath);

    aTag.click();
    aTag.remove();
})

upload.addEventListener('click', function(){
    photoUpload.click()
})

photoUpload.addEventListener('change', function(){
    let fileObject = photoUpload.files[0];
    // gives you an image url
    let filePath = URL.createObjectURL(fileObject);
    // image tag created
    let img = document.createElement("img")
    img.setAttribute("src", filePath)
    img.setAttribute("id","image-id")
    // console.log(img);

    // append image to documnet -> body
    // document.body.appendChild(img)

    let stickyContent = createSticky()

    stickyContent.appendChild(img)
})