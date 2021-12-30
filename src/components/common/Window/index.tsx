import * as C from './styles';
import { WindowIcon } from '../../../utils/WindowIcons';

import Draggable from 'react-draggable';

type Props = {
    name: string;
}

export const Window = ({ name }: Props) => {
    return (
        <Draggable>
            <C.Container>
                <C.Top>
                    {WindowIcon.map((item, index) => (
                        <div
                            style={{backgroundColor:`${item.bgColor}`}}
                            key={index}
                        >
                            <img src={`/assets/images/icons/window/${item.title}.png`} alt="" />
                        </div>
                    ))}
                </C.Top>

                <C.Body>
                    <div className="content">
                        <p>{name}</p>
                        <p>Coming Soon!</p>
                    </div>
                </C.Body>
            </C.Container>
        </Draggable>
    );
}