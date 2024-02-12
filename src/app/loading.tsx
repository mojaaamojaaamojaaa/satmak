import Image from "next/image";
export default function Loading() {
  return (
    <div className="flex h-screen w-full  justify-center items-center ">
      <div className="flex-col justify-center ">
        <div className="flex justify-center">
          <Image
            src={"/images/spinner.svg"}
            height={300}
            width={300}
            alt="DOWNLOAAAAAAD"
          />
        </div>
        <div className="flex justify-center">
          <h1 className="2xl"> Loading...</h1>
        </div>
      </div>
    </div>
  );
}
