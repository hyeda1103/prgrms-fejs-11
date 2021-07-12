function TodoInput({ $app, onAddTodo }) {
    this.$target = document.createElement('div')
    this.onAddTodo = onAddTodo

    $app.appendChild(this.$target)

    this.render = () => {
        this.$target.innerHTML = `
            <input type="text" />
            <button class="remove-all">모두 삭제</button>
        `
    }

    this.render()

    this.$target.querySelector('input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            this.onAddTodo(e.target.value)
            this.$target.querySelector('input').value = ''
        }
    })

    this.$target.querySelector('.remove-all').addEventListener('click', (e) => {
        const event = new CustomEvent('remove-all')
        window.dispatchEvent(event)
    })
}
