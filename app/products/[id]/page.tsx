import { getPostById } from "@/api/api";
import "./style.scss";
import Title from "@/app/components/Title/Title";
import Image from "next/image";
export default function PageSlug({ params }: any) {
  const post = getPostById(params.id + ".html");

  return (
    <>
      <Image className="post__img" src={post.image} alt="Картинка" width={1598} height={1690}/>
      <div className="post">
        <div className="post__ellipses"></div>

        <div className="post__tag">{post.tag}</div>
        <Title>{post.title}</Title>
        <span className="post__subtitle">{post.subtitle}</span>
        <div
          className="post__inner"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </>
  );
}
