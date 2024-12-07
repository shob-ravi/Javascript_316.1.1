// Target element selected
let mainEl = document.querySelector("main");
// css custom propery backgroud color assigned
let bgColor = 'var(--main-bg)';
mainEl.style.backgroundColor = bgColor;
// created h1 element to mainEl
const h1Element = document.createElement('h1');
h1Element.textContent = "DOM Manipulation";
mainEl.append(h1Element);
// added classlist flex-ctr to mainEl
mainEl.classList.add('flex-ctr');
// selected top-menu
let topMenuEl = document.querySelector("#top-menu");
// custom css background color assigned
let nav_bgColor = 'var(--top-menu-bg)';
topMenuEl.style.backgroundColor = nav_bgColor;
topMenuEl.style.height = '100%';
// create class flex-around to topMenuEl
topMenuEl.classList.add('flex-around');
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];
  menuLinks.forEach((obj)=>{
    let linkEl = document.createElement('a');
    linkEl.textContent= obj.text;
    linkEl.href=obj.href;
    topMenuEl.append(linkEl);
  }
)





