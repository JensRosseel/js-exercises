const movies = [
    "Cruella",
    "Drunk",
    "Freaky",
];

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

document.write("<ul>");
movies.forEach(movie => document.write(wrapWithTag(movie, `li`)));
document.write("<ul>");