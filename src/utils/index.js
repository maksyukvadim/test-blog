export const searchPostsByQuery = (posts, q='') => {
    if(q.length > 2) {
        return posts.filter(({ title, body }) => title.includes(q) || body.includes(q))
    }
    return posts;
}
