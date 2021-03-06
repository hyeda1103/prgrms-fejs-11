import SearchInput from "./SearchInput.js";
import SearchResult from "./SearchResult.js";
import { request } from './api.js'

const fetchSearchResult = async (keyword) => {
    return await request(`/api/jjals?text=${keyword}`)
}

export default function App({$app, initialState}) {
    this.state = initialState

    this.searchInput = new SearchInput({
        $app,
        onSearch: async (keyword) => {
            if (keyword.length > 1) {
                try {
                    const searchResults = await fetchSearchResult(keyword)
                    this.setState({ searchResults })
                } catch (e) {
                    alert(e.message)
                }
            }
        }
    })

    this.searchResult = new SearchResult({
        $app,
        initialState: this.state.searchResults
    })
    
    this.setState = (nextState) => {
        this.state = nextState
        this.searchResult.setState(this.state.searchResults)
    }
}
