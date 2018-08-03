// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/thomaswhitaker/Desktop/tomWritesCode/tomWritesCode_Gatsby/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-posts-post-page-js": preferDefault(require("/Users/thomaswhitaker/Desktop/tomWritesCode/tomWritesCode_Gatsby/src/posts/PostPage.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/thomaswhitaker/Desktop/tomWritesCode/tomWritesCode_Gatsby/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/thomaswhitaker/Desktop/tomWritesCode/tomWritesCode_Gatsby/src/pages/about.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/thomaswhitaker/Desktop/tomWritesCode/tomWritesCode_Gatsby/src/pages/blog.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/thomaswhitaker/Desktop/tomWritesCode/tomWritesCode_Gatsby/src/pages/index.js")),
  "component---src-pages-work-js": preferDefault(require("/Users/thomaswhitaker/Desktop/tomWritesCode/tomWritesCode_Gatsby/src/pages/work.js"))
}

exports.json = {
  "layout-index.json": require("/Users/thomaswhitaker/Desktop/tomWritesCode/tomWritesCode_Gatsby/.cache/json/layout-index.json"),
  "first-post-so-i-made-a-thing.json": require("/Users/thomaswhitaker/Desktop/tomWritesCode/tomWritesCode_Gatsby/.cache/json/first-post-so-i-made-a-thing.json"),
  "404.json": require("/Users/thomaswhitaker/Desktop/tomWritesCode/tomWritesCode_Gatsby/.cache/json/404.json"),
  "about.json": require("/Users/thomaswhitaker/Desktop/tomWritesCode/tomWritesCode_Gatsby/.cache/json/about.json"),
  "blog.json": require("/Users/thomaswhitaker/Desktop/tomWritesCode/tomWritesCode_Gatsby/.cache/json/blog.json"),
  "index.json": require("/Users/thomaswhitaker/Desktop/tomWritesCode/tomWritesCode_Gatsby/.cache/json/index.json"),
  "work.json": require("/Users/thomaswhitaker/Desktop/tomWritesCode/tomWritesCode_Gatsby/.cache/json/work.json"),
  "404-html.json": require("/Users/thomaswhitaker/Desktop/tomWritesCode/tomWritesCode_Gatsby/.cache/json/404-html.json")
}