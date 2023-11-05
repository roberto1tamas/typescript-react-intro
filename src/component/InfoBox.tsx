import { type ReactNode } from "react";

type HintBoxProps = {
  boxType: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  boxType: "warning";
  severity?: "low" | "medium" | "high";
  children: ReactNode;
};

export type InfoBoxProps = HintBoxProps | WarningBoxProps;

export default function InfoBox(props: InfoBoxProps) {
  const { children } = props;
  if (props.boxType === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  const { severity } = props;
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
