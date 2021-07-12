export const END_POINT = 'https://jjalbot.com'

export const request = async (url, params) => {
    const res = await fetch(`${END_POINT}${url}`, {
        params
    })

    console.log(res)

    if (res.status === 200) {
        return await res.json()
    } else {
        throw new Error('응답이 올바르지 않다')
    }
}
