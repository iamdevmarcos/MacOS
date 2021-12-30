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
                    <p className="profileAbout">About this Developer</p>
                    <div className="profileDesc">
                        <span className="profileDescTitle">Hey, I'm Marcos!</span>
                        <span className='profileDescItem'>Javascript • React • Node.js</span>
                        <span className='profileDescItem'>I'm solving problems with my knowledge</span>
                        <span className='profileDescFooter'>
                            <a
                                href="https://github.com/iamdevmarcos/"
                                target="_blank"
                            >
                                Follow me on GitHub
                            </a>
                        </span>
                    </div>
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