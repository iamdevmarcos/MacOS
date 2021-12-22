import * as C from './styles';

type Props = {
    icon: string;
}

export const MenuIcon = ({ icon }: Props) => {
    return (
        <C.Container icon={icon}></C.Container>
    );
}