import * as C from './styles';

type Props = {
    fadeOut: boolean;
}

export const Loading = ({ fadeOut }: Props) => {
    return (
        <C.Container fadeOut={fadeOut}>
            <div className="bg">
                <div className="loadingArea">
                    <img src="/assets/images/apple-logo.png" alt="logo" />
                    
                    <img className="loading" src="/assets/images/loading.gif" alt="loading" />
                </div>
            </div>
        </C.Container>
    );
}