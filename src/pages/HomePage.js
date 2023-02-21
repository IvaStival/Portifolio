import "./index.css";
import "./HomePage.css";

import NavHome from "../components/NavHome";
import MainPost from "../components/MainPost";
import Post from "../components/Post";

const HomePage = () => {
  const config = [
    {
      img_url:
        "https://fastly.picsum.photos/id/1050/300/200.jpg?hmac=LyIrq7GNsK60mROL-DCkjsyuaojg5STv_L3Lyp4iyzo",
      category: "React",
      title: "Codificando React App com ajuda da ChatGPT",
      resume:
        "Neste post eu explico como fazer um código React usando o ChatGPT que está disponível na internet de graça",
      date: "20/02/2023",
    },
    {
      img_url:
        "https://fastly.picsum.photos/id/225/300/200.jpg?hmac=9aBq3ias-WLkp-aUVk3YvCe-HNEcGsgH0P1vl1j-Y9s",
      category: "3D Printer",
      title: "Monting the 3D Printer Structure",
      resume: "I will show all the steps to mount a 3D Printer",
      date: "21/02/2023",
    },
    {
      img_url:
        "https://fastly.picsum.photos/id/581/300/200.jpg?hmac=vpblwiLZY0C1VUPUk6HUZU2t-hpQqv02a1zjLwi_ml4",
      category: "React",
      title: "Creating a React Page",
      resume:
        "I will show in this post how to create a React page from scratch",
      date: "21/02/2023",
    },
    {
      img_url:
        "https://fastly.picsum.photos/id/660/300/200.jpg?hmac=xL8ZmyrPt_FKSVNoeQH8S87il2UFygnpd_6PCkhQ7nQ",
      category: "C++",
      title: "Create a Render Ray Tracing",
      resume: "In this post we will code a Ray Tracing Render",
      date: "20/02/2023",
    },
    {
      img_url:
        "https://fastly.picsum.photos/id/169/300/200.jpg?hmac=5jPn2NBQnnaRgJiVhZuzUQ0te7sUVYMz-SMAXlVdHGI",
      category: "C++",
      title: "Bitmap Code",
      resume: "In this post we will code a Bitmap",
      date: "20/02/2023",
    },
  ];

  const main_data = {
    category: "C++",
    img_url:
      "https://fastly.picsum.photos/id/637/1200/800.jpg?hmac=cSJ3f6SmVHpuRh74Q_SSfKZ4H-lk3VXwfP-AMxuiNVM",
    title: "C++ Emulator Development",
    resume:
      "Amet exercitation enim exercitation aliquip velit sit veniam aliquip nulla. Nostrud adipisicing aute nostrud Lorem irure. Reprehenderit eiusmod amet quis proident. In eiusmod mollit laborum elit ad aute cillum irure laborum ad incididunt irure. Elit cillum irure sit anim velit tempor magna reprehenderit ea aliqua. Labore nisi commodo nostrud dolor esse ea anim fugiat quis consectetur do. Ex elit amet dolore ullamco irure dolore Lorem commodo ea excepteur do velit. Proident cupidatat laboris velit dolore nostrud eu cillum elit.",
    date: "20/02/2023",
  };

  const renderedPosts = config.map((item) => {
    return (
      <Post
        key={item.title}
        img_url={item.img_url}
        category={item.category}
        title={item.title}
        resume={item.resume}
        date={item.date}
      />
    );
  });

  return (
    <div className="page-container">
      <div className="home-top">
        <NavHome />
        <MainPost
          category={main_data.category}
          img_url={main_data.img_url}
          title={main_data.title}
          resume={main_data.resume}
          date={main_data.date}
        />
      </div>
      <div className="home-down">
        <div className="posts">{renderedPosts}</div>
      </div>
    </div>
  );
};

export default HomePage;
