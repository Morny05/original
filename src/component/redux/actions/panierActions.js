export function addArticle(newArticle){
    return({
        type:"ADDING_ARTICLE",
        payload:newArticle
    })
};

export function deleteArticle(articleId){
    return({
        type:"DESTROY_ARTICLE",
        payload:articleId
    })
}

