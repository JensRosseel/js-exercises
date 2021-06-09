const movies = [
    "Cruella",
    "Drunk",
    "Freaky",
];

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

movies.reverse();

document.write("<ul>");
movies.forEach(movie => document.write(wrapWithTag(movie.toLowerCase(), `li`)));
document.write("<ul>");