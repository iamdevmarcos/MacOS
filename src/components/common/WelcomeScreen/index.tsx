import * as C from './styles';

type Props = {
    fadeOut: boolean;
}

export const WelcomeScreen = ({ fadeOut }: Props) => {
    return (
        <C.Container fadeOut={fadeOut}>
            <div className="bg">
                <div className="content">
                    <span>hello</span>
                </div>
            </div>
        </C.Container>
    );
}