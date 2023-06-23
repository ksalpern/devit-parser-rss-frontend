import React from "react";

const Feed = ({ title, pubDate, link, content }) => {
  let formatted = { day: "numeric", month: "long", year: "numeric" };
  let articleDate = new Date(pubDate).toLocaleDateString("uk-UA", formatted);
  const imageRegex = /<img[^>]+src="([^">]+)"/;
  const match = content?.match(imageRegex);
  const image = match ? match[1] : null;
  
  // console.log(content);

  return (
    <div className="border border-blue-400 rounded-lg p-2">
      <a href={link} className="" target="_blank" rel="noopper noreferrer">
        <h3 className="text-xl mb-1 underline hover:text-blue-500 transition">
          {title}
        </h3>
        <p>{articleDate}</p>
      </a>
      <div className="content"><img src={image} alt="" /></div>
    </div>
  );
};

export default Feed;
