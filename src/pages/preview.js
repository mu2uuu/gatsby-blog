import React , { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import PostContent from "../components/PostContent";

const apiHost = "https://q8fa4mkcct.microcms.io";

const PostPage = (props) => {
  const [post, setPost] = useState(null);
  const params = new URLSearchParams(props.location.search);
  const contentId = params.get("contentId");
  const draftKey = params.get("draftKey");
  const apiKey = params.get("apiKey");
  useEffect(() => {
    if(!contentId || !apiKey) {
      alert("missing parameters");
      return;
    }
    fetch(`${apiHost}/api/v1/post/${contentId}?draftKey=${draftKey}`, {
      headers: { "X-API-KEY": apiKey}
    })
    .then((res) => {
      if(!res.ok) throw new Error(res.status + res.statusText);
      return res.json();
    })
    .then((res) => setPost(res))
    .catch((err) => alert(err));
  }, [apiKey, draftKey, contentId]);

  return (
    <Layout>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={`${post.title}`} />
      </Helmet>
      <PostContent post={post} />
    </Layout>
  )
}
export default PostPage