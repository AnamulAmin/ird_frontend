import Header from "@/components/UI/Header/Header";
import MainContent from "@/components/MainContent/MainContent";
import Sidebar from "@/components/UI/Sidebar/Sidebar";

const DataPage = () => {
  return (
    <main className={`w-full flex gap-4 p-6`}>
      <Sidebar />
      <div className="w-full h-[95dvh]">
        <Header />
        <MainContent />
      </div>
    </main>
  );
};

export default DataPage;
