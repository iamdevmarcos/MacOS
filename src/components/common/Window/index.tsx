import * as C from "./styles";
import { WindowIcon } from "../../../data/WindowIcons";

import { WindowComponent } from "./components/WindowComponent";

import Draggable from "react-draggable";

type Props = {
  name: string;
  closeWindow: () => void;
};

export const Window = ({ name, closeWindow }: Props) => {
  return (
    <Draggable>
      <C.Container>
        <C.Top>
          {WindowIcon.map((item, index) => (
            <div
              style={{ backgroundColor: `${item.bgColor}` }}
              key={index}
              onClick={closeWindow}
            >
              <img
                src={`/assets/images/icons/window/${item.title}.png`}
                alt=""
              />
            </div>
          ))}
        </C.Top>

        <C.Body>{name !== "none" && <WindowComponent name={name} />}</C.Body>
      </C.Container>
    </Draggable>
  );
};
