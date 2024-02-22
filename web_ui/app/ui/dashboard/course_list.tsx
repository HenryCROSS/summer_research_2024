import CourseBlock from "./course_block";

export default function CourseList() {
  const test_list = ["A", "B", "B", "B", "B"];

  return (
    <div className="w-auto bg-green-500 grid justify-items-stretch">
      <div className="grid grid-cols-5  gap-4  px-3 py-4 w-4/6 justify-self-center bg-green-300">
        {test_list.map((i) => (
          <CourseBlock></CourseBlock>
        ))}
      </div>
    </div>
  );
}
