import * as C from './styles';

type Props = {
    name: string;
}

export const WindowComponent = ({ name }: Props) => {
    return (
        <C.Container>
            {name === 'github_profile' &&
                <>
                    <img src={`/assets/images/icons/appicons/${name}.png`} alt="icon" />
                    <p>{name}</p>
                </>
            }

            {name !== 'github_profile' &&
                <>
                    <img src={`/assets/images/icons/appicons/${name}.png`} alt="icon" />
                    <p>App coming soon!</p>
                </>
            }
        </C.Container>
    );
}