export  function getDataFromDoc(doc, excepts = []) {
    let data = doc.data();
    data.id = doc.id;
    return data;
};

export function getDataFromDocs(docs, except = []) {
    return docs.map(function (doc) {
        return getDataFromDoc(doc, except);
    });
};


