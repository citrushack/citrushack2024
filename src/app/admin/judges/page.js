import ProtectedPage from "@/components/ProtectedPage";
import Judges from "@/components/admin/dashboards/Judges";

const Page = () => {
  return (
    <ProtectedPage title="Admin | Judges" restrictions={["admin", "committee"]}>
      <Judges />
    </ProtectedPage>
  );
};

export default Page;
