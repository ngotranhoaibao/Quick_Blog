//create until cleanHtml
const cleanHtml = (html = "") => html.replace(/<[^>]+>/g, "");

export default cleanHtml;
