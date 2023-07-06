const Card = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "200px",
        borderRadius: "10px",
        backgroundColor: "#3b3b4d",
        margin: "5vw",
      }}
    >
      <img src="https://avatars.githubusercontent.com/u/76274024?v=4" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "start",
        }}
      >
        <h2>My name is Aphinan.</h2>
        <p>You can call me Andrew.</p>
      </div>
    </div>
  );
};

export default Card;
