
import { addForm } from "../class/addForm.js";

const form = new addForm();
form.addButton()
form.addPopover();

const button = document.querySelector('.button');
const popover = document.querySelector('.tooltip');
const title = document.querySelector('.tooltip_title');
const text = document.querySelector('.tooltip_text');

    button.addEventListener('click', (event)=>{
        event.preventDefault();
        popover.classList.toggle('tooltip_active');
        title.textContent = button.getAttribute('title');
        text.textContent = button.getAttribute('data-content');
        const {top, left,height, width} = button.getBoundingClientRect();
        console.log(popover.style.height);
        popover.style.top = `${top - height - 20}px`;
        popover.style.left = `${left - width/3}px`;
        // popover.textContent = link.getAttribute('title');
        button.insertAdjacentElement('afterend', popover);   
    })     
