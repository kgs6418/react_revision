// In the final we have created an element from React.createElement(here it will take three things i.e, --> type,props,children)

function customRender(customElement,box){
//we will create dom element here.
let myElement=document.createElement(customElement.type)
myElement.innerHTML=customElement.children
myElement.setAttribute('href',customElement.prop.href)
myElement.setAttribute('target',customElement.prop.target)
box.appendChild(myElement)
}

let customElement={
    type:'a',
    prop:{
            href:'https://google.com',
            target:'_blank'
        },
    children:'click me to visit again'    

}
let root=document.getElementById("root")
customRender(customElement,root)
