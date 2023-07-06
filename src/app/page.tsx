import { Leftside } from "@/components/leftside";
import { Rightside } from "@/components/rightside";

const Page = () => {



  return (



    <div className="w-screen h-screen bg-white container mx-auto flex flex-col max-[1024px]:px-24 ">

      <header className="mt-14 mb-14 ">
        <img src="..\images\powered.png" className="w-52" />
      </header>
      <div className="flex ">
        <Leftside />
      </div>

    </div>

  );
}
export default Page;