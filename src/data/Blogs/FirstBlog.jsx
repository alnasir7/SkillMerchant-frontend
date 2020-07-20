import React from "react";
import image from "../../misc/online-learning.jpg";

const FirstBlog = () => {
  console.log("ok");
  return (
    <div className="first-blog">
      <p>
        Work is probably the last thing you would want to do during a global
        pandemic, but ask yourself, when will be the next time you ever get so
        much free time in your life? Netflix is one way of cutting downtime, but
        if you are reading this blog post, I’m guessing you’re tired of that
        already and want to move into the more constructive feature of this
        boredom.
      </p>
      <br />
      <p>
        Online courses are one of the best ways of making use of this spare
        time. Did you know that,
      </p>
      <ul>
        <li>
          With online learning, individuals learn nearly 5 times more material
          without increasing the time spent in training.
        </li>
        <li>
          72% of organizations believe that online courses help individuals stay
          up to date and increases their competitive edge in the job market.
        </li>
        <li>Online learning increases retention rates by 25% to 60%</li>
      </ul>
      <p>
        Online courses have made it extremely easy for us to gain valuable
        skills at a minimum cost and at our own learning pace. Through these,
        you can make the most out of our time during such uncertain times.{" "}
        <strong>
          Let’s look at the 5 ways online learning can help you during and after
          COVID-19.
        </strong>
      </p>
      <img src={image} alt="An error occured while loading the image" />
      <ol>
        <li>
          <h1>Boost self-esteem </h1>
          <p>
            when taking online courses, there is a significant boost to your
            confidence and self-esteem. Knowing that you are using your time to
            do something constructive helps you stay positive in any situation
            you find yourself in, and improves your mood as well.
          </p>
        </li>

        <br />
        <li>
          <h1>Updating skills </h1>
          <p>
            The World is evolving and enhancing at a much faster rate than you
            might think. It is always a good idea to keep updating your skills
            in whichever field or industry you might be in. This will not just
            allow you to use more innovative methods in your work, but might
            also give you more job security as well as an edge over your
            colleagues for future promotions.
          </p>
        </li>
        <br />
        <li>
          <h1>Preparing or shifting for a new job market</h1>
          <p>
            If you read the news, you would already know that this pandemic has
            brought a total shift in the economy. More than a hundred businesses
            have declared bankruptcy during the COVID-19 and it is true that
            after this pandemic, many new and different industries will be in
            the limelight. Therefore it will always be in your favor to learn a
            new in-demand skill by taking online courses, to prepare yourself
            for a post-pandemic World.
          </p>
        </li>
        <br />
        <li>
          <h1>Exploring your interests, diversifying your skillset</h1>
          <p>
            This is the time where trial and error makes the most sense.
            Exploring your passions and diversifying your skillset will not only
            make you more well-rounded but will also increase your demand in the
            job market. Employers like individuals who have at least some
            knowledge in a variety of different areas and with so many online
            courses available on the internet, it is possible to do that.{" "}
          </p>
        </li>
        <br />
        <li>
          <h1>Lower cost, no debt during the financial crisis</h1>
          <p>
            With a global financial crisis on our doorstep, college education
            has become more unaffordable than before. Student loans are one of
            the worst nightmares to have during such an economic recession,
            especially when education is slowly shifting to virtual platforms
            like Zoom. With online courses being less expensive than traditional
            college degrees, and most of them offering online certifications,
            the opportunity cost involved tells us that online courses are the
            next best alternative.
          </p>
        </li>
      </ol>
      <br />
      <p>
        With a global pandemic going through, the demand for online courses has
        increased significantly, and who knows, with a financial crisis present
        in the World today, this might be the only source of affordable
        education. A new era of learning seems just around the corner.
      </p>
    </div>
  );
};

export default FirstBlog;
