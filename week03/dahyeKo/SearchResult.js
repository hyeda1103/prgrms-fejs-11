export default function SearchResult({ $app, initialState }) {
    this.$target = document.createElement('div')
    this.state = initialState

    $app.appendChild(this.$target)

    this.render = () => {
        if (this.state.length > 0) {
            const htmlString = `${this.state.map((data) => `<img src=${data.imageUrl} />`).join('')}`
            this.$target.innerHTML = htmlString
        } else {
            const htmlString = `<p>결과가 없다</p>`
            this.$target.innerHTML = htmlString
        }
    }

    this.render()

    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }
}
