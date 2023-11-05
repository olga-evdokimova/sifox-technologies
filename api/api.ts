import fs from 'fs'
import { join } from 'path'

const postsDirectory = join(process.cwd(), 'posts')


export type Post = {
    title: string
    slug: string,
    content: string,
    catalog: Catalog,
}

export type Catalog = "b2b" | "b2c" 

const getMetadata = (html: string, key: string) => {
    const regex = `<p hidden id="${key}">(.+?)<\/p>`
    const match = html.match(regex)
    if (!match) return undefined
    return match[1]
}

export const getPostById = (catalog: Catalog, slug: string): Post => {
    const fullPath = join(postsDirectory, catalog, slug)
    const fileContent = fs.readFileSync(fullPath, 'utf8')

    const title = getMetadata(fileContent, 'title') || "Untitled"

    return {
        title,
        slug: slug.replace(/\.html$/, ''),
        content: fileContent,
        catalog,
    }
}

export const notes = fs.readdirSync(join(postsDirectory, "notes")).map(x => getPostById("b2b", x))
export const photo = fs.readdirSync(join(postsDirectory, "photo")).map(x => getPostById("b2c", x))


export const posts = [...notes, ...photo]