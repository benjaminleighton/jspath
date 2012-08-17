module.exports = [
    { path : '.', data : null, res : [null]},
    { path : '.', data : [null, { test : [null] }], res : [null, { test : [null] }]},
    { path : '.', data : undefined, res : []},
    { path : '.', data : [undefined, { test : [undefined] }], res : [{ test : [undefined] }]},
    { path : '.item.idx', data : [{ item : { idx : 0 }}, null], res : [0]},
    { path : '..item..idx', data : [{ item : { idx : 0 }}, null], res : [0]},
    { path : '.item.idx', data : [{ item : { idx : 0 }}, undefined], res : [0]},
    { path : '..item..idx', data : [{ item : { idx : 0 }}, undefined], res : [0]}
];