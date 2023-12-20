import React from "react";
import axios from "axios";

const Home = () => {
  React.useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "Ahmad",
      // JSON.stringify({ "image": "https://i.ibb.co/0mYzDpF/IMG-20221019-111556-1.jpg" }),
    };
    axios
      .post(
        "https://tpteroin2vasgw7aioeaxuvtby0aptyz.lambda-url.ap-south-1.on.aws/?body=slam"
      )
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, []);
  return <div>
    
  </div>;
};

export default Home;
