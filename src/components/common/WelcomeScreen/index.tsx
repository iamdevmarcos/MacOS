import * as C from './styles';

type Props = {
    fadeOut: boolean;
}

export const WelcomeScreen = ({ fadeOut }: Props) => {
    return (
        <C.Container fadeOut={fadeOut}>
            <div className="bg">
                <div className="content">
                    <img
                        className="hello"
                        src="/assets/images/hello.png"
                        alt="hello"
                    />
                </div>
            </div>
        </C.Container>
    );
}