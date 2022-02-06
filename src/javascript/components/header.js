import SunLogo from "../assets/sunny.svg";
import GithubLogo from "../assets/github.svg";
const Header = document.createElement("nav");
Header.className="header"
const Logo = document.createElement("a");
Logo.href="#";
Logo.className="logo"
Logo.innerHTML="Moganesn";

const pages = ["Home","About","Work"];

const ul = document.createElement("ul");

ul.className="menu"

pages.map((page)=>{
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href=`#${page}`;
    link.innerHTML=page;
    li.className="menu-item";
    li.appendChild(link);
    ul.appendChild(li);
})

const icons = [SunLogo,GithubLogo];

icons.map((src,index)=>{
    console.log(src)
    const li = document.createElement("li");
    li.style.display="flex";
    const button = document.createElement("button");
    button.style.display="flex";
    button.style.alignItems="center"
    const img = document.createElement("img");
    img.src=src;
    button.appendChild(img)
    li.appendChild(button);
    ul.appendChild(li)
})



Header.appendChild(Logo)
Header.appendChild(ul)

export default Header;