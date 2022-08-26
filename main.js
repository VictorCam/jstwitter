import './style.css'
import { faker } from '@faker-js/faker';

let last = document.querySelector('main > *:last-child')
let section = document.querySelector('main')

let ob = new IntersectionObserver(async (entries) => {
  
    if(!entries[0].isIntersecting) return
    ob.unobserve(entries[0].target)
    ob.observe(document.querySelector('main > *:last-child'))
    createTweet()
}, {threshold: 0})
ob.observe(last)

function createTweet() {

    let newNode = last.cloneNode(true)

    //lets walk the dom 🐕
    newNode.children[0].children[0].children[0].src = faker.image.avatar() 
    newNode.children[0].children[1].children[0].children[0].innerText = faker.internet.userName()
    newNode.children[0].children[1].children[0].children[1].innerText = faker.word.adjective()
    newNode.children[0].children[1].children[0].children[2].innerText = Math.ceil(Math.random(0) * 24) + "h"

    //there is a 1/5 chance we will see a user with 1-4 images displayed
    if(Math.ceil(Math.random(1) * 5) == 1) {

      //there is a 50/50 chance we will see text alongside the image
      if(Math.floor(Math.random(1) * 2) +1 == 1) {
        newNode.children[0].children[1].children[1].children[0].innerText = ''
      }
      else {
        newNode.children[0].children[1].children[1].children[0].innerText = faker.lorem.paragraph()
      }
      
      //pick which one
      let pick = ['abstract', 'animals', 'cats', 'city', 'food', 'sports']

      //create elements
      let imgs = document.createElement('div')
      imgs.classList.add('howl-2-img')
      for(let i = 0; i < Math.ceil(Math.random(0) * 4); i++) {
        let img = document.createElement("img")
        // img.setAttribute('loading', 'lazy')
        let picked = Math.floor(Math.random(1) * pick.length-1) + 1
        img.src = faker.image[pick[picked]](undefined,undefined,true)
        img.alt = "photo"
        imgs.append(img)
      }
      newNode.children[0].children[1].children[1].children[0].append(imgs)
    }
    else {
      newNode.children[0].children[1].children[1].children[0].innerText = faker.lorem.paragraph()
    }

    newNode.children[0].children[1].children[2].children[0].children[1].innerText = Math.ceil(Math.random(0) * 9999)
    newNode.children[0].children[1].children[2].children[1].children[1].innerText = Math.ceil(Math.random(0) * 9999)
    newNode.children[0].children[1].children[2].children[2].children[1].innerText = Math.ceil(Math.random(0) * 9999)

    section.append(newNode)
}