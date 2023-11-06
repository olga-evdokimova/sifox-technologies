import { getPostById } from "@/api/api";
import "./style.scss";
import Title from "@/app/components/Title/Title";

export default function PageSlug({ params }: any) {
  const post = getPostById(params.id + ".html");

  return (
    <div className="post container">
     
        <Title>{post.title}</Title>
     
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
   
    </div>
  );
}
