import * as C from './styles';

type Props = {
    icon: string;
    onClick: (iconName: string) => void
}

export const MenuIcon = ({ icon, onClick }: Props) => {
    return (
        <C.Container icon={icon} onClick={e=>onClick(icon)}></C.Container>
    );
}