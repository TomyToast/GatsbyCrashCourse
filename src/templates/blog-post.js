import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';

export default function Template({data}) {
    const post = data.markdownRemark

    return(
        <Layout>
        <div>
            <Link to='/blog'>Go back</Link>
            <hr />
            <h1>{post.frontmatter.title}</h1>
            <h4>Posteb by {post.frontmatter.author} on {post.frontmatter.date}</h4>
            <div dangerouslySetInnerHtml={{ __html: post.html }} />
        </div>
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }){
            html
            frontmatter {
                path
                date
                title
                author
            }
        }
    }
`;