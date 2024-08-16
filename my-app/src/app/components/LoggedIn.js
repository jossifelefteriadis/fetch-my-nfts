import FetchData from "./FetchData";

export default function LoggedIn() {
  return (
    <section className="min-h-screen flex flex-col items-center">
      <section className="w-[65rem] flex flex-row justify-evenly">
        <FetchData />
      </section>
    </section>
  );
}
