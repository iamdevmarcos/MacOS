import * as C from './styles';

type Props = {
    name: string;
}

export const WindowComponent = ({ name }: Props) => {
    return (
        <C.Container>
            {name === 'github_profile' &&
                <div className="githubProfile">
                    <img
                        className="profileImage"
                        src="/assets/images/logo.png"
                        alt="logo"
                    />
                    <p>About this Developer</p><hr />
                </div>
            }

            {name !== 'github_profile' &&
                <>
                    <img
                        className="componentImage"
                        src={`/assets/images/icons/appicons/${name}.png`}
                        alt="icon"
                    />
                    <p>App coming soon!</p>
                </>
            }
        </C.Container>
    );
}