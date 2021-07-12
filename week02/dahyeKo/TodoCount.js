function TodoCount({$app, initialState}) {
    this.state = initialState
    this.$target = document.createElement('div')

    $app.appendChild(this.$target)

    this.render = () => {
        this.$target.innerHTML = `
            ${this.state.filter(todo => todo.isCompleted).length} / ${this.state.length}
        `
    }

    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }
    
    this.render()
}
