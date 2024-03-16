
export async function load({fetch, params}){

    const post = await import(`../../../posts/${params.slug}.md`);

    return {
        content: post.default
    }

}