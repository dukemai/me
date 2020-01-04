import Layout from '../../components/BlogLayout'
export default Layout

# Blogging with nextjs

This is the first blog I wrote using md format. Well it is quite simple and developer friendly. After this blog I might want to integrate a comment module like disqus

## Motivation

Next.js is great and I want to write something so I came to find a solution for publishing my blogs with next.js. There are thousands blog ready engines out there but I chose Next.js feat with markdown since md is quite easy to use.

- So the advantages are obviously that blogs are simple, flexible to integrate with react components and fast by default since it does not need any db under the hood.
- However there are several limitations with this way like markdown itself has limitation to add attributes, css so you will need plugins to handle that. Images are also a problem. To add images to a blog then you will need to upload some where and add the links to blogs.

## How to implement

Next.js has a neat integration with MDX, you can read more about that here https://mdxjs.com/getting-started/next.

- Basically add @next/mdx @mdx-js/loader

    ```javascript
        npm install --save @next/mdx @mdx-js/loader
    ```

    next.config.js

    ```javascript 
    const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/
    })
    module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'md', 'mdx']
    })
    ```

- Add a layout for blog. My favorite setup is to add BlogLayout under components folder. In the layout you can specify common things for blogs like css, common logic

- Add your first blog md file, eg blog.md under pages. Nextjs and MDX loader will automatically make md files available as other pages.

- In blog.md add the following code then your blog will utilize the above layout

    ```javascript
    import Layout from '../components/BlogLayout'
    export default Layout
    ```
- there will be several things you might want to add to your blogs. For example:
    + styles for blogs, I suggest to use styled components and add your styles in the layout.
    + class or attributes for elements, I suggest to use the following plugins "remark-attr", "remark-custom-blocks"
    + custom components like accordion I suggest to use webcomponents. I implemented here https://etfeurope.net/education/etf-basics/all-you-need-to-know-about-european-etfs

