import { getPostById } from "@/api/api";
import "@/app/products/style.scss";
import Title from "@/app/components/Title/Title";
import Image from "next/image";
import { PullStateServerSide } from "@/app/components/PullState/PullState";
export default function PageSlug({ params }: any) {
  const post = getPostById(params.id + ".html", "fr");

  return (
    <>
      <Image
        className="post__img"
        src={post.image}
        alt="image"
        width={1598}
        height={1690}
      />
      <div className="post">
        <div className="post__ellipses"></div>
        <a className="post__backward" href={`/?pk=${post.kind}`}>
          <svg
            width="41"
            height="14"
            viewBox="0 0 41 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40 7H1M1 7L7.41772 0.5M1 7L7.41772 13.5"
              stroke="#E0933E"
              strokeLinecap="round"
            />
          </svg>
          <span>PRODUITS</span>
        </a>
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
