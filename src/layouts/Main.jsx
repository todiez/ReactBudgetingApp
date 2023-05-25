//rrd importts
import { Outlet, useLoaderData } from "react-router-dom";

//assets import
import wave from "../assets/wave.svg";

//components
import Nav from "../components/Nav";

//helper functions
import { fetchData } from "../helpers";

//loader function
export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();

  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        Inside Main
        <Outlet />
      </main>
      <img src={ wave } alt="" />
    </div>
  );
};

export default Main;
