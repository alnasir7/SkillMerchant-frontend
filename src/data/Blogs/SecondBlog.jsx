import React from "react";
import image from "../../misc/Programming.jpg";

const SecondBlog = () => {
  return (
    <div className="second-blog">
      <img src={image} alt="An error occured while loading the image" />
      <p>
        The field of programming and software development has gained massive
        popularity in the last decade. Many people are now considering learning
        how to program as it is a very valuable skill today. However, most
        people are taking the wrong approach to learn this skill. Here is why:
      </p>
      <p>
        Programming is a very diverse field that has various applications. You
        can use it to develop a mobile app, design websites, encrypt data for a
        banking security system, ..etc. Programming languages are tools used to
        achieve these applications. By themselves, programming language, usually
        aren't sufficient to deliver a full software product. They are a piece
        in the puzzle. The mistake most people fall into is trying to learn a
        specific programming language, or learn as many programming languages as
        possible. Later, they find out that they know a variety of programming
        languages, without being able to use them to do anything useful! This is
        because mastering a programming language does not mean you are a good
        programmer.
      </p>
      <p>
        So what is the correct approach to get into the field of programming?
      </p>
      <ol>
        <li>
          <h1>Look at the applications</h1>
          <p>
            First, you would want to know what you hope to accomplish by
            learning how to program. You might be an economics student and hope
            to learn how to use software for statistical analysis, you might
            have a great startup idea and wish to create a landing page or a
            mobile app for it. Even if you don't have a determined goal with
            programming, look at what sparks your interest the most. Because, in
            the end, the purpose of programming is creating a service or a
            product. Learning it with this mindset is better than learning how
            to write code without understanding what you’ll end using it for.
          </p>
        </li>
        <li>
          <h1>Where does writing code fit within the big picture?</h1>
          <p>
            Once you have decided what you want to do, look at the structure of
            your application and determine where does programming, or where does
            a specific programming language fit. For example, if you are into
            web development, first learn about the structure of the web. Learn
            about what happens on the client’s side and the server's side. This
            will help determine if you would like to be a frontend developer
            (The person who designs the page) or a backend developer ( The
            person who tells the server what data to send to the client). You
            found yourself drawn to the frontend? Learn about the structure of
            the webpage. How the layout, styling, and functional work together,
            how is the page hosted, where is the data stored and how is it
            retrieved from web servers. Learn about frameworks that help you use
            the programming language to produce the product. By learning this,
            even with little understanding of the programming language,
            JavaScript, in this case, you are ready to create websites with a
            full understanding of their components, how they function, and how
            they interact with other components to give a complete service.
          </p>
        </li>
        <li>
          <h1>Learn the programming language</h1>
          <p>
            With all the knowledge about the structure of your project in mind,
            you can start learning any programming language required to complete
            it. In fact, you'll find it easier to learn the language if you
            understand how are you going to use it. A classmate once asked me in
            a lesson at a programming club, what is the purpose of what we are
            doing? We have spent two weeks writing code and running it on a
            useless terminal. It doesn't seem like any app I have used. At that
            moment I realized that it was very important to learn the use of the
            language before learning the language itself. This way you would
            immediately recognize how you will use every feature of the language
            as soon as you learn it and you will appreciate its importance. It
            will be easier to remember that this is the feature that allows you
            to send a request to an API endpoint, which represents the address
            of a web server which, in turn, will respond to you with the
            requested image rather than remember that this is the features that
            send requests to an API endpoint without understanding what this all
            means. With your knowledge of the structure of your product,
            learning the programming language is an easy task.
          </p>
        </li>
        <li>
          <h1>Finalize your project</h1>
          <p>
            Now that you have all the tools in hand, start creating a project.
            Start designing a webpage. Create the HTML layout, link it to the
            CSS stylesheet, add functionality using JavaScript. Maybe even use a
            framework like react if the project is complicated to help you
            organize it. Connect the project to a remote database, deploy your
            app on a hosting service. Purchase a domain name to have a unique
            website name and add it you your hosting service. In fact, during
            this process you learn more about the programming language than what
            you might learn on a dedicated course for that language. You might
            learn how to facilitate secure encrypted communication between
            client and server to login users using JavaScript libraries that you
            might have not seen otherwise. At this point, you did not just learn
            how to use JavaScript, you learned how to create a meaningful
            product, a website! Next time you want to program something, even if
            it is not a webpage, you will know how to use programming languages
            as tool to create a bigger service. You will understand that Python
            must interact with different components to build a functional data
            analysis software. With this final step, you have successfully
            learned how to be a programmer!
          </p>
        </li>
      </ol>
    </div>
  );
};

export default SecondBlog;
