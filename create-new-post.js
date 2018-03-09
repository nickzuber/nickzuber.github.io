'use strict'

const fs = require('fs')
const moment = require('moment')
const c = require('chalk')

function getPostName (argv) {
  if (argv.length <= 2) {
    throw new Error('pass in a name for the blog post')
  }
  const date = moment().format()
  const name = argv.slice(2)
    .reverse()
    .reduce((acc, arg) => `${arg.charAt(0).toUpperCase() + arg.substr(1).toLowerCase()} ${acc}`, '')
    .slice(0, -1)
  const path = argv.slice(2, 5)
    .reverse()
    .reduce((acc, arg) => `${arg}-${acc}`, '')
    .slice(0, -1)
  const frontmatter = `---
path: "/blog/${path}"
date: "${date}"
title: "${name}"
tags: []
---
`
  fs.mkdir(`./src/posts/${moment().format('YYYY-MM-DD')}-${path}`, () => {
    fs.writeFile(`./src/posts/${moment().format('YYYY-MM-DD')}-${path}/index.md`, frontmatter, er => {
      if (!er) {
        console.log(c.green(`created post ./src/posts/${path}`))
      }
    })
  })
}

try {
  getPostName(process.argv)
} catch (e) {
  console.log(c.red(e.message))
}
