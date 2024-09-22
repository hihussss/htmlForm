export class addForm {
    constructor() {
        this.border = document.body
    }

    addButton(){
        const button = document.createElement('button')
        button.classList.add("button")
        button.textContent = "Нажми на меня!"
        button.setAttribute("title", "Хочешь узнать мой секрет?")
        button.setAttribute("data-content", "Ты сделал правильный выбор!")
        this.border.appendChild(button)
    }

    addPopover() {
        const div = document.createElement('div');
        div.classList.add('tooltip');
        const title = document.createElement('h3')
        title.classList.add('tooltip_title')
        div.appendChild(title)
        const text = document.createElement('div')
        text.classList.add('tooltip_text')
        div.appendChild(text)
        this.border.appendChild(div)
    }

}