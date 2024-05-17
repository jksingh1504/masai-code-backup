export default function Home() {
  const token = localStorage.getItem("token");
  return (
    <div>
      <br />
      <br />
      <br />
      <h1>Welcome to the home page.</h1>
      <br />
      {token ? <h2>you are authenticated your token is {token}</h2> : null}
    </div>
  );
}
