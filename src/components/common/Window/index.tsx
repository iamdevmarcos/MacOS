import * as C from './styles';
import { WindowIcon } from '../../../utils/WindowIcons';

type Props = {
    close: (value: boolean) => void;
}

export const Window = ({ close }: Props) => {
    const handleCloseWindow = () => close(false);

    return (
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
        </C.Container>
    );
}