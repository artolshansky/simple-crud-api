# Simple CRUD API on [nestjs](https://github.com/nestjs/nest/)

### API methods description

Method | URL | Data | Description
------------ | ------------- | ------------- | -------------
get | /page/all | - | Get all pages
get | /page?link= | Query parameter `link: string` | Get page by path/link
post | /page | Body: `{ title: string; author: string; content: string; }` | Create page
patch | /page/:id | Parameter: `id: string` <br> Body: `{ title: string; author: string; content: string; }` | Update page
delete | /page/:id | Parameter: `id: string` | Delete page