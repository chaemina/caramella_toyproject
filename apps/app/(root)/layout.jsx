import Header from "../../components/atoms/Header";

export default function MainLayout({ children }) {
  return (
    <>
      <header className="h-[100px]">
        <Header />
      </header>
      {children}
      <h1>Footer</h1>
    </>
  );
}
