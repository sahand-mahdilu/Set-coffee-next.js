import { authUser } from "@/utils/severHelpers";
import connectedToDB from "../../../../configs/db";
import TicketModel from "../../../../models/Ticket";
import UserPanelLayout from "@/Components/layouts/UserPanelLayout";
import Tickets from "@/Components/templates/p-user/tickets/Tickets";


const page = async () => {
    await connectedToDB();
    const user = await authUser();
  
    if (!user || !user._id) {
     
      return (
        <UserPanelLayout>
          <div>کاربری یافت نشد. لطفا دوباره وارد شوید.</div>
        </UserPanelLayout>
      );
    }
  
    const tickets = await TicketModel.find({ user: user._id }).populate(
      "department",
      "title"
    ).sort({ _id: -1 });
  
    return (
      <UserPanelLayout>
        <Tickets tickets={JSON.parse(JSON.stringify(tickets))} />
      </UserPanelLayout>
    );
  };

export default page;
