function loadNavbar(){
    const navbar = `
    <nav>
    <a href="">HOME</a>
    <a href="">ABOUT</a>
    <a href="">CONTACT</a>
   </nav> 
    `
    document.getElementById('navbar').innerHTML = navbar
}

export {loadNavbar}