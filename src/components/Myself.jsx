import Partone from "./Partone";
import Partwo from "./Partwo";

const Myself = () => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex ">
          <div className="bg-slate-900 text-white">
            <img
              src="./KABIUL.jpg"
              alt="mahafizur"
              width={150}
              className="justify-items-center m-8 rounded-full"
            />
            <Partone />
          </div>

          <Partwo />
        </div>
      </div>
    </>
  );
};

export default Myself;
