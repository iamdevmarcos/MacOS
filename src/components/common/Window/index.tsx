import * as C from './styles';
import { WindowIcon } from '../../../utils/WindowIcons';

import Draggable from 'react-draggable';

type Props = {
    close: (value: boolean) => void;
}

export const Window = ({ close }: Props) => {
    const handleCloseWindow = () => close(false);

    return (
        <Draggable>
            <C.Container>
                <C.Top>
                    {WindowIcon.map((item, index) => (
                        <div
                            onClick={handleCloseWindow}
                            style={{backgroundColor:`${item.bgColor}`}}
                            key={index}
                        >
                            <img src={`/assets/images/icons/window/${item.title}.png`} alt="" />
                        </div>
                    ))}
                </C.Top>

                <C.Body>
                    <div className="content">
                        <p>Coming Soon!</p>
                    </div>
                </C.Body>
            </C.Container>
        </Draggable>
    );
}