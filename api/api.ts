import fs from 'fs'
import { join } from 'path'

const postsDirectory = join(process.cwd(), 'posts')


export type Post = {
    title: string,
    subtitle?: string,
    slug: string,
    content: string,
    kind: string,
    image: string,
    tag?: string
}



const getMetadata = (html: string, key: string) => {
    const regex = `<p hidden id="${key}">(.+?)<\/p>`
    const match = html.match(regex)
    if (!match) return undefined
    return match[1]
}

export const getPostById = (slug: string, lang: string): Post => {
    const fullPath = join(postsDirectory, lang, slug)
    const fileContent = fs.readFileSync(fullPath, 'utf8')

    const title = getMetadata(fileContent, 'title') || "Untitled"
    const subtitle = getMetadata(fileContent, 'subtitle')
    const tag = getMetadata(fileContent, 'tag')
    const image = getMetadata(fileContent, 'image') || '/posts/b2c-01.png'
    
    return {
        title,
        subtitle,
        tag,
        slug: slug.replace(/\.html$/, ''),
        content: fileContent,
        kind: getMetadata(fileContent, 'kind') || 'b2b',
        image
    }
}

// export const posts = fs.readdirSync(postsDirectory).map(x => getPostById(x, 'jopa'))



