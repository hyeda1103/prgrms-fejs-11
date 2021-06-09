import {
    data1, data2, data3, data4,
} from "./data.js"

function TodoList(data, selector) {
    if (this === window) {
      throw new Error('new 연산자가 필요합니다')
    }
    if (data === null || data === undefined) {
      throw new Error('주어진 인자는 null 또는 undefined입니다')
    }
    if (!Array.isArray(data)) {
      throw new Error('주어진 인자는 배열이 아닙니다')
    }
    if (data.length === 0) {
      throw new Error('빈 배열입니다')
    }
    data.forEach((toDoItem) => {
      if (!toDoItem.hasOwnProperty('text')) {
        throw new Error('데이터 요소의 key값으로 text가 존재하지 않습니다')
      }
      if (typeof toDoItem.text !== 'string') {
        throw new Error('text의 타입이 올바르지 않습니다')
      }
      if (!toDoItem.hasOwnProperty('isCompleted')) {
        throw new Error('데이터 요소의 key값으로 isCompleted가 존재하지 않습니다')
      }
      if (typeof toDoItem.isCompleted !== 'boolean') {
        throw new Error('isCompleted의 타입이 올바르지 않습니다')
      }
    })
    this.data = data
    this.selector = selector
    this.render = function () {
        const $todoList = document.querySelector(this.selector)
        const htmlString = this.data.map((toDoItem) => toDoItem.isCompleted 
            ? `<li><s>${toDoItem.text}</s></li>` 
            : `<li>${toDoItem.text}</li>`).join('')
        $todoList.innerHTML = `<ul>${htmlString}</ul>`
    }
    this.setState = function (nextData) {
        this.data = nextData
        this.render()
    }
}

const todoList1 = new TodoList(data1, "#todo-list1")
const todoList2 = new TodoList(data2, "#todo-list2")
const todoList3 = new TodoList(data3, "#todo-list3")

todoList1.render()
todoList2.render()
todoList3.render()
todoList1.setState(data4)
