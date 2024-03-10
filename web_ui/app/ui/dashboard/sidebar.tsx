import Link from "next/link";
import Settings from "./settings";
import ChatRecordList from "./chat_record_list";

export default function SideBar() {
  return (
    <div className="h-full flex flex-col justify-between">
      <ChatRecordList></ChatRecordList>
      <Settings></Settings>
    </div>
  );
}
