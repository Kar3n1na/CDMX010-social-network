
export function setHtml(elements) {
    return `<div id="containerPost"><head><i id=account_circle class="material-icons">account_circle</i><p>${elements.user}<p></head><article>${elements.post}</article><span class="icons"><i class="material-icons">description</i><i class="material-icons">delete</i></span></div>`
}
