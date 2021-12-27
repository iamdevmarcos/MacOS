import * as C from './styles';

type Props = {
    icon: string;
    onClick: () => void
}

export const MenuIcon = ({ icon, onClick }: Props) => {
    return (
        <C.Container icon={icon} onClick={onClick}></C.Container>
    );
}