import UserPanelLayout from "@/Components/layouts/UserPanelLayout";
import SendTicket from "@/Components/templates/p-user/tickets/sendTicket";


const page = () => {
  return (
    <UserPanelLayout>
      <SendTicket />
    </UserPanelLayout>
  );
};

export default page;
