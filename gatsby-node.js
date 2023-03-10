exports.createPages = async ({actions, graphql}) => {
    const { createPage } = actions;
    
    const { data } = await graphql(
        query AllPagesQuery {
            allWpPage {
              nodes {
                databaseId
                blocks
                uri
              }
            }
          }
    );

for (let i = 0; i < data.allWpPage.nodes.length; i++){
    const page = data.allWpPage.nodes[i];
    createPage({
        path: page.uri,
        component:
    })
}

};