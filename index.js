function slider() {
    const sliderWindow = document.querySelector('#slider');
  
    const slideRight = () => {
      let firtChild = sliderWindow.firstElementChild;
      sliderWindow.style.transition = "all .5s";
      sliderWindow.style.marginLeft = "-200%";
      setTimeout(() => {
        sliderWindow.insertAdjacentElement("beforeend", firtChild);
        sliderWindow.style.transition = "none";
        sliderWindow.style.marginLeft = "-100%";
      }, 500)
    }
  
    const slideLeft = () => {
      let lastChild = sliderWindow.lastElementChild;
      sliderWindow.style.transition = "all .5s";
      sliderWindow.style.marginLeft = "0";
  
      setTimeout(() => {
        sliderWindow.insertAdjacentElement("afterbegin", lastChild);
        sliderWindow.style.transition = "none";
        sliderWindow.style.marginLeft = "-100%";
      }, 500)
    }
    
    return {
      slideLeft,
      slideRight
    }
  }
  
  setInterval(() => {
      slider().slideRight()
  }, 3000)  


// --------------------- form 
document.querySelector("#submitForm").addEventListener("click", () => {
  document.querySelector("#modal").style.display = "flex"
  alert("Agregando Producto...")
  setTimeout(() => {
    document.querySelector("#modal").style.display = "none"
  }, 1500);
})

const comprado = () => {
    document.querySelector("#modal").style.display = "flex"
    setTimeout(() => {
      document.querySelector("#modal").style.display = "none"
    }, 1500);
}