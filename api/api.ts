import fs from 'fs'
import { join } from 'path'

const postsDirectory = join(process.cwd(), 'posts')


export type Post = {
    title: string
    slug: string,
    content: string,
    kind: string
}



const getMetadata = (html: string, key: string) => {
    const regex = `<p hidden id="${key}">(.+?)<\/p>`
    const match = html.match(regex)
    if (!match) return undefined
    return match[1]
}

export const getPostById = (slug: string): Post => {
    const fullPath = join(postsDirectory, slug)
    const fileContent = fs.readFileSync(fullPath, 'utf8')

    const title = getMetadata(fileContent, 'title') || "Untitled"

    return {
        title,
        slug: slug.replace(/\.html$/, ''),
        content: fileContent,
        kind: getMetadata(fileContent, 'kind') || 'b2b'
    }
}

export const posts = fs.readdirSync(postsDirectory).map(x => getPostById( x))



