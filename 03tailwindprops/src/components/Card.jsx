import React from "react";

const Card = ({ userName = "Randima", post = "Not assigned yet." }) => {
  return (
    <div>
      <figure className="md:flexbg-slate-100 rounded-xl p-8 dark:bg-slate-800 m-5">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://media.istockphoto.com/id/1368068269/photo/beautiful-woman-going-back-to-school.jpg?s=1024x1024&w=is&k=20&c=SsP5OW58SuJa3halKEBQKW6YygQVuVQeMjNkimsLUdg="
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure,
              aut aliquam nobis suscipit obcaecati quo voluptatum facilis.
              Commodi cumque tempora beatae accusamus. Est in ipsa eligendi
              numquam voluptatem cupiditate facere?
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{userName}</div>
            <div className="text-slate-700 dark:text-slate-500">{post}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Card;
