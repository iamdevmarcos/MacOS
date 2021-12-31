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
                        <span className='profileDescItem'>Javascript • React • Node.js <br />I solve problems with my knowledge</span>
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

            {name === 'github_folder' &&
                <div className="githubFolder">
                    <img
                        className="componentImage"
                        src={`/assets/images/icons/appicons/github_folder.png`}
                        alt="icon"
                    />
                    <p className="githubFolderTitle">You can see the source code <br/> by clicking below.</p>
                    <p className="githubFolderFeedBack">I will be very happy if you give your feedback on this project 😄</p>
                    <p className="githubFolderLink">
                        <a
                            href="https://github.com/iamdevmarcos/macOS"
                            target="_blank"
                        >
                            View source code
                        </a>
                    </p>
                </div>
            }

            {name !== 'github_profile' && name !== 'github_folder' &&
                <>
                    <img
                        className="componentImage"
                        src={`/assets/images/icons/appicons/${name}.png`}
                        alt="icon"
                    />
                    <p className='comingSoon'>App coming soon!</p>
                </>
            }
        </C.Container>
    );
}