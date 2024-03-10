import { CourseBlockInfo } from "@/app/lib/types";
import Link from "next/link";

export default function CourseBlock(info: CourseBlockInfo) {
  return (
    <div className="card">
      <Link href={`/dashboard/${info.id}/chatboard`}>
        <div className="card-body">
          <h5 className="card-title">{info.id}</h5>
          <p className="card-text">{info.name}</p>
        </div>
      </Link>
    </div>
  );
}
