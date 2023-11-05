import CourseGoal from "./CourseGoal";
import { type CourseGoal as TypeCourseGoal } from "../App";
import InfoBox from "./InfoBox";
import { type ReactNode } from "react";

type CourseGoalProps = {
  goals: TypeCourseGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalProps) {
  if (goals.length === 0) {
    return <InfoBox boxType="hint">You have no course goals yet.</InfoBox>;
  }

  let warnningBox: ReactNode;

  if (goals.length >= 4) {
    warnningBox = (
      <InfoBox boxType="warning" severity="high">
        You're collecting a lot of goals.
      </InfoBox>
    );
  }

  return (
    <>
      {warnningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title} id={goal.id} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
