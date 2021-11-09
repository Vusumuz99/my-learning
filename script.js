const names = ["BMW","Toyoat","Opel","leux","Hando",
"Volkswagen","Smart","Suzuki","Subaru","RAM","Seat","Nissan","Mazda","Mercedes-Benz"]


const display = document.getElementById("display");

for (let i = 0; i < names.length; i++) {
    display.innerHTML += "<li>" + names [i]
    
}
