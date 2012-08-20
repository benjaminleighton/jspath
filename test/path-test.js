module.exports = [
    { path : '.', data : [{ test : 'test' }], res : [{ test : 'test' }]},
    { path : '.', data : 'test', res : ['test']},
    { path : '.', data : 5, res : [5]},
    { path : '.', data : true, res : [true]},
    { path : '.name', res : ['books and authors']},
    { path : '.noexists', res : []},
    { path : '."test.test"', data : { 'test.test' : 'test' }, res : ['test']},
    { path : '.authors.name', res : ['Nicholas C. Zakas', 'Douglas Crockford', 'Robert C. Martin', 'John Resig']},
    { path : '.books.author.name', res : ['Robert C. Martin', 'Nicholas C. Zakas', 'Robert C. Martin', 'Douglas Crockford', 'Douglas Crockford']}
];